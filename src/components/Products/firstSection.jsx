import React, { useState, useRef, useEffect } from "react";

export default function ProductCarousel({
  images = [],
  altPrefix = "Product image",
  startIndex = 0,
}) {
  const [index, setIndex] = useState(
    Math.min(Math.max(0, startIndex), images.length - 1)
  );
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images]);

  useEffect(() => {
    // ensure selected thumbnail is visible
    const thumbs = thumbsRef.current;
    const selected = thumbs?.querySelector(`[data-idx="${index}"]`);
    if (selected && thumbs) {
      const pad = 8;
      const selLeft = selected.offsetLeft;
      const selRight = selLeft + selected.offsetWidth;
      if (selLeft - pad < thumbs.scrollLeft) thumbs.scrollLeft = selLeft - pad;
      else if (selRight + pad > thumbs.scrollLeft + thumbs.clientWidth) {
        thumbs.scrollLeft = selRight + pad - thumbs.clientWidth;
      }
    }
  }, [index]);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
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
    touchStartX.current = null;
    touchMoveX.current = null;
  }

  if (!images || images.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-gray-500">No images</div>
    );
  }

  return (
    <div className="w-full h-full">
      <div
        className="relative w-full h-full bg-gray-50 rounded-xl  overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={(e) => onTouchStart(e)}
        onMouseMove={(e) => {
          if (touchStartX.current !== null) onTouchMove(e);
        }}
        onMouseUp={onTouchEnd}
        onMouseLeave={() => {
          if (touchStartX.current !== null) onTouchEnd();
        }}
      >
        <button
          aria-label="Previous image"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:scale-105"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
          >
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
          aria-label="Next image"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:scale-105"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-300 ${
              i === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            style={{ width: "auto", height: "100%" }} // important: height:100% so img fills parent's height
          />
        ))}

        {/* fullscreen / zoom placeholder */}
        <button
          aria-label="Open fullscreen"
          className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-md shadow-sm"
          onClick={() => console.log("open fullscreen at", index)}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 4h6M20 20h-6M4 20v-6M20 4v6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Thumbnails */}
      <div className="mt-3">
        <div
          ref={thumbsRef}
          className="flex gap-3 overflow-x-auto no-scrollbar py-2 px-1"
        >
          {images.map((src, i) => (
            <button
              key={i}
              data-idx={i}
              onClick={() => goTo(i)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border ${
                i === index
                  ? "border-emerald-600 ring-2 ring-emerald-100"
                  : "border-gray-200"
              }`}
              style={{ width: 78, height: 78 }}
            >
              <img
                src={src}
                alt={`Thumb ${i + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="mt-2 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-emerald-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// export function Demo({ className = "" }) {
//   const imgs = [
//     "https://m.media-amazon.com/images/I/815JlBJENqL._AC_UY327_FMwebp_QL65_.jpg",
//     "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg",
//     "https://m.media-amazon.com/images/I/815JlBJENqL._AC_UY327_FMwebp_QL65_.jpg",
//     "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg",
//   ];

//   return (
//     <div className={`w-full h-full ${className}`}>
//       <ProductCarousel images={imgs} altPrefix="Pineapple plush" />
//     </div>
//   );
// }
