
"use client";
import { useSearchParams } from "next/navigation";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("query") || "";

  const results = products.filter((p: any) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="py-12 px-6 min-h-screen bg-[#d27b9a]/50">
      <h1 className="text-2xl font-semibold mb-6">
        Search results for "{query}"
      </h1>

      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
