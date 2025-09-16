import React from "react";
import ProductCarousel from "../components/Products/firstSection";
import ProductDetails from "./ProductDetails";
import ProductInfoCard from "./ProductInfoCard";

const IMAGES = [
  "https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UY327_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UY327_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/61QoynZYblL._AC_UY327_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/81aiurn8IVL._AC_UY327_FMwebp_QL65_.jpg",
];

export default function ProductPage() {
  return (
    <div className="w-full mx-auto px-4 lg:px-8 py-8">
      {/*
        Responsive grid:
         - 1 col on mobile
         - 2 cols on md/lg (gallery + details side-by-side)
         - 12 cols on xl+ (35% / 40% / 25% using 4/5/3 spans)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT: gallery (35%) */}
        <div className="md:col-span-1 xl:col-span-4">
          <div className="bg-white rounded-2xl p-4">
            <div className="aspect-[5/5]  rounded-lg overflow-hidden bg-gray-50">
              <ProductCarousel images={IMAGES} />
            </div>

            <div className="mt-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
              {IMAGES.map((src, i) => (
                <button
                  key={i}
                  className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200"
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER: product details (40%) */}
        <div className="md:col-span-1 xl:col-span-5">
          <ProductDetails />
        </div>

        {/* RIGHT: sidebar (25%) */}
        <aside className="md:col-span-2 xl:col-span-3">
          <div className="xl:sticky xl:top-24">
            <ProductInfoCard />
          </div>
        </aside>
      </div>
    </div>
  );
}
