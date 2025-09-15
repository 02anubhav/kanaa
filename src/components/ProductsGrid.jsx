import React, { useState } from "react";
import BestSellerCard from "./BestSellerCard";
import products from "../data/products";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext"; // adjust path if needed

export default function ProductsGrid({ showOnlyBestSellers = true }) {
  const { add } = useCart();
  const [isToastActive, setIsToastActive] = useState(false);

  const list = (products || []).filter((p) => {
    if (!showOnlyBestSellers) return true;
    return (
      Array.isArray(p.badges) &&
      p.badges.some((b) => String(b.label).toLowerCase() === "best seller")
    );
  });

  if (!list.length) {
    return (
      <div className="p-6 text-center text-gray-500">No products found</div>
    );
  }

  const handleAddToCart = (product, usePropHandler = false, propHandler) => {
    if (usePropHandler && typeof propHandler === "function") {
      try {
        propHandler(product);
      } catch (err) {}
    } else {
      try {
        add && add(product, 1);
      } catch (err) {
        console.error("Cart add failed", err);
      }
    }

    if (isToastActive) return;
    setIsToastActive(true);

    toast.success(
      <div className="flex items-center gap-3">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-10 h-10 object-contain rounded"
          />
        )}
        <div className="text-left">
          <div className="font-medium text-sm">{product.title}</div>
          <div className="text-xs text-gray-600">Added to cart</div>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: 1600,
        onClose: () => setIsToastActive(false),
      }
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Best Sellers</h1>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory xl:hidden">
        {list.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-56 snap-start">
            <BestSellerCard
              product={product}
              onAddToCart={(p) => handleAddToCart(p, true, null)}
            />
          </div>
        ))}
      </div>

      <div className="hidden xl:grid grid-cols-5 gap-6">
        {list.map((product) => (
          <BestSellerCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
