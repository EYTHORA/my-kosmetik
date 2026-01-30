import Image from "next/image";
import Link from "next/link";

export default function NewArrivals() {
  const products = [
    {
      slug: "cooling-foot-cream",
      name: "Cooling Foot Cream",
      price: "Rp 55.000",
      img: "/body_care/CoolingFootCream.jpg",
    },
    {
      slug: "silky-smooth-leave-in-conditioner",
      name: "Silky Smooth Leave-In Conditioner",
      price: "Rp 129.000",
      img: "/hair_care/SilkySmoothLeave-InConditioner.jpg",
    },
    {
      slug: "honey-shine-lip-oil",
      name: "Honey Shine Lip Oil",
      price: "Rp 149.000",
      img: "/make_up/Honey_Shine_Lip_Oil.jpg",
    },
    {
      slug: "nail-hygiene-cleansing-spray",
      name: "Nail Hygiene Cleansing Spray",
      price: "Rp 35.000",
      img: "/nail_care/NailHygieneCleansingSpray.jpg",
    },
    {
      slug: "kids-strawberry-toothpaste",
      name: "Kids Strawberry Toothpaste",
      price: "Rp 27.000",
      img: "/oral_care/KidsStrawberryToothpaste.jpg",
    },
    {
      slug: "moisture-boost-sheet-mask",
      name: "Moisture Boost Sheet Mask",
      price: "Rp 25.000",
      img: "/skin_care/MoistureBoostSheetMask.jpg",
    },
    {
      slug: "eyeshadow-palette",
      name: "Eyeshadow Palette",
      price: "Rp 219.000",
      img: "/make_up/EyeshadowPalette.jpg",
    },
    {
      slug: "hydra-dew-face-mist",
      name: "Hydra Dew Face Mist",
      price: "Rp 139.000",
      img: "/make_up/HydraDewFaceMist.jpg",
    }
  ];

  return (
    <section id="new-arrivals" className="py-14 px-4 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl md:text-4xl font-bold font-Merriweather text-center mb-12 text-white">
        New Arrivals
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-lg ring-1 ring-white/10">
        {products.map((p, index) => (
          <Link
            key={index}
            href={`/products/${p.slug}`}
            className="text-center bg-white rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <Image
              src={p.img}
              alt={p.name}
              width={400}
              height={400}
              className="w-full h-72 object-cover rounded-md"
            />
            <p className="mt-3 font-semibold text-lg text-black font-poppins h-16">
              {p.name}
            </p>
            <p className="text-[#cd6582] font-medium">{p.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}