import React, { createContext, useContext, useEffect, useState } from "react";
import { load, save, remove } from "../utils/localStorage";

const KEY = "cart_v1";
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => load(KEY, []));

  useEffect(() => {
    save(KEY, items);
  }, [items]);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      return [...prev, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clear = () => {
    setItems([]);
    remove(KEY);
  };

  const totalCount = items.reduce((s, it) => s + (it.qty || 0), 0);
  const totalPrice = items.reduce(
    (s, it) => s + (it.qty || 0) * (it.price || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        updateQty,
        removeItem,
        clear,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
