"use client";

import { use } from "react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/components/CartProvider";
import products from "@/app/data/products.json";
import { useWishlist } from "@/app/components/WishlistProvider";
import { toast } from "react-hot-toast";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params); // ✅ WAJIB
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const product = products.find((p) => p.slug === id);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="w-full min-h-screen bg-[#d690b3]/10 py-12 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="relative h-[520px] bg-white rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{product.title}</h1>

          {product.size && (
            <p className="text-sm text-gray-500">{product.size}</p>
          )}

          {/* RATING */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-600">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* DESCRIPTION */}
          <h3 className="font-medium mb-1">Description</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {product.description}
          </p>

          {product.howToUse && (
            <div>
              <h3 className="font-medium mb-1">How To Use</h3>
              <p className="text-gray-700 text-justify">{product.howToUse}</p>
            </div>
          )}

          {/* INGREDIENTS */}
          {product.ingredients && (
            <div>
              <p className="font-medium mb-1">Ingredients</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {product.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          {/* PRICE + WISHLIST */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-[#cd6582]">
              {product.price}
            </p>

            <button onClick={() => toggleWishlist(product)} className="w-6 h-6">
              {isWishlisted(String(product.id)) ? "❤️" : "🤍"}
            </button>
          </div>

          {/* QTY + ADD TO CART */}
          <div className="flex gap-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2"
              >
                +
              </button>
            </div>

             <button
        onClick={() => {
          addToCart(product); // ini fungsi dari context
          toast.success("Added to cart");
        }}
        className="mt-4 w-full bg-[#c96586] text-white py-2 rounded-lg"
      >
        ADD TO CART
      </button>

          </div>
        </div>
      </div>
      {/* REVIEWS */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

        {/* SUMMARY */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          <button className="border px-4 py-2 rounded-full text-sm">
            Write a review
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-8">
          {product.reviews?.map((r, i) => (
            <div key={i} className="flex gap-6 border-b pb-6">
              {/* TEXT */}
              <div className="flex-1">
                <div className="text-sm mb-1 text-yellow-500 ">
                  {"★".repeat(r.rating)}
                </div>
                <p className="text-gray-700 text-sm">{r.comment}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {r.name} {r.date && `• ${r.date}`}
                </p>
              </div>

              {/* IMAGE */}
              {r.image && (
                <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
