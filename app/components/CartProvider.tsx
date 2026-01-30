"use client";
import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type CartItem = {
  slug: string;
  title: string;
  price: string;
  image: string;
  qty: number;
};

type CartContext = {
  cartItems: CartItem[];
  addToCart: (product: any, qty?: number) => void;
  updateQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContext | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart_v1", []);

  const addToCart = (product: any, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.slug === product.slug);
      if (found) {
        return prev.map((p) =>
          p.slug === product.slug ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          title: product.title,
          price: product.price,
          image: product.image,
          qty,
        },
      ];
    });
  };

  const updateQty = (slug: string, qty: number) => {
    setCart((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, qty } : p))
    );
  };

  const removeFromCart = (slug: string) =>
    setCart((prev) => prev.filter((p) => p.slug !== slug));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cartItems: cart, addToCart, updateQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}