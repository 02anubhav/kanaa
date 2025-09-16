import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Demo } from "./firstSection";
import LastSection from "./LastSection";
import { Bell } from "lucide-react";

export default function ProductDetailCard() {
  const [selectedSize, setSelectedSize] = useState('12"');
  const [qty, setQty] = useState(1);
  const sizes = ['5"', '8"', '12"', '24"'];

  return (
    <div className="w-full mx-auto p-4">
      {/* 👇 Turn into a 3-column layout */}
      <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: Images */}
        <div className="p-4 flex items-center justify-center">
          <div className="w-full h-64 md:h-[420px] rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
            <Demo />
          </div>
        </div>

        {/* CENTER: Details */}
        <div className="p-5 flex flex-col gap-4">
          {/* Badge */}
          <div>
            <span className="bg-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-r-full">
              ONLY 7 LEFT!
            </span>
          </div>

          {/* Category + SKU row */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-green-600 text-base font-medium border-b-2 border-green-600 pb-0.5"
            >
              Squishmallows
            </a>
            <div className="h-5 border-l border-gray-300" />
            <span className="text-sm text-gray-500">SKU-235346456</span>
          </div>

          {/* Title */}
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-tight">
            Squishmallows Official Kellytoy Plush 12" Maui The Pineapple
          </h1>

          {/* Deal pill */}
          <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded">
            Best Deal
          </div>

          {/* Price row */}
          <div className="flex items-baseline gap-3">
            <div className="text-2xl md:text-3xl font-bold">50.00</div>
            <div className="text-xl text-gray-400 line-through">70.00</div>
            <div className="text-sm text-orange-700 font-semibold">28% OFF</div>
          </div>

          {/* Explore */}
          <div className="flex items-center gap-3 border border-neutral-300 px-4 rounded-xl py-2">
            <div className="p-2 border rounded-full text-green-600">⌗</div>
            <div className="flex-1 text-sm">
              <span className="font-semibold">Explore more</span> in
              <a href="#" className="text-green-600 underline ml-2">
                Dolls &amp; Collectables
              </a>
            </div>
          </div>

          {/* Size selector */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Size: <span className="font-medium">12-inch</span>
            </div>
            <a className="text-sm text-green-600 underline">Size Guide</a>
          </div>

          <div className="flex gap-3 flex-wrap">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSize === s
                    ? "border-pink-400 bg-white shadow-sm text-pink-600"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                } text-sm`}
                disabled={s === '24"'}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Signup Banner */}
          <div className="w-full bg-teal-200 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="font-semibold flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg">
                Signup and Get
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl text-amber-600 font-bold sm:ml-2">
                ¥ 50.00 off
              </span>
            </div>
            <button className="w-full sm:w-auto bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-sm sm:text-base">
              Signup Now
            </button>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center bg-transparent rounded-full overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease quantity"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-lg text-gray-700 shadow-sm"
              >
                −
              </button>
              <div className="w-10 sm:w-12 text-center text-lg sm:text-xl font-medium">
                {qty}
              </div>
              <button
                onClick={() => setQty(qty + 1)}
                aria-label="Increase quantity"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-lg text-gray-700 shadow-sm"
              >
                +
              </button>
            </div>

            <button className="flex-1 min-w-0 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full py-3 px-6 text-lg font-semibold flex items-center justify-center gap-3 shadow-sm">
              <span>Add to Cart</span>
              <BsCart3 />
            </button>
          </div>

          {/* Bottom actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full p-3 rounded-xl border border-gray-100 bg-gray-50 text-sm font-medium flex items-center justify-center gap-2">
              <span>Price Alert</span>
              <Bell />
            </button>
            <button className="w-full p-3 rounded-xl border border-gray-100 bg-gray-50 text-sm font-medium flex items-center justify-center gap-2">
              <span>Add to Wishlist</span>♡
            </button>
          </div>
        </div>

        {/* RIGHT: LastSection */}
        <div className="p-4">
          <LastSection />
        </div>
      </div>
    </div>
  );
}

function CouponCard({ code = "TOYS10" }) {
  return (
    <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg bg-gradient-to-r from-white to-green-100 overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center">
          %
        </div>
        <div>
          <span className="text-sm font-medium mr-2">Save 10% off</span>
          <span className="text-xs text-gray-700 underline">Learn More</span>
        </div>
      </div>
      <div className="px-3 py-2 border-dashed border-2 border-green-500 rounded text-sm">
        {code}
      </div>
    </div>
  );
}
