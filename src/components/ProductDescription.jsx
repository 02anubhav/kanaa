import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
export default function ProductDescription() {
  const { id } = useParams();
  console.log(id);
  const [expanded, setExpanded] = useState(false);
  const [highlightsOpen, setHighlightsOpen] = useState(false);

  const product = products.find((p) => p.id === id);
  const highlights = Array.isArray(product?.highlights)
    ? product.highlights
    : [];

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">Product not found</div>
    );
  }

  const shortText =
    product.description.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <section className="w-full mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <h2 className="text-lg font-semibold border-b pb-4 border-neutral-300 mb-4">
            Product Description
          </h2>

          <div className="bg-white p-6 rounded-md ">
            <h3 className="text-sm font-medium mb-3">Description:</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {expanded ? product.description : shortText}
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-orange-500 inline-flex items-center gap-2 focus:outline-none"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  See less
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 15l-6-6-6 6"
                    />
                  </svg>
                </>
              ) : (
                <>
                  View More
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="bg-[#f4f7fb] rounded-xl  p-5 border border-transparent hover:border-gray-100 transition">
              <div className="bg-gray-100 inline-block px-3 py-1 rounded-md mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Product Highlights:
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                {highlights.length ? (
                  highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No highlights available.</li>
                )}
              </ul>

              <button
                onClick={() => setHighlightsOpen(!highlightsOpen)}
                aria-expanded={highlightsOpen}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 border border-orange-200 text-orange-600 rounded-full py-2 text-sm hover:bg-orange-50 transition"
              >
                View More Highlights
                <svg
                  className={`w-4 h-4 transform ${
                    highlightsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {highlightsOpen && (
                <div className="mt-4 text-sm text-gray-600">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Machine washable on gentle cycle (air dry recommended).
                    </li>
                    <li>Suitable for ages 3+ (small parts may be present).</li>
                    <li>
                      Includes clip-on carabiner for backpacks and keyrings.
                    </li>
                    <li>Official Kelly Toys licensed product.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
