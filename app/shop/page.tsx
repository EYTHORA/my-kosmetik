"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import type { Product } from "@/app/types/product";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Makeup", value: "makeup" },
  { label: "Skincare", value: "skincare" },
  { label: "Hair Care", value: "haircare" },
  { label: "Body Care", value: "bodycare" },
  { label: "Nail Care", value: "nailcare" },
  { label: "Oral Care", value: "oralcare" },
];

export default function ShopPage() {
  const params = useSearchParams();
  const q = params?.get("search") || "";

  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(16);

  const products = useMemo<Product[]>(() => {
    let data = productsData as Product[];

    if (q) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(q.toLowerCase()),
      );
    }

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    if (sortOption === "priceLow") {
      data.sort(
        (a, b) =>
          Number(a.price.replace(/\D/g, "")) -
          Number(b.price.replace(/\D/g, "")),
      );
    }

    if (sortOption === "priceHigh") {
      data.sort(
        (a, b) =>
          Number(b.price.replace(/\D/g, "")) -
          Number(a.price.replace(/\D/g, "")),
      );
    }

    if (sortOption === "popular") {
      data.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0));
    }

    return data;
  }, [q, category, sortOption]);

  const visibleItems = products.slice(0, visibleCount);

  return (
    <main className="py-12 px-6 bg-[#d27b9a]/40 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-white text-center">
        Discover Your Beauty {q ? `— results for "${q}"` : ""}
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setVisibleCount(16);
          }}
          className="p-2 border rounded"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          aria-label="Sort products"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setVisibleCount(16);
          }}
          className="p-2 border rounded"
        >
          <option value="popular">Most Popular</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleItems.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
