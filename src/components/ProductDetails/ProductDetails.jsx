import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductDetails({ children }) {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
      {children}
    </div>
  );
}

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="md:col-span-5">
      <div className="relative">
        <img
          src={images[current]}
          alt="Product"
          className="w-full h-96 object-contain rounded-lg border"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            onClick={() => setCurrent(i)}
            className={`w-20 h-20 object-cover border rounded cursor-pointer ${
              current === i ? "border-purple-600" : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Info({ children }) {
  return <div className="md:col-span-4 space-y-4">{children}</div>;
}

function Title({ children }) {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
}

function Price({ current, old, discount }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-green-600 font-bold text-xl">﷼ {current}</span>
      {old && <span className="line-through text-gray-500">﷼ {old}</span>}
      {discount && (
        <span className="text-red-500 text-sm">{discount}% OFF</span>
      )}
    </div>
  );
}

function Sizes({ options, selected }) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-1">Size:</h3>
      <div className="flex gap-2">
        {options.map((size, i) => (
          <button
            key={i}
            className={`px-4 py-2 border rounded ${
              size === selected ? "border-purple-600 bg-purple-50" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

function Coupon({ text, button }) {
  return (
    <div className="bg-green-100 border border-green-400 p-3 rounded flex justify-between items-center">
      <span>{text}</span>
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        {button}
      </button>
    </div>
  );
}

function CartActions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded">
        <button className="px-3 py-2">-</button>
        <input
          type="text"
          value="1"
          readOnly
          className="w-10 text-center border-x"
        />
        <button className="px-3 py-2">+</button>
      </div>
      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
        Add to Cart
      </button>
    </div>
  );
}

function Extra({ children }) {
  return <div className="md:col-span-3 space-y-4">{children}</div>;
}

function Box({ children }) {
  return <div className=" p-4 border">{children}</div>;
}

ProductDetails.ImageCarousel = ImageCarousel;
ProductDetails.Info = Info;
ProductDetails.Title = Title;
ProductDetails.Price = Price;
ProductDetails.Sizes = Sizes;
ProductDetails.Coupon = Coupon;
ProductDetails.CartActions = CartActions;
ProductDetails.Extra = Extra;
ProductDetails.Box = Box;

export default ProductDetails;
