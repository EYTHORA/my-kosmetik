import ProductCard from "@/app/components/ProductCard";

const oralcare = [
  // 🪥 Toothbrush
  {
    id: 1,
    slug: "soft-clean-toothbrush",
    title: "Soft Clean Toothbrush",
    price: "Rp 25.000",
    image: "/oral_care/SoftCleanToothbrush.jpg",
  },
  {
    id: 2,
    slug: "electric-toothbrush-mini",
    title: "Electric Toothbrush Mini",
    price: "Rp 199.000",
    image: "/oral_care/ElectricToothbrushMini.jpg",
  },

  // 🦷 Toothpaste
  {
    id: 3,
    slug: "daily-fresh-toothpaste",
    title: "Daily Fresh Toothpaste",
    price: "Rp 29.000",
    image: "/oral_care/DailyFreshToothpaste.jpg",
  },
  {
    id: 4,
    slug: "sensitive-care-toothpaste",
    title: "Sensitive Care Toothpaste",
    price: "Rp 35.000",
    image: "/oral_care/SensitiveCareToothpaste.jpg",
  },
  {
    id: 5,
    slug: "whitening-pearl-toothpaste",
    title: "Whitening Pearl Toothpaste",
    price: "Rp 39.000",
    image: "/oral_care/WhiteningPearlToothpaste.jpg",
  },
  {
    id: 6,
    slug: "herbal-mint-toothpaste",
    title: "Herbal Mint Toothpaste",
    price: "Rp 32.000",
    image: "/oral_care/HerbalMintToothpaste.jpg",
  },

  // 🧵 Dental Floss
  {
    id: 7,
    slug: "gentle-dental-floss",
    title: "Gentle Dental Floss",
    price: "Rp 28.000",
    image: "/oral_care/GentleDentalFloss.jpg",
  },
  {
    id: 8,
    slug: "dental-floss-pick",
    title: "Dental Floss Pick",
    price: "Rp 30.000",
    image: "/oral_care/DentalFlossPick.jpg",
  },

  // 💧 Mouthwash
  {
    id: 9,
    slug: "fresh-breath-mouthwash",
    title: "Fresh Breath Mouthwash",
    price: "Rp 45.000",
    image: "/oral_care/FreshBreathMouthwash.jpg",
  },
  {
    id: 10,
    slug: "sensitive-care-mouthwash",
    title: "Sensitive Care Mouthwash",
    price: "Rp 49.000",
    image: "/oral_care/SensitiveaCareMouthwash.jpg",
  },

  // ✨ Produk Tambahan
  {
    id: 11,
    slug: "tongue-cleaner",
    title: "Tongue Cleaner",
    price: "Rp 22.000",
    image: "/oral_care/TongueCleaner.jpg",
  },
  {
    id: 12,
    slug: "interdental-brush-set",
    title: "Interdental Brush Set",
    price: "Rp 35.000",
    image: "/oral_care/InterdentalBrushSet.jpg",
  },
  {
    id: 13,
    slug: "dry-mouth-relief-spray",
    title: "Dry Mouth Relief Spray",
    price: "Rp 55.000",
    image: "/oral_care/DryMouthReliefSpray.jpg",
  },
  {
    id: 14,
    slug: "mouth-guard-night-care",
    title: "Mouth Guard Night Care",
    price: "Rp 89.000",
    image: "/oral_care/MouthGuardNightCare.jpg",
  },
    {
    id: 15,
    slug: "plaque-reveal-chew-tablets",
    title: "Plaque Reveal Chew Tablets",
    price: "Rp 42.000",
    image: "/oral_care/PlaqueRevealChewTablets.jpg",
  },
  {
    id: 16,
    slug: "kids-strawberry-toothpaste",
    title: "Kids Strawberry Toothpaste",
    price: "Rp 27.000",
    image: "/oral_care/KidsStrawberryToothpaste.jpg",
  },

];

export default function OralcarePage() {
  return (
     <main className="bg-[#dab9e6] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white text-center font-poppins">Oral Care</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {oralcare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
