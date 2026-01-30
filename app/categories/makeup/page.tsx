import ProductCard from "@/app/components/ProductCard";

const makeup = [
  {
    id: 1,
    slug: "lip-gloss-glam-shine",
    title: "Lip Gloss Glam Shine",
    price: "Rp 129.000",
    image: "/make_up/Lip_Gloss_Glam_Shine.png",
  },
  {
    id: 2,
    slug: "matte-lipstick-rose-nude",
    title: "Matte Lipstick Rose Nude",
    price: "Rp 149.000",
    image: "/make_up/MatteLipstickRoseNude.jpg",
  },
  {
    id: 3,
    slug: "velvet-lip-cream",
    title: "Velvet Lip Cream",
    price: "Rp 119.000",
    image: "/make_up/VelvetLipCream.jpg",
  },
  {
    id: 4,
    slug: "tint-glow-serum",
    title: "Tint Glow Serum",
    price: "Rp 169.000",
    image: "/make_up/TintGlowSerum.jpg",
  },
  {
    id: 5,
    slug: "soft-blush-creamy",
    title: "Soft Blush Creamy",
    price: "Rp 89.000",
    image: "/make_up/SoftBlushCreamy.jpg",
  },
  {
    id: 6,
    slug: "golden-glow-highlighter",
    title: "Golden Glow Highlighter",
    price: "Rp 159.000",
    image: "/make_up/GoldenGlowHighlighter.jpg",
  },
  {
    id: 7,
    slug: "precise-brow-definer",
    title: "Precise Brow Definer",
    price: "Rp 99.000",
    image: "/make_up/PreciseBrowDefiner.jpg",
  },
  {
    id: 8,
    slug: "eyeshadow-palette",
    title: "Eyeshadow Palette",
    price: "Rp 219.000",
    image: "/make_up/EyeshadowPalette.jpg",
  },
  {
    id: 9,
    slug: "hydra-dew-face-mist",
    title: "Hydra Dew Face Mist",
    price: "Rp 139.000",
    image: "/make_up/HydraDewFaceMist.jpg",
  },
  {
    id: 10,
    slug: "radiant-glow-primer",
    title: "Radiant Glow Primer",
    price: "Rp 159.000",
    image: "/make_up/Radiant_Glow_Primer.jpg",
  },
  {
    id: 11,
    slug: "liquid-blush-tint",
    title: "Liquid Blush Tint",
    price: "Rp 129.000",
    image: "/make_up/LiquidBlushTint.jpg",
  },
  {
    id: 12,
    slug: "soft-matte-foundation",
    title: "Soft Matte Foundation",
    price: "Rp 179.000",
    image: "/make_up/SoftMatteFoundation.jpg",
  },
  {
    id: 13,
    slug: "ultra-shine-lip-gloss",
    title: "Ultra Shine Lip Gloss",
    price: "Rp 129.000",
    image: "/make_up/_UltraShineLipGloss.png",
  },
  {
    id: 14,
    slug: "velvet-matte-lip-cream",
    title: "Velvet Matte Lip Cream",
    price: "Rp 139.000",
    image: "/make_up/VelvetMatteLipCream.jpg",
  },
  {
    id: 15,
    slug: "hydra-lip-oil",
    title: "Hydra Lip Oil",
    price: "Rp 149.000",
    image: "/make_up/Hydra_Lip_Oil.jpg",
  },
  {
    id: 16,
    slug: "juicy-tint-balm",
    title: "Juicy Tint Balm",
    price: "Rp 99.000",
    image: "/make_up/Juicy_Tint_Balm.jpg",
  },
  {
    id: 17,
    slug: "soft-blush-cream",
    title: "Soft Blush Cream",
    price: "Rp 159.000",
    image: "/make_up/Soft_Blush_Cream.jpg",
  },
  {
    id: 18,
    slug: "glow-highlighter-stick",
    title: "Glow Highlighter Stick",
    price: "Rp 169.000",
    image: "/make_up/Glow_Highlighter_Stick.jpg",
  },
  {
    id: 19,
    slug: "velvet-lip-pencil",
    title: "Velvet Lip Pencil",
    price: "Rp 89.000",
    image: "/make_up/Velvet_Lip_Pencil.jpg",
  },
  {
    id: 20,
    slug: "honey-shine-lip-oil",
    title: "Honey Shine Lip Oil",
    price: "Rp 149.000",
    image: "/make_up/Honey_Shine_Lip_Oil.jpg",
  },
];

export default function MakeupPage() {
  return (
    <main className="bg-[#F5B0A7] w-full min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text- font-poppins text-center text-white">Make Up</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {makeup.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
