import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import { SearchProvider } from "./context/SearchContext";
export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
