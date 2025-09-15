import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { BreadCrumbs } from "../components/Breadcrumbs/BreadCrumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useIsMobile from "../hooks/useIsMobile";
import { useState } from "react";
import ProductDescription from "../components/ProductDescription";
import ProductsGrid from "../components/ProductsGrid";
import ProductGeneralSpecs from "../components/ProductGeneralSpecs";
import ReviewsSection from "../components/Reviews";


export default function ProductDetail() {
  const { id } = useParams();
  const isMobile = useIsMobile(500);
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const location = useLocation();
  const category = product?.category || null;
  const [isToastActive, setIsToastActive] = useState(false);

  const handleAddToCart = () => {
    if (isToastActive) return;

    add(product, 1);
    setIsToastActive(true);

    toast.success(
      <div className="flex items-center gap-2">
        <span>{product.title} added to cart!</span>
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
        onClose: () => setIsToastActive(false),
      }
    );
  };

  if (!product) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link to="/" className="text-blue-600">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!isMobile && location.pathname !== "/" && (
        <BreadCrumbs>
          <BreadCrumbs.Back to="/" />
          <BreadCrumbs.Home to="/" />
          {category && (
            <BreadCrumbs.Item to={`/product/${product.id}`}>
              {category}
            </BreadCrumbs.Item>
          )}
          {product && (
            <BreadCrumbs.Item to={`/product/${product.id}`}>
              {product.title}
            </BreadCrumbs.Item>
          )}
        </BreadCrumbs>
      )}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className=" w-full border px-6 py-4 rounded-md border-neutral-300">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] sm:h-[400px] object-contain rounded  "
            />
          </div>

          <div className="flex gap-3 mt-4 border rounded-md border-neutral-300  px-2 py-1 w-fit">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-contain cursor-pointer "
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="flex flex-col gap-3 text-sm ">
            <span className="bg-yellow-500 w-fit text-white text-xs px-3 py-1 rounded-r-xl">
              ONLY {product.quantity} LEFT!
            </span>
            <div className="flex gap-4">
              <span className="text-indigo-600 cursor-pointer underline">
                {product.title || ""}
              </span>
              <span className="text-gray-500">SKU-{product.id}</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight">
            {product.title}
          </h2>

          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
            Best Deal
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold">
            <span className="text-indigo-700">
              ${product.salePrice.toFixed(2)}
            </span>
            <span className="text-gray-400 line-through text-lg">
              {product.price.toFixed(2)}
            </span>
            <span className="text-red-500 text-lg">28% OFF</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600">Explore more in</span>
            <Link to="/" className="text-blue-600 underline">
              {product.category}
            </Link>
          </div>
          <div className="flex items-center justify-between border border-dashed border-indigo-400 bg-indigo-50 p-3 rounded">
            <span className="text-indigo-700 font-semibold text-xs sm:text-sm">
              Signup and Get <span className="text-red-600">$50.00</span> off
            </span>
            <button className="bg-gradient-to-b from-indigo-500 to to-indigo-700 text-white px-4 py-2 rounded text-xs sm:text-sm">
              Signup Now
            </button>
          </div>

          <div className="flex justify-between items-center w-3/4 sm:w-[60%] rounded-md px-3 py-2 gap-1 sm:gap-2 text-sm border border-neutral-300">
            <span className="text-gray-500 text-xs sm:text-sm">
              Save 10% off
            </span>
            <span className="border border-dashed text-xs sm:text-sm text-indigo-600 border-indigo-300 px-2 py-1 rounded">
              {product.category}10
            </span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 w-1/2 text-xs sm:text-sm bg-gradient-to-b from-indigo-500 to to-indigo-700 text-white rounded hover:opacity-95 cursor-pointer"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="px-6 py-3 w-1/2 border text-xs sm:text-sm flex justify-center items-center border-neutral-300 rounded text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Go to Cart
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 rounded shadow-sm bg-white">
            <p className="font-semibold text-xs">
              Free Delivery by Thurs 04 July
            </p>
            <p className="text-xs text-gray-600">Hassle Free Returns</p>
            <p className="text-xs text-gray-600">12-Month Warranty</p>
          </div>

          <div className="p-4 rounded shadow-sm bg-white">
            <p className="text-xs font-semibold">Buy now, Pay later!</p>
            <p className="text-xs text-gray-500">
              Split in 4 payments. No interest.
            </p>
          </div>

          <div className="p-4 rounded shadow-sm bg-white">
            <p className="text-xs font-semibold">We’ve Got You Covered</p>
            <ul className="text-xs text-gray-600 mt-2 space-y-1">
              <li>✔ Free Delivery</li>
              <li>✔ 15 Days Replacement</li>
            </ul>
          </div>
        </div>
      </div>
      <ProductDescription />
      <ProductGeneralSpecs />
      <ReviewsSection/>
      <ProductsGrid />
      <ToastContainer />
    </div>
  );
}
