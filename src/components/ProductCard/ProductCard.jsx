import React from "react";

function ProductCard({ children }) {
  return (
    <div className="border border-neutral-200 rounded-lg p-3 sm:p-4 flex flex-col gap-2 bg-white hover:shadow-md transition w-full">
      {children}
    </div>
  );
}

function Image({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-30 rounded-md object-contain"
    />
  );
}


function Rating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-sm">
      <span className="text-yellow-500">★</span>
      <span className="font-semibold">{rating}</span>
      <span className="text-gray-500">({reviews})</span>
    </div>
  );
}

function Badges({ children }) {
  return <div className="flex flex-wrap gap-1 sm:gap-2">{children}</div>;
}

function Badge({ children, color = "bg-gray-200 text-gray-800" }) {
  return (
    <span
      className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded font-medium ${color}`}
    >
      {children}
    </span>
  );
}

function Title({ children }) {
  return (
    <h3 className="text-xs sm:text-sm font-medium leading-tight line-clamp-2 h-8 sm:h-10">
      {children}
    </h3>
  );
}

function Price({ children }) {
  return <div className="text-lg sm:text-xl font-bold">{children}</div>;
}

function Delivery({ date, timeLeft }) {
  return (
    <p className="text-[10px] sm:text-xs text-gray-600">
      Get it by <span className="font-semibold">{date}</span>
      <br />
      <span className="text-purple-600">if ordered within {timeLeft}</span>
    </p>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 w-full bg-gradient-to-b from-indigo-500 to to-indigo-700 hover:bg-indigo-700 text-white py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium cursor-pointer"
    >
      {children}
    </button>
  );
}

ProductCard.Image = Image;
ProductCard.Rating = Rating;
ProductCard.Badges = Badges;
ProductCard.Badge = Badge;
ProductCard.Title = Title;
ProductCard.Price = Price;
ProductCard.Delivery = Delivery;
ProductCard.Button = Button;

export default ProductCard;
