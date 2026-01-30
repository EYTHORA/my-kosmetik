"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  const [value, setValue] = useState(""); // ← CUKUP SATU AJA
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffff] text-black shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold font-Montserrat text-Black">
          KLEIA COSMETICS
        </Link>

        {/* NAV ITEMS */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hidden md:inline font-Montserrat text-black hover:text-[#CD6582] transition-colors">
  Home
</Link>

          <a
            href="#best-sellers"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#best-sellers")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline font-Montserrat text-black hover:text-[#CD6582] transition-colors" 
          >
            Best Sellers
          </a>

          

          {/* DROPDOWN SHOP */}
          <div className="relative">
            <button className="hidden md:inline font-Montserrat text-black hover:text-[#CD6582] transition-colors" onClick={() => setOpen(!open)}>
              Cosmetics 
            </button>

            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow py-2 w-44 z-50 font-Montserrat">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/makeup"
                  onClick={() => setOpen(false)}
                >
                  Makeup
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/skincare"
                  onClick={() => setOpen(false)}
                >
                  Skin Care
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/haircare"
                  onClick={() => setOpen(false)}
                >
                  Hair Care
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/bodycare"
                  onClick={() => setOpen(false)}
                >
                  Body Care
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/nailcare"
                  onClick={() => setOpen(false)}
                >
                  Nail Care
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 font-Montserrat text-black hover:text-[#CD6582] transition-colors"
                  href="/categories/oralcare"
                  onClick={() => setOpen(false)}
                >
                  Oral Care
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hidden md:inline font-Montserrat text-black hover:text-[#CD6582] transition-colors">
            About
          </Link>

          {/* FLOATING SEARCH BAR */}
{showSearch && (
  <div className="fixed top-0 left-0 right-0 px-6 py-4 bg-white/60 backdrop-blur-md shadow-lg z-60 flex items-center gap-4 text-black">
   <form
  action="/search"
  className="flex-1"
>
  <input
    name="query"
    type="text"
    placeholder="Search products..."
    className="w-full p-3 rounded-full border"
  />
</form>

    <button
      className="text-black text-xl hover:text-[#CD6582] transition-colors"
      onClick={() => {
        setShowSearch(false);
        setValue("");
      }}
    >
      ✕
    </button>
  </div>
)}

{/* ICONS */}
<div className="flex items-center gap-4 text-black transition-colors">
  {/* SEARCH ICON */}
  <button
    type="button"
    aria-label="Open search"
    title="Search"
    onClick={() => setShowSearch(true)}
    className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 hover:text-[#CD6582]"
  >
    <FontAwesomeIcon icon={faSearch} className="text-2xl" />
  </button>

  {/* WISHLIST */}
  <Link href="/wishlist">
  <FontAwesomeIcon icon={faHeart} className="text-2xl cursor-pointer hover:opacity-70 hover:text-[#CD6582]" />
</Link>

  {/* USER */}
  
<Link href="/admin">
  <FontAwesomeIcon icon={faUser} className="text-2xl cursor-pointer hover:opacity-70 hover:text-[#CD6582]" />
</Link>

  {/* CART */}
  <Link href="/categories/cart">
  <FontAwesomeIcon icon={faShoppingCart} className="text-2xl cursor-pointer hover:opacity-70 hover:text-[#CD6582]" />
  </Link>
</div>


        </nav>
      </div>
    </header>
  );
}
