import ProductCard from "@/app/components/ProductCard"
import type { Product } from "@/app/types/product"

const haircare: Product[] = [
  {
    id: 1,
    slug: "anti-hair-loss-shampoo",
    title: "Anti-Hair Loss Shampoo",
    price: "Rp 129.000",
    image: "/hair_care/Anti-HairLossShampoo.jpg",
    category: "haircare",
  },
  {
    id: 2,
    slug: "anti-dandruff-shampoo",
    title: "Anti-Dandruff Shampoo",
    price: "Rp 119.000",
    image: "/hair_care/Anti-DandruffShampoo.jpg",
    category: "haircare",
  },
  {
    id: 3,
    slug: "gentle-hair-essence-shampoo",
    title: "Gentle Hair Essence Shampoo (Non-SLS)",
    price: "Rp 139.000",
    image: "/hair_care/GentleHairEssenceShampoo.jpg",
    category: "haircare",
  },
  {
    id: 4,
    slug: "hair-revitalizer-mist",
    title: "Hair Revitalizer Mist",
    price: "Rp 109.000",
    image: "/hair_care/HairRevitalizerMist.jpg",
    category: "haircare",
  },
  {
    id: 5,
    slug: "intensive-hair-mask",
    title: "Intensive Hair Mask",
    price: "Rp 149.000",
    image: "/hair_care/IntensiveHairMask.jpg",
    category: "haircare",
  }
]

export default function HaircarePage() {
  return (
    <main className="bg-[#f39a99] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Hair care
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {haircare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}