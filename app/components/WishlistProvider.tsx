"use client";
import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type WishlistItem = {
  slug: string;
  title: string;
  image: string;
  price: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  toggleWishlist: (product: WishlistItem) => void;
  isWishlisted: (slug: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [list, setList] = useLocalStorage<WishlistItem[]>("wishlist_v1", []);

  const toggleWishlist = (product: WishlistItem) => {
    setList((prev) => {
      const exists = prev.find((p) => p.slug === product.slug);
      if (exists) {
        return prev.filter((p) => p.slug !== product.slug);
      }

      return [...prev, product];
    });
  };

  const isWishlisted = (slug: string) =>
    list.some((p) => p.slug === slug);

  return (
    <WishlistContext.Provider
      value={{ wishlist: list, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}