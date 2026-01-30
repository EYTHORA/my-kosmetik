"use client";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search Kylie..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-2.5 pl-12 pr-12 rounded-full border border-gray-300 bg-white/40
        backdrop-blur-md text-gray-800 placeholder:text-gray-500 focus:ring-0 outline-none"
      />

      {/* SEARCH ICON (SVG) */}
      <svg
        className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
        />
      </svg>

      {/* CLEAR BUTTON (SVG) */}
      {value !== "" && (
        <button
          onClick={() => setValue("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          title="Clear"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
