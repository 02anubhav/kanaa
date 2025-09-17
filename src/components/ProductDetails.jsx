import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import CouponCard from "./CouponCard";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('12"');
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const sizes = ['5"', '8"', '12"', '24"'];

  const handleAddToCart = () => {
    add(product, qty);

    toast.dismiss(); 

    toast.success(
      <div className="flex items-center gap-2">
        <span>{product.title} added to cart!</span>
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
      }
    );
  };

  return (
    <div className="bg-white rounded-2xl p-3 space-y-3">
      {/* Badge */}
      <div>
        <span className="bg-amber-500 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-r-full">
          ONLY {product.quantity} LEFT!
        </span>
      </div>

      {/* Category + SKU row */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="text-green-600 text-sm sm:text-base font-medium border-b border-green-600 pb-0.5"
        >
          {product.title}
        </a>
        <div className="h-4 border-l border-gray-300" />
        <span className="text-xs sm:text-sm text-gray-500">SKU-235346456</span>
      </div>

      {/* Title */}
      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
        {product.title}
      </h1>

      {/* Deal pill */}
      <div className="w-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-medium px-3 py-1 rounded">
        Best Deal
      </div>

      {/* Price row */}
      <div className="flex items-baseline gap-2">
        <div className="text-lg sm:text-xl font-bold ">
          <span className="text-emerald-700"> AED</span> {product.salePrice}
        </div>
        <div className="text-sm sm:text-base text-gray-400 line-through">
          {product.price}
        </div>
        <div className="text-xs sm:text-sm text-orange-700 font-semibold">
          28% OFF
        </div>
      </div>

      {/* Explore more */}
      <div className="border border-gray-100 rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full border border-green-100 flex items-center justify-center text-green-600 text-xs">
          ◎
        </div>
        <div className="text-xs sm:text-sm">
          <span className="font-medium">Explore more in</span>{" "}
          <a className="text-green-600 underline ml-1" href="#">
            {product.category}
          </a>
        </div>
      </div>

      {/* Size */}
      <div className="flex items-center justify-between">
        <div className="text-xs sm:text-sm text-gray-700">
          Size: <span className="font-medium">12-inch</span>
        </div>
        <a className="text-xs sm:text-sm text-green-600 underline" href="#">
          Size Guide
        </a>
      </div>

      {/* Size buttons */}
      <div className="flex flex-wrap gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedSize(s)}
            className={`w-10 h-10 rounded-lg border text-xs sm:text-sm ${
              selectedSize === s
                ? "border-pink-400 bg-white text-pink-600"
                : "border-gray-200 bg-gray-50 text-gray-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Signup banner */}
      <div className="bg-teal-100 rounded-lg p-3 flex  justify-between items-center sm:items-center sm:justify-between gap-2">
        <div className=" flex flex-col sm:flex-row  items-center gap-2 text-xs sm:text-sm">
          <span className="font-medium">Signup and Get</span>
          <span className="text-base sm:text-lg font-bold text-amber-500">
            ¥ 50.00 off
          </span>
        </div>
        <div>
          <button className=" bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm">
            Signup Now
          </button>
        </div>
      </div>

      {/* Coupons horizontal scroll */}
      <div className="overflow-x-auto no-scrollbar pb-2 w-full ">
        <div className="flex gap-2">
          <div className="flex-shrink-0 min-w-[350px]">
            <CouponCard code={product.category} />
          </div>
          <div className="flex-shrink-0 min-w-[320px] flex items-center p-3 border border-neutral-300 rounded-lg bg-white text-xs sm:text-sm">
            Save 10% off <span className="underline ml-1">Learn More</span>
          </div>
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-8 h-8 rounded-full bg-gray-50 border border-neutral-300 text-sm flex justify-center items-center"
          >
            −
          </button>
          <div className="w-6 text-center text-sm">{qty}</div>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-8 h-8 rounded-full bg-gray-50 border border-neutral-300 text-sm flex justify-center items-center"
          >
            +
          </button>
        </div>

        <button
          className="flex-1 bg-emerald-700 text-white rounded-full py-2 px-4 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer "
          onClick={handleAddToCart}
        >
          Add to Cart
          <BsCart3 />
        </button>
      </div>

      {/* bottom actions */}
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 rounded-lg  bg-gray-100 text-xs sm:text-sm">
          Price Alert
        </button>
        <button className="py-2 rounded-lg  bg-gray-100 text-xs sm:text-sm">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
