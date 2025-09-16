import React, { useEffect, useRef, useState } from "react";

export default function ProductCarousel({ images = [] }) {
  // fallback: if parent didn't pass images, try common filenames
  const imgs = images.length
    ? images
    : [
        "/images/pineapple-1.jpg",
        "/images/pineapple-2.jpg",
        "/images/pineapple-3.jpg",
      ];

  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // optional: prefetch next image
    const next = (index + 1) % imgs.length;
    const img = new Image();
    img.src = imgs[next];
  }, [index]);

  function prev() {
    setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }
  function next() {
    setIndex((i) => (i + 1) % imgs.length);
  }
  function goTo(i) {
    setIndex(i);
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    touchMoveX.current = touchStartX.current;
  }
  function onTouchMove(e) {
    touchMoveX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current == null || touchMoveX.current == null) return;
    const dx = touchMoveX.current - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX.current = touchMoveX.current = null;
  }

  return (
    <div
      className="w-full h-full relative bg-gray-50"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onTouchStart}
      onMouseMove={(e) => touchStartX.current !== null && onTouchMove(e)}
      onMouseUp={onTouchEnd}
      onMouseLeave={() => touchStartX.current !== null && onTouchEnd()}
    >
      {/* arrows */}
      <button
        aria-label="prev"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24">
          <path
            d="M15 6L9 12l6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        aria-label="next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* images: absolute, fade */}
      {imgs.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Product ${i + 1}`}
          className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-300 ${
            i === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{ height: "100%", width: "auto" }}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      ))}

      {/* thumbnails (simple dots row) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`go to ${i + 1}`}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-emerald-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
