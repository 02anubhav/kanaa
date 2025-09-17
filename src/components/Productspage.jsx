import React from "react";
import ProductCarousel from "../components/Products/firstSection";
import ProductDetails from "./ProductDetails";
import ProductInfoCard from "./ProductInfoCard";

const IMAGES = [
  "https://m.media-amazon.com/images/I/61mwZi5guiL._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UY327_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/61QoynZYblL._AC_UY327_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/81aiurn8IVL._AC_UY327_FMwebp_QL65_.jpg",
];

export default function ProductPage() {
  return (
    <div className="w-full mx-auto px-4 lg:px-8 py-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 items-start">
        <div className="md:col-span-1 xl:col-span-4">
          <div className="bg-white rounded-2xl ">
            <div className="aspect-[5/5]  rounded-lg overflow-hidden">
              <ProductCarousel images={IMAGES} />
            </div>
          </div>
        </div>

        <div className="md:col-span-1 xl:col-span-5 ">
          <ProductDetails />
        </div>

        <aside className="md:col-span-2 xl:col-span-3">
          <div className="xl:sticky xl:top-24">
            <ProductInfoCard />
          </div>
        </aside>
      </div>
    </div>
  );
}
