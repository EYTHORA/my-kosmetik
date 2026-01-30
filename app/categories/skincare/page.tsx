import ProductCard from "@/app/components/ProductCard";

const skincare = [
  {
    id: 1,
    slug: "hydra-glow-serum",
    title: "Hydra Glow Serum",
    price: "Rp 129.000",
    image: "/skin_care/HydraGlowSerum.jpg",
  },
  {
    id: 2,
    slug: "soft-facial-wash",
    title: "Soft Facial Wash",
    price: "Rp 89.000",
    image: "/skin_care/SoftFacialWash.jpg",
  },
  {
    id: 3,
    slug: "refresh-toner",
    title: "Refresh Toner",
    price: "Rp 79.000",
    image: "/skin_care/RefreshToner.jpg",
  },
  {
    id: 4,
    slug: "day-moisturizer-cream",
    title: "Day Moisturizer Cream",
    price: "Rp 139.000",
    image: "/skin_care/DayMoisturizerCream.jpg",
  },
  {
    id: 5,
    slug: "sunscreen-spf-50",
    title: "Sunscreen SPF 50+",
    price: "Rp 99.000",
    image: "/skin_care/SunscreenSPF50+.jpg",
  },
  {
    id: 6,
    slug: "night-repair-cream",
    title: "Night Repair Cream",
    price: "Rp 149.000",
    image: "/skin_care/NightRepairCream.jpg",
  },
  {
    id: 7,
    slug: "bright-eye-cream",
    title: "Bright Eye Cream",
    price: "Rp 119.000",
    image: "/skin_care/BrightEyeCream.jpg",
  },
  {
    id: 8,
    slug: "moisture-boost-sheet-mask",
    title: "Moisture Boost Sheet Mask",
    price: "Rp 25.000",
    image: "/skin_care/MoistureBoostSheetMask.jpg",
  }
];

export default function SkincarePage() {
  return (
    <main className="w-full min-h-screen bg-[#d690b3]/80 px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white font-poppins text-center">Skin Care</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skincare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
