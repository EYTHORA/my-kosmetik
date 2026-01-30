import ProductCard from "@/app/components/ProductCard";

const haircare = [
  {
    id: 1,
    slug: "anti-hair-loss-shampoo",
    title: "Anti-Hair Loss Shampoo",
    price: "Rp 129.000",
    image: "/hair_care/Anti-HairLossShampoo.jpg",
  },
  {
    id: 2,
    slug: "anti-dandruff-shampoo",
    title: "Anti-Dandruff Shampoo",
    price: "Rp 119.000",
    image: "/hair_care/Anti-DandruffShampoo.jpg",
  },
  {
    id: 3,
    slug: "gentle-hair-essence-shampoo",
    title: "Gentle Hair Essence Shampoo (Non-SLS)",
    price: "Rp 139.000",
    image: "/hair_care/GentleHairEssenceShampoo.jpg",
  },
  {
    id: 4,
    slug: "hair-revitalizer-mist",
    title: "Hair Revitalizer Mist",
    price: "Rp 109.000",
    image: "/hair_care/HairRevitalizerMist.jpg",
  },
  {
    id: 5,
    slug: "intensive-hair-mask",
    title: "Intensive Hair Mask",
    price: "Rp 149.000",
    image: "/hair_care/IntensiveHairMask.jpg",
  },
  {
    id: 6,
    slug: "candlenut-oil",
    title: "Candlenut Oil",
    price: "Rp 89.000",
    image: "/hair_care/CandlenutOil.jpg",
  },
  {
    id: 7,
    slug: "smooth-shine-shampoo",
    title: "Smooth & Shine Shampoo",
    price: "Rp 99.000",
    image: "/hair_care/SmoothShineShampoo.jpg",
  },
  {
    id: 8,
    slug: "nourishing-conditioner",
    title: "Nourishing Conditioner",
    price: "Rp 109.000",
    image: "/hair_care/NourishingConditioner.jpg",
  },
  {
    id: 9,
    slug: "hair-vitamin-serum",
    title: "Hair Vitamin Serum",
    price: "Rp 129.000",
    image: "/hair_care/HairVitaminSerum.jpg",
  },
  {
    id: 10,
    slug: "moisture-repair-hair-mask",
    title: "Moisture Repair Hair Mask",
    price: "Rp 149.000",
    image: "/hair_care/MoistureRepairHairMask.jpg",
  },
  {
    id: 11,
    slug: "anti-frizz-spray",
    title: "Anti-Frizz Spray",
    price: "Rp 89.000",
    image: "/hair_care/Anti-FrizzSpray.jpg",
  },
  {
    id: 12,
    slug: "scalp-refresh-tonic",
    title: "Scalp Refresh Tonic",
    price: "Rp 119.000",
    image: "/hair_care/ScalpRefreshTonic.jpg",
  },
  {
    id: 13,
    slug: "hair-strengthening-oil",
    title: "Hair Strengthening Oil",
    price: "Rp 139.000",
    image: "/hair_care/HairStrengtheningOil.jpg",
  },
  {
    id: 14,
    slug: "heat-protection-mist",
    title: "Heat Protection Mist",
    price: "Rp 99.000",
    image: "/hair_care/HeatProtectionMist.jpg",
  },
  {
    id: 15,
    slug: "hair-tonic",
    title: "Hair Tonic",
    price: "Rp 99.000",
    image: "/hair_care/HairTonic.jpg",
  },
  {
    id: 16,
    slug: "silky-smooth-leave-in-conditioner",
    title: "Silky Smooth Leave-In Conditioner",
    price: "Rp 129.000",
    image: "/hair_care/SilkySmoothLeave-InConditioner.jpg",
  },
];

export default function HaircarePage() {
  return (
     <main className="bg-[#f39a99] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white font-poppins text-center">Hair care</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {haircare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
