import React, { useState } from "react";

export default function ProductCarousel({
  images = [
    "/mnt/data/b0b4c472-cbe2-40ad-bf44-0c04031a0aed.png",
    "/mnt/data/b0b4c472-cbe2-40ad-bf44-0c04031a0aed.png",
    "/mnt/data/b0b4c472-cbe2-40ad-bf44-0c04031a0aed.png",
  ],
  altPrefix = "Product image",
  startIndex = 0,
}) {
  const [index, setIndex] = useState(
    Math.min(Math.max(0, startIndex), images.length - 1)
  );

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    // Make this full-height and use column layout so thumbnails are below image area
    <div className="w-full h-full flex flex-col">
      {/* IMAGE AREA: flex-grow so it takes available height */}
      <div className="relative bg-white rounded-2xl overflow-hidden flex-1">
        {/* badge */}
        <div className="absolute top-3 left-3 z-30">
          <span className="inline-block bg-[#DFF7C8] text-[#3A7A2F] text-xs font-semibold px-3 py-1 rounded-full">
            New
          </span>
        </div>

        {/* center image fills most of this area */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[index]}
            alt={`${altPrefix} ${index + 1}`}
            className="max-w-[92%] max-h-[86%] object-contain rounded-2xl"
          />
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full bg-slate-800/90 flex items-center justify-center shadow-md text-white hover:scale-105 transition-transform"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* THUMBNAILS: always visible below image area */}
      <div className="mt-2 px-3 pb-2">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition ${
                i === index ? "border-green-500" : "border-transparent"
              }`}
              aria-label={`Select image ${i + 1}`}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                className="w-full h-full object-contain rounded-md p-1 md:p-2 bg-white"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
