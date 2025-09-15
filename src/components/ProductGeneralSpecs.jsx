// src/components/ProductGeneralSpecs.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function fmt(v) {
  if (v === null || v === undefined || v === "") return "—";
  if (Array.isArray(v)) return v.join(", ");
  if (typeof v === "object")
    return Object.entries(v)
      .map(([k, val]) => `${k}: ${val}`)
      .join("\n");
  return String(v);
}

const ROWS = [
  { label: "SKU", key: "sku", source: "specs" },
  { label: "Brand", key: "brand", source: "specs" },
  { label: "Product Title", key: "title", source: "product" },
  {
    label: "Battery Type",
    key: "batteryType",
    source: "specs",
    alt: ["battery"],
  },
  { label: "Age", key: "age", source: "specs" },
  { label: "Country of Origin", key: "countryOfOrigin", source: "specs" },
  {
    label: "Manufacturer Minimum Age",
    key: "manufacturerMinimumAge",
    source: "specs",
  },
  { label: "Model Number", key: "modelNumber", source: "specs" },
];

export default function ProductGeneralSpecs() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [open, setOpen] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Product not found</h2>
      </div>
    );
  }

  const specs = product.specifications || {};

  const readVal = (row) => {
    if (row.source === "product") return fmt(product[row.key]);

    if (row.key in specs) return fmt(specs[row.key]);
    if (row.key in product) return fmt(product[row.key]);

    if (Array.isArray(row.alt)) {
      for (const a of row.alt) {
        if (a in specs) return fmt(specs[a]);
        if (a in product) return fmt(product[a]);
      }
    }
    return "—";
  };

  return (
    <main className="max-w-6xl mx-auto px-4  py-6 border-y border-neutral-300 ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Specifications</h1>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm text-orange-600 border border-orange-300 px-3 py-1 rounded-full hover:bg-orange-50"
        >
          {open ? "Hide Specifications" : "View Specifications"}
          <svg
            className={`w-4 h-4 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
      </div>

      {open && (
        <section className="bg-white border border-neutral-300 rounded-lg overflow-hidden transition-all">
          <div className="bg-amber-50 px-4 py-3 rounded-t-lg">
            <h2 className="text-amber-700 text-center font-semibold">
              General Specifications
            </h2>
          </div>

          <div className="divide-y divide-neutral-100">
            {ROWS.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-x-6 items-start py-4 px-6 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="sm:col-span-4 text-sm text-gray-700 font-medium">
                  {row.label}
                </div>
                <div className="sm:col-span-8 text-sm text-gray-600 whitespace-pre-line">
                  {readVal(row)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
