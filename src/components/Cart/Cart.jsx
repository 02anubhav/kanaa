import { ArrowLeftSquareIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Cart = ({ children }) => (
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 ">
    {children}
  </div>
);

const Header = ({ children }) => (
  <div className="col-span-1 lg:col-span-3 bg-indigo-50 flex flex-col justify-center py-2 sm:py-3 px-2 sm:px-4 rounded-md">
    <Link
      to="/" 
      className="text-xs sm:text-sm mb-1 text-neutral-500 hover:text-indigo-600 flex items-center gap-1"
    >
      ← Continue Shopping
    </Link>
    <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
      {children}
    </h2>
  </div>
);

const Items = ({ children }) => (
  <div className="lg:col-span-2 space-y-3 sm:space-y-4">{children}</div>
);

const Item = ({ image, title, price, children }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border-neutral-300 border rounded-lg p-3 sm:p-4 bg-white">
    <img
      src={image}
      alt={title}
      className="w-full sm:w-28 h-32 sm:h-24 object-contain rounded"
    />
    <div className="flex-1 w-full">
      <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{price}</p>
      <div className="mt-2">{children}</div>
    </div>
  </div>
);

const Summary = ({ children }) => (
  <div className=" border border-neutral-300 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 h-fit bg-white">
    <h3 className="text-lg sm:text-xl font-normal tracking-tight">
      Order Summary
    </h3>
    {children}
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between text-xs sm:text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Total = ({ value }) => (
  <div className="flex justify-between font-semibold text-base sm:text-lg pt-3 sm:pt-4">
    <span>Total (inclusive of VAT)</span>
    <span>{value}</span>
  </div>
);

const Checkout = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-gradient-to-b from-indigo-500 to to-indigo-700 hover:bg-indigo-700 text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium cursor-pointer"
  >
    Pay Now 
  </button>
);

Cart.Header = Header;
Cart.Items = Items;
Cart.Item = Item;
Cart.Summary = Summary;
Cart.Row = Row;
Cart.Total = Total;
Cart.Checkout = Checkout;
