"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/components/CartProvider";
import { toast } from "react-hot-toast";

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (s, p) => s + Number(p.price.replace(/\D/g, "")) * p.qty,
    0
  );

  return (
    <main className="bg-[#e56c83]/25 w-full min-h-screen py-12 px-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Cart kosong.</p>
          <Link href="/shop" className="text-blue-600">
            Go shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => {
                        updateQty(item.slug, Math.max(1, item.qty - 1));
                        toast.success(`Updated ${item.title} quantity`);
                      }}
                      className="px-2 border"
                    >
                      -
                    </button>

                    <div>{item.qty}</div>

                    <button
                      onClick={() => {
                        updateQty(item.slug, item.qty + 1);
                        toast.success(`Updated ${item.title} quantity`);
                      }}
                      className="px-2 border"
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        removeFromCart(item.slug);
                        toast.error(`${item.title} removed from cart`);
                      }}
                      className="ml-4 text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <div className="text-lg">
              Total: Rp {total.toLocaleString()}
            </div>

            <Link
              href="/checkout"
              className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={() => {
                clearCart();
                toast.error("Cart cleared");
              }}
              className="ml-4 inline-block bg-red-500 text-white px-6 py-2 rounded-full"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}
