import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTags } from "@fortawesome/free-solid-svg-icons";

export default function PromoBanner() {
  return (
    <div className="bg-linear-to-r from-[#ffdede] to-[#ffefef] py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800">
          {/* Ikon hadiah */}
          <FontAwesomeIcon icon={faGift} className="text-[#CD6582] text-lg" />
          <span>
            <strong className="text-[#CD6582]">Limited time:</strong> Buy 2 get 1 free — use code{" "}
            <span className="bg-black text-white px-2 rounded font-semibold tracking-wide">BUNDLE</span>
          </span>
        </div>

        <Link 
          href="/shop" 
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#CD6582] transition-colors flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faTags} className="text-sm" />
          Shop Now
        </Link>
      </div>
    </div>
  );
}
