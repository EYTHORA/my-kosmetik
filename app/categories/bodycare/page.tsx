import ProductCard from "@/app/components/ProductCard";

const bodycare = [
  {
    id: 1,
    slug: "lightweight-body-lotion",
    title: "Lightweight Body Lotion",
    price: "Rp 89.000",
    image: "/body_care/LightweightBodyLotion.jpg",
  },
  {
    id: 2,
    slug: "ultra-moist-body-cream",
    title: "Ultra Moist Body Cream",
    price: "Rp 109.000",
    image: "/body_care/UltraMoistBodyCream.jpg",
  },
  {
    id: 3,
    slug: "intense-repair-body-butter",
    title: "Intense Repair Body Butter",
    price: "Rp 129.000",
    image: "/body_care/IntenseRepairBodyButter.jpg",
  },
  {
    id: 4,
    slug: "nourishing-body-oil",
    title: "Nourishing Body Oil",
    price: "Rp 119.000",
    image: "/body_care/NourishingBodyOil.jpg",
  },
  {
    id: 5,
    slug: "brightening-body-serum",
    title: "Brightening Body Serum",
    price: "Rp 135.000",
    image: "/body_care/BrighteningBodySerum.jpg",
  },
  {
    id: 6,
    slug: "soft-hand-cream",
    title: "Soft Hand Cream",
    price: "Rp 49.000",
    image: "/body_care/SoftHandCream.jpg",
  },
  {
    id: 7,
    slug: "refreshing-body-wash",
    title: "Refreshing Body Wash",
    price: "Rp 79.000",
    image: "/body_care/RefreshingBodyWash.jpg",
  },
  {
    id: 8,
    slug: "gentle-exfoliating-body-scrub",
    title: "Gentle Exfoliating Body Scrub",
    price: "Rp 99.000",
    image: "/body_care/GentleExfoliatingBodyScrub.jpg",
  },
  {
    id: 9,
    slug: "floral-breeze-body-mist",
    title: "Floral Breeze Body Mist",
    price: "Rp 75.000",
    image: "/body_care/FloralBreezeBodyMist.jpg",
  },
  {
    id: 10,
    slug: "sweet-vanilla-body-mist",
    title: "Sweet Vanilla Body Mist",
    price: "Rp 75.000",
    image: "/body_care/SweetVanillaBodyMist.jpg",
  },
  {
    id: 11,
    slug: "uv-shield-body-sunscreen-spf-50",
    title: "UV Shield Body Sunscreen SPF 50",
    price: "Rp 129.000",
    image: "/body_care/UVShieldBodySunscreenSPF50.jpg",
  },
  {
    id: 12,
    slug: "cooling-foot-cream",
    title: "Cooling Foot Cream",
    price: "Rp 55.000",
    image: "/body_care/CoolingFootCream.jpg",
  },
];

export default function BodycarePage() {
  return (
     <main className="bg-[#FFBAB1] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white font-poppins text-center ">Body care</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bodycare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
