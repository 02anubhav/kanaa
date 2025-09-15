import React from "react";

export default function BestSellerCard({ product, onAddToCart = () => {} }) {
  if (!product) return null;

  const {
    id,
    title,
    image,
    rating,
    reviews,
    price,
    salePrice,
    badges = [],
  } = product;

  const isBestSeller = badges.some(
    (b) => String(b.label).toLowerCase() === "best seller"
  );

  const discountPercent =
    price && salePrice ? Math.round(((price - salePrice) / price) * 100) : 0;

  return (
    <article className="bg-white rounded-xl  overflow-hidden border border-neutral-300">
      <div className="relative">
        {isBestSeller && (
          <span className="absolute left-3 top-3 bg-amber-300 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full z-10">
            Best Sellers
          </span>
        )}

        <button
          aria-label="wishlist"
          className="absolute right-3 top-3 bg-white/80 rounded-full p-1 text-gray-500 z-10"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.8 6.3a4.6 4.6 0 00-6.6 0L12 8.5l-2.2-2.2a4.6 4.6 0 00-6.6 6.6L12 21l9-8.1a4.6 4.6 0 00-.2-6.6z"
            />
          </svg>
        </button>

        <div className="w-full h-56 flex items-center justify-center bg-white">
          <img
            src={image}
            alt={title}
            className="max-h-40 object-contain"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-800/80" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.86 1.402-8.172L.132 9.21l8.2-1.192z" />
            </svg>
            <span className="font-semibold text-sm">{rating ?? "-"}</span>
          </div>
          <span className="text-gray-400">({reviews ?? 0})</span>
        </div>

        <div className="flex items-end justify-between gap-3 mb-3">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-emerald-700">
                {salePrice ? `\$${salePrice}` : price ? `\$${price}` : "-"}
              </span>
              {salePrice && price && (
                <>
                  <span className="text-sm text-gray-400 line-through">
                    ${price}
                  </span>
                  <span className="text-sm text-orange-600 font-medium">
                    {discountPercent}% OFF
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex mb-3">
          <button
            onClick={() => onAddToCart(product)}
            className=" bg-emerald-700 w-full text-white px-4 py-2 rounded-full shadow-sm hover:bg-emerald-800 flex justify-center items-center gap-2 text-xs cursor-pointer"
          >
            Add to Cart
          </button>
        </div>

        <div className="text-xs text-amber-600 mb-3">
          <svg
            className="inline w-4 h-4 align-text-bottom mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 11h18M3 7h18M3 15h12"
            />
          </svg>
          <span className="text-gray-600">36 people just bought!</span>
        </div>

        <div className="flex items-center gap-3 mt-1">
          <div className="bg-green-100 rounded-full px-3 py-1 text-xs font-semibold text-green-800">
            tabby
          </div>
          <div className="bg-yellow-100 rounded-full px-3 py-1 text-xs font-semibold text-yellow-800">
            tamara
          </div>
        </div>
      </div>
    </article>
  );
}
