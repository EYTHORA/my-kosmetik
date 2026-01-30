"use client";
import Image from "next/image";
import { useState } from "react";

export default function Categories() {
  const [index, setIndex] = useState(0);

  const categories = [
    { name: "Skin Care", img: "/categories/Skin_Care.jpg" },
    { name: "Make-up", img: "/categories/Make_Up.jpg" },
    { name: "Hair Care", img: "/categories/Hair_Care.jpg" },
    { name: "Body Care", img: "/categories/Body_Care.jpg" },
    { name: "Nail Care", img: "/categories/Nail_Care.jpg" },
    { name: "Oral Care", img: "/categories/Oral_Care.jpg" },
  ];

  const nextSlide = () =>
    setIndex((i) => (i < categories.length - 1 ? i + 1 : i));

  const prevSlide = () => setIndex((i) => (i > 0 ? i - 1 : i));

  return (
    <section className="py-14 px-4 max-w-2xl mx-auto relative ">
      <h2 className="text-3xl md:text-4xl font-bold font-Merriweather text-center mb-12 text-white">
        Shop by Category
      </h2>

      {/* ARROWS are rendered inside each card so they sit next to the active image */}
      {/* Single-card slider: show only the active category with buttons beside the image */}
      <div className="relative flex items-center justify-center gap-4">
  {/* tombol prev */}
  <button
    onClick={prevSlide}
    disabled={index === 0}
    aria-label="Previous category"
    className="bg-white shadow-lg p-3 rounded-full z-20 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    ◀
  </button>

  {/* container gambar + teks di luar */}
  <div className="flex flex-col items-center w-full max-w-sm mx-auto">
    <div className="h-60 sm:h-72 md:h-80 relative rounded-xl overflow-hidden w-full">
      <Image
        src={categories[index].img}
        alt={categories[index].name}
        fill
        className="object-cover"
      />
    </div>

    {/* teks di luar gambar */}
    <div className="mt-2 text-center">
      <span className="text-black text-lg font-poppins font-semibold bg-white bg-opacity-50 px-4 py-1 rounded-full">
        {categories[index].name}
      </span>
    </div>
  </div>

  {/* tombol next */}
  <button
    onClick={nextSlide}
    disabled={index === categories.length - 1}
    aria-label="Next category"
    className="bg-white shadow-lg p-3 rounded-full z-20 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    ▶
  </button>
</div>

    </section>
  );
}
