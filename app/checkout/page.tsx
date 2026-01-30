"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../components/CartProvider";
import { useAuth } from "../components/AuthProvider";

export default function CheckoutPage() {
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // proteksi login
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      clearCart();
      setLoading(false);
      alert("Order placed successfully (mock)");
      router.push("/");
    }, 1000);
  };

  return (
    <main className="w-full min-h-screen bg-[#e67a81]/15 py-12 px-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <p className="mb-4">Halo, {user.email}</p>

      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Full name"
            className="w-full p-3 border rounded"
          />
          <input
            required
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            required
            placeholder="Shipping address"
            className="w-full p-3 border rounded"
          />

          <button
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </form>
      )}
    </main>
  );
}