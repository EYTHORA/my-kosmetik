import ProductCard from "@/app/components/ProductCard";

const nailcare = [
  {
    id: 1,
    slug: "nourishing-cuticle-oil",
    title: "Nourishing Cuticle Oil",
    price: "Rp 45.000",
    image: "/nail_care/NourishingCuticleOil.jpg",
  },
  {
    id: 2,
    slug: "soft-cuticle-repair-cream",
    title: "Soft Cuticle Repair Cream",
    price: "Rp 49.000",
    image: "/nail_care/SoftCuticleRepairCream.jpg",
  },
  {
    id: 3,
    slug: "gentle-cuticle-remover",
    title: "Gentle Cuticle Remover",
    price: "Rp 39.000",
    image: "/nail_care/GentleCuticleRemover.jpg",
  },
  {
    id: 4,
    slug: "protein-nail-strengthener",
    title: "Protein Nail Strengthener",
    price: "Rp 55.000",
    image: "/nail_care/ProteinNailStrengthener.jpg",
  },
  {
    id: 5,
    slug: "natural-shine-nail-buffer",
    title: "Natural Shine Nail Buffer",
    price: "Rp 29.000",
    image: "/nail_care/NaturalShineNailBuffer.jpg",
  },
  {
    id: 6,
    slug: "protective-base-coat",
    title: "Protective Base Coat",
    price: "Rp 39.000",
    image: "/nail_care/ProtectiveBaseCoat.jpg",
  },
  {
    id: 7,
    slug: "color-nail-polish-rose-nude",
    title: "Color Nail Polish – Rose Nude",
    price: "Rp 45.000",
    image: "/nail_care/ColorNailPolish–RoseNude.jpg",
  },
  {
    id: 8,
    slug: "glossy-top-coat",
    title: "Glossy Top Coat",
    price: "Rp 39.000",
    image: "/nail_care/GlossyTopCoat.jpg",
  },
  {
    id: 9,
    slug: "quick-dry-nail-spray",
    title: "Quick Dry Nail Spray",
    price: "Rp 35.000",
    image: "/nail_care/QuickDryNailSpray.jpg",
  },
  {
    id: 10,
    slug: "gentle-nail-polish-remover",
    title: "Gentle Nail Polish Remover",
    price: "Rp 32.000",
    image: "/nail_care/GentleNailPolishRemover.jpg",
  },
  {
    id: 11,
    slug: "stainless-nail-clipper",
    title: "Stainless Nail Clipper",
    price: "Rp 28.000",
    image: "/nail_care/StainlessNailClipper.jpg",
  },
  {
    id: 12,
    slug: "smooth-nail-file",
    title: "Smooth Nail File",
    price: "Rp 25.000",
    image: "/nail_care/SmoothNailFile.jpg",
  },
  {
    id: 13,
    slug: "soft-cuticle-pusher",
    title: "Soft Cuticle Pusher",
    price: "Rp 30.000",
    image: "/nail_care/SoftCuticlePusher.jpg",
  },
  {
    id: 14,
    slug: "glass-shine-top-coat",
    title: "Glass Shine Top Coat",
    price: "Rp 39.000",
    image: "/nail_care/GlassShineTopCoat.jpg",
  },
  {
    id: 15,
    slug: "keratin-nail-repair-cream",
    title: "Keratin Nail Repair Cream",
    price: "Rp 62.000",
    image: "/nail_care/KeratinNailRepairCream.jpg",
  },
  {
    id: 16,
    slug: "nail-hygiene-cleansing-spray",
    title: "Nail Hygiene Cleansing Spray",
    price: "Rp 35.000",
    image: "/nail_care/NailHygieneCleansingSpray.jpg",
  },
];

export default function NailcarePage() {
  return (
    <main className="bg-[#D9A4CC] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-white font-poppins text-center">Nail Care</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {nailcare.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
