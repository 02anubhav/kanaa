import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {
  const { items, updateQty, removeItem, clear, totalPrice } = useCart();
  const [isToastActive, setIsToastActive] = useState(false);
  const navigate = useNavigate();

  const payNow = () => {
    if (isToastActive) return;

    setIsToastActive(true);

    toast.success("Payment Successful!", {
      position: "top-center",
      autoClose: 2000,
      onClose: () => setIsToastActive(false),
    });

    setTimeout(() => {
      clear();
      navigate("/");
    }, 2200);
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      <Cart>
        <Cart.Header>Your Cart ({items.length} items)</Cart.Header>
        <Cart.Items>
          {items.map((it) => (
            <Cart.Item
              key={it.id}
              image={it.image}
              title={it.title}
              price={`SAR ${it.price.toFixed(2)}`}
            >
              <span className="flex items-center mt-2 border rounded-lg w-max border-neutral-300">
                <button
                  onClick={() => updateQty(it.id, Math.max(1, it.qty - 1))}
                  className="px-3 py-2 hover:bg-gray-100 hover:rounded-l-lg cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4">{it.qty}</span>
                <button
                  onClick={() => updateQty(it.id, it.qty + 1)}
                  className="px-3 py-2 hover:bg-gray-100 hover:rounded-r-lg cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </span>
              <button
                onClick={() => removeItem(it.id)}
                className="mt-2 flex items-center gap-1 text-red-500 hover:text-red-700 text-sm cursor-pointer"
              >
                <Trash2 size={16} /> Remove
              </button>
            </Cart.Item>
          ))}
        </Cart.Items>
        <Cart.Summary>
          <Cart.Row
            label="Subtotal"
            value={`SAR ${(totalPrice * 0.87).toFixed(2)}`}
          />
          <Cart.Row label="Delivery" value="SAR 0" />
          <Cart.Row
            label="Taxes (VAT)"
            value={`SAR ${(totalPrice * 0.13).toFixed(2)}`}
          />
          <Cart.Total value={`SAR ${totalPrice.toFixed(2)}`} />
          <Cart.Checkout onClick={payNow} />
        </Cart.Summary>
      </Cart>
      <ToastContainer />
    </>
  );
}
