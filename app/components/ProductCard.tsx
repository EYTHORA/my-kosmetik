"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useWishlist } from "@/app/components/WishlistProvider";
import { useCart } from "@/app/components/CartProvider";

import type { Product } from "@/app/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  const reviews = product.reviews || [];
  const reviewCount = reviews.length;

  const averageRating =
    reviewCount > 0
      ? Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount)
      : 0;

  return (
    <div className="relative bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition">
      {/* IMAGE */}
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.title}
          width={300}
          height={300}
        />
      </Link>

      {/* TITLE */}
      <h3 className="font-semibold mt-4 h-16 flex items-start">
        {product.title}
      </h3>

      {/* RATING */}
      {reviewCount > 0 && (
        <div className="flex items-center gap-1 text-sm mt-1">
          <span className="text-yellow-500">{"★".repeat(averageRating)}</span>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
      )}

      {/* PRICE + WISHLIST ROW */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-[#cd6582] font-semibold">{product.price}</p>
        <button onClick={() => toggleWishlist(product)} className="w-6 h-6">
          {isWishlisted(product.slug) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* ADD TO CART */}
      <button
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart");
        }}
        className="mt-4 w-full bg-[#c96586] text-white py-2 rounded-lg"
      >
        ADD TO CART
      </button>
    </div>
  );
}
