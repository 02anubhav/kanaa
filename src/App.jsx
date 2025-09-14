import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import { SearchProvider } from "./context/SearchContext";

const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/CartPage"));

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <Layout>
            <Suspense
              fallback={<div className="p-4 text-center">Loading...</div>}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
