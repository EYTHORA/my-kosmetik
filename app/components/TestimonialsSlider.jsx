"use client";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Alicia",
      review:
        "Produk dari KLEIA benar-benar mengubah kulit aku! Teksturnya halus dan hasilnya glowing.",
      img: "/testimonials/user1.jpg",
    },
    {
      name: "Sasha",
      review:
        "Lip gloss-nya favorit banget! Tidak lengket dan warnanya cantik dipakai sehari-hari.",
      img: "/testimonials/user2.jpg",
    },
    {
      name: "Maya",
      review:
        "Pengiriman cepat dan produknya original semua. Packagingnya juga super cute!",
      img: "/testimonials/user3.jpg",
    },
  ];
  const nextSlide = () =>
    setIndex((i) => (i < testimonials.length - 1 ? i + 1 : i));

  const prevSlide = () => setIndex((i) => (i > 0 ? i - 1 : i));

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto relative ">
     <h2 className="text-3xl md:text-4xl font-bold font-Merriweather text-center mb-12 text-white">
        What Our Customers Say
      </h2>

      {/* Single-card view with external buttons */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSlide}
          disabled={index === 0}
          aria-label="Previous testimonial"
          className="bg-white shadow-lg p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ◀
        </button>

        <div className="w-full max-w-xl">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${
                i === index ? "block" : "hidden"
              } bg-white rounded-2xl shadow-lg p-10 mx-auto flex flex-col items-center text-center`}
            >
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-4 border"
              />

              <p className="text-gray-700 text-lg italic mb-4">“{t.review}”</p>
              <h3 className="font-semibold text-xl">{t.name}</h3>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={index === testimonials.length - 1}
          aria-label="Next testimonial"
          className="bg-white shadow-lg p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
