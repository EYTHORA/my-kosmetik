import Image from "next/image";
import Link from "next/link";
import NewArrivals from "./components/NewArrivals";
import Categories from "./components/Categories";
import TestimonialsSlider from "./components/TestimonialsSlider";

import PromoBanner from "./components/PromoBanner";


function Rating({ stars = 5, count = 120 }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
      <span className="text-yellow-500">{"★".repeat(stars)}</span>
      <span className="text-gray-400">({count})</span>
    </div>
  );
}

const products = [
  {
    slug: "lightweight-body-lotion",
    img: "/body_care/LightweightBodyLotion.jpg",
    title: "Lightweight Body Lotion",
    stars: 5,
    count: 240,
    price: "Rp 89.000",
  },
  {
    slug: "ultra-moist-body-cream",
    img: "/body_care/UltraMoistBodyCream.jpg",
    title: "Ultra Moist Body Cream",
    stars: 5,
    count: 180,
    price: "Rp 109.000",
  },
  {
    slug: "anti-hair-loss-shampoo",
    img: "/hair_care/Anti-HairLossShampoo.jpg",
    title: "Anti-Hair Loss Shampoo",
    stars: 5,
    count: 310,
    price: "Rp 129.000",
  },
  {
    slug: "anti-dandruff-shampoo",
    img: "/hair_care/Anti-DandruffShampoo.jpg",
    title: "Anti-Dandruff Shampoo",
    stars: 5,
    count: 400,
    price: "Rp 119.000",
  },
  {
    slug: "lip-gloss-glam-shine",
    img: "/make_up/Lip_Gloss_Glam_Shine.png",
    title: "Lip Gloss Glam Shine",
    stars: 5,
    count: 150,
    price: "Rp 129.000",
  },
  {
    slug: "matte-lipstick-rose-nude",
    img: "/make_up/MatteLipstickRoseNude.jpg",
    title: "Matte Lipstick Rose Nude",
    stars: 5,
    count: 520,
    price: "Rp 149.000",
  },
  {
    slug: "nourishing-cuticle-oil",
    img: "/nail_care/NourishingCuticleOil.jpg",
    title: "Nourishing Cuticle Oil",
    stars: 5,
    count: 200,
    price: "Rp 45.000",
  },
  {
    slug: "soft-cuticle-repair-cream",
    img: "/nail_care/SoftCuticleRepairCream.jpg",
    title: "Soft Cuticle Repair Cream",
    stars: 5,
    count: 330,
    price: "Rp 49.000",
  },
  {
    slug: "soft-clean-toothbrush",
    img: "/oral_care/SoftCleanToothbrush.jpg",
    title: "Soft Clean Toothbrush",
    stars: 5,
    count: 410,
    price: "Rp 25.000",
  },
  {
    slug: "electric-toothbrush-mini",
    img: "/oral_care/ElectricToothbrushMini.jpg",
    title: "Electric Toothbrush Mini",
    stars: 5,
    count: 270,
    price: "Rp 199.000",
  },
  {
    slug: "hydra-glow-serum",
    img: "/skin_care/HydraGlowSerum.jpg",
    title: "Hydra Glow Serum",
    stars: 5,
    count: 500,
    price: "Rp 129.000",
  },
  {
    slug: "soft-facial-wash",
    img: "/skin_care/SoftFacialWash.jpg",
    title: "Soft Facial Wash",
    stars: 5,
    count: 380,
    price: "Rp 89.000",
  },
];

export default function Home() {
  return (
    <div className="bg-[#E67A81] text-black">
      {/* HERO */}
      <section className="relative w-full h-screen">
        <Image
          src="/hero.jpeg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black/10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Beauty That Empowers You
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-2xl drop-shadow-md">
            Discover premium cosmetic products crafted to enhance your natural
            glow.
          </p>

          <Link
            href="/shop"
            className="mt-6 inline-block px-8 py-3 bg-[#ffff] text-black rounded-full hover:bg-rose-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>


      {/* PROMO BANNER */}
      <section>
        <PromoBanner />
      </section>

      {/* PRODUCT GRID best seller */}
      <section id="best-sellers" className="px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 rounded-lg ring-1 ring-white/10">
          {products.map((p, i) => (
            <Link key={i} href={`/products/${p.slug}`} className="block">
              <div className="shadow-lg rounded-xl overflow-hidden bg-white hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-out">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain p-6"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-black h-16 font-poppins">
                    {p.title}
                  </h3>
                  <Rating stars={p.stars} count={p.count} />
                  <p className="text-[#cd6582] text-sm mt-1">{p.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <NewArrivals />
      </section>

      <section>
        <Categories />
      </section>

      <section>
        <TestimonialsSlider />
      </section>
    </div>
  );
}