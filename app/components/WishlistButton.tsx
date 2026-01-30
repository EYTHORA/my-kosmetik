"use client";

import { useWishlist } from "./WishlistProvider";

export default function WishlistButton({ product }: { product: any }) {
  const { wishlist, toggleWishlist } = useWishlist();

  const isWishlisted = wishlist.some((p) => p.id === product.id);

  return (
    <button onClick={() => toggleWishlist(product)}>
      <span className="material-icons text-pink-600">
        {isWishlisted ? "favorite" : "favorite_border"}
      </span>
    </button>
  );
}
