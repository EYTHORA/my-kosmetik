import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-FFFF text-black py-12 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-semibold tracking-widest mb-4 font-Montserrat">
            KLEIA COSMETIC
          </h2>
          <p className="text-black text-sm font-Montserrat">
            Beauty products crafted to enhance your natural glow.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="font-semibold mb-4 font-Montserrat ">Shop</h3>
          <ul className="space-y-2 text-black/90 text-sm">
            <li>
              <Link
                href="/categories/skincare"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Skin Care
              </Link>
            </li>
            <li>
              <Link
                href="/categories/haircare"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Hair Care
              </Link>
            </li>
            <li>
              <Link
                href="/categories/makeup"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Makeup
              </Link>
            </li>
            <li>
              <Link
                href="/categories/bodycare"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Body Care
              </Link>
            </li>
            <li>
              <Link
                href="/categories/nailcare"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Nail Care
              </Link>
            </li>
            <li>
              <Link
                href="/categories/oralcare"
                className="hover:text-[#CD6582] transition-colors font-Montserrat"
              >
                Oral Care
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 font-Montserrat">Support</h3>
          <ul className="space-y-2 text-black/90 text-sm">
            <li>
              <Link
                href="/contact"
                className="hover:text-[#CD6582] transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#CD6582] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="hover:text-[#CD6582] transition-colors"
              >
                Shipping Info
              </Link>
            </li>
            <li>
              <Link
                href="/returns"
                className="hover:text-[#CD6582] transition-colors"
              >
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-4 font-Montserrat ">Newsletter</h3>
          <p className="text-black text-sm mb-4 font-Montserrat">
            Join our newsletter and get special offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-500 focus:border-pink-400 focus:ring-1  shadow-sm"
            />
            <button className="px-4 py-2 bg-[#CD6582] text-white rounded-md transition-colors font-Montserrat">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-1 pt-6 text-center text-black text-sm font-Montserrat">
        © 2025 KLEIA Beauty. All rights reserved.
      </div>
    </footer>
  );
}
