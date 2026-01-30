"use client";
import Image from "next/image";
import { useWishlist } from "../components/WishlistProvider";
import { useCart } from "../components/CartProvider";
import { toast } from "react-hot-toast";

type WishlistItem = {
  slug: string;
  title: string;
  price: string;
  image: string;
};

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="bg-[#f39a99]/20 w-full min-h-screen py-12 px-6">
      <h1 className="text-2xl font-semibold mb-6 text-center font-poppins">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center">Wishlist kosong.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {wishlist.map((w: WishlistItem) => (
            <div key={w.slug} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <Image
                src={w.image}
                alt={w.title}
                width={80}
                height={80}
                className="object-cover rounded"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="font-medium">{w.title}</div>
                  <div>{w.price}</div>
                </div>

                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(w, 1);
                      toast.success(`${w.title} added to cart 🛒`);
                    }}
                    className="bg-[#c96586] text-white px-3 py-1 rounded"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(w)}
                    className="px-3 py-1 border rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}