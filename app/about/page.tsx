import Image from "next/image";

export default function About() {
  return (
    <main className="w-full min-h-screen py-16 px-6 bg-[#e67a81]">
      {/* Top Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-wide font-poppins text-white ">
            The Story Behind{" "}
            <span className="text-blank font-montserrat">KLEIA</span>
          </h1>

          <p className="mt-6 text-white leading-relaxed text-justify font-poppins">
            KLEIA was born from a simple mission: to create beauty that is
            effortless, clean, and modern. We believe that makeup isn’t just
            about how you look—it’s about the confidence you feel from within.
          </p>

          <p className="mt-4 text-white leading-relaxed text-justify ">
            Inspired by global beauty trends, our formulas are soft,
            skin-loving, and designed to flatter every skin tone. KLEIA is for
            anyone who wants to feel glam, glowing, and confident—without the
            complexity.
          </p>

          <ul className="mt-6 space-y-2 text-white font-poppins">
            <li>✨ Cruelty-Free & Vegan Friendly</li>
            <li>✨ Soft, skin-nourishing ingredients</li>
            <li>✨ Aesthetic packaging that elevates your vanity</li>
            <li>✨ Safe and suitable for all skin types</li>
          </ul>
        </div>

        <div className="w-full h-[450px] relative">
          <Image
            src="/hero/about_hero.jpg"
            alt="About KLEIA"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-20 py-12 px-8 bg-pink-50 rounded-2xl shadow-sm font-poppins">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="text-center max-w-3xl mx-auto mt-4 text-black leading-relaxed">
          To create makeup products that are easy to use, high-quality, and
          long-lasting—beauty essentials that make you feel naturally flawless,
          soft, and confidently you.
        </p>
      </section>

      {/* Bottom Section */}
      <section className="mt-20 grid md:grid-cols-3 gap-10 font-poppins ">
        <div className="p-6 border rounded-xl shadow-sm text-center bg-pink-50">
          <h3 className="font-semibold text-xl">Premium Feel</h3>
          <p className="mt-3 text-black">
            Each formula is carefully crafted to deliver smooth textures and a
            flawless finish.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm text-center bg-pink-50">
          <h3 className="font-semibold text-xl">Modern Beauty</h3>
          <p className="mt-3 text-black">
            Universal shades inspired by global beauty trends, designed to
            enhance your natural beauty.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm text-center bg-pink-50">
          <h3 className="font-semibold text-xl">Confidence First</h3>
          <p className="mt-3 text-black">
            Makeup that highlights the best version of you—not to hide, but to
            empower.
          </p>
        </div>
      </section>
    </main>
  );
}
