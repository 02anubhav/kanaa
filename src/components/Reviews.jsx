// src/components/ReviewsSection.jsx
import React, { useState, useMemo, useRef, useEffect } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { format } from "date-fns";

const sampleReviews = [
  {
    name: "Allen",
    rating: 4,
    comment:
      "As a plush toy enthusiast, I can’t get enough of Squishmallows! Their softness is unmatched and they make the perfect cuddle buddy.",
    date: "2024-04-11",
    helpful: 2,
  },
  {
    name: "Madiha",
    rating: 5,
    comment:
      "My daughter loves her Squishmallow! It's so soft and cuddly, she takes it everywhere with her. Would definitely recommend.",
    date: "2024-04-11",
    helpful: 1,
  },
  {
    name: "Mohammed",
    rating: 2,
    comment:
      "I was disappointed. It’s soft and cute, but after a few weeks of light use, the seams started coming apart and the stuffing shifted.",
    date: "2024-04-12",
    helpful: 0,
  },
  {
    name: "Priya",
    rating: 5,
    comment:
      "Absolutely love this! Super soft, lightweight, and perfect as a gift. My kids fight over it every night!",
    date: "2024-04-15",
    helpful: 4,
  },
  {
    name: "Rahul",
    rating: 3,
    comment:
      "It’s okay, not as big as I expected. Soft, but the price feels a bit high for the size.",
    date: "2024-04-18",
    helpful: 1,
  },
  {
    name: "Sofia",
    rating: 5,
    comment:
      "One of the best purchases I’ve made! Perfectly huggable, and I even use it as a pillow sometimes.",
    date: "2024-04-20",
    helpful: 3,
  },
  {
    name: "Arjun",
    rating: 4,
    comment:
      "Good quality overall, but mine arrived a little smaller than shown in the pictures. Still happy with it.",
    date: "2024-04-22",
    helpful: 1,
  },
  {
    name: "Emily",
    rating: 5,
    comment:
      "I bought this as a gift and the person absolutely loved it! The softness and cuteness are unbeatable.",
    date: "2024-04-25",
    helpful: 2,
  },
  {
    name: "Karan",
    rating: 3,
    comment:
      "It’s fine, but not as durable as I hoped. After a month, the fabric started to pill a little.",
    date: "2024-04-28",
    helpful: 0,
  },
  {
    name: "Nisha",
    rating: 5,
    comment:
      "So adorable! Makes me smile every time I see it. Great stitching and really comfy to hold.",
    date: "2024-05-01",
    helpful: 5,
  },
];

export default function ReviewsSection({ product = {} }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilterStars, setSelectedFilterStars] = useState(null);
  const [sortBy, setSortBy] = useState("mostHelpful");
  const [localHelpful, setLocalHelpful] = useState({});
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedComments, setExpandedComments] = useState({});

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const reviews =
    product.reviews && product.reviews.length > 0
      ? product.reviews.slice()
      : sampleReviews.slice();

  const averageRating =
    typeof product.rating === "number" && !isNaN(product.rating)
      ? product.rating
      : reviews.length
      ? reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length
      : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((r) => r.rating === star).length
  );

  const filteredSorted = useMemo(() => {
    let list = reviews.slice();
    if (selectedFilterStars)
      list = list.filter((r) => r.rating === selectedFilterStars);
    if (sortBy === "mostHelpful")
      list.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
    else if (sortBy === "newest")
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return list;
  }, [reviews, selectedFilterStars, sortBy]);

  const fDate = (d) => {
    try {
      return format(new Date(d), "dd-MM-yyyy");
    } catch {
      return d;
    }
  };

  const handleHelpful = (index) =>
    setLocalHelpful((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  const toggleStarFilter = (star) =>
    setSelectedFilterStars((prev) => (prev === star ? null : star));
  const avatarBgClass = (name) => {
    const char = (name && name.charCodeAt(0)) || 65;
    const idx = char % 5;
    const colors = [
      "bg-green-100 text-green-800",
      "bg-indigo-100 text-indigo-800",
      "bg-yellow-100 text-yellow-800",
      "bg-pink-100 text-pink-800",
      "bg-teal-100 text-teal-800",
    ];
    return colors[idx];
  };

  const compactShowCount = 2;
  const effectiveVisibleCount = isExpanded ? visibleCount : compactShowCount;
  const visibleReviews = filteredSorted.slice(0, effectiveVisibleCount);

  const toggleCommentExpanded = (absoluteIndex) =>
    setExpandedComments((prev) => ({
      ...prev,
      [absoluteIndex]: !prev[absoluteIndex],
    }));
  const truncate = (text = "", len = 220) =>
    text.length > len ? `${text.slice(0, len)}...` : text;

  useEffect(() => {
    if (!contentRef.current) return;
    const fullHeight = contentRef.current.scrollHeight;
    setMaxHeight(isExpanded ? `${fullHeight + 24}px` : "0px");
  }, [isExpanded, visibleCount, selectedFilterStars, sortBy, reviews.length]);

  return (
    <div className="w-full mx-auto px-4 py-8 border-b border-neutral-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>
        <button
          onClick={() => setIsExpanded((v) => !v)}
          className="flex items-center gap-2 text-sm text-orange-600 border border-orange-300 px-3 py-1 rounded-full hover:bg-orange-50"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "See less" : "See more"}</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
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

      <div
        ref={wrapperRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div ref={contentRef}>
          <div className="grid grid-cols-12 gap-6">
            <aside className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-xl p-5 border border-neutral-300 sticky top-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold">
                    {averageRating ? averageRating.toFixed(1) : "0.0"}
                  </div>
                  <div className="flex items-center justify-center mt-2 space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(averageRating)
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {reviews.length} Reviews
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {[5, 4, 3, 2, 1].map((star, i) => {
                    const count = ratingDistribution[i];
                    const percent = reviews.length
                      ? Math.round((count / reviews.length) * 100)
                      : 0;
                    return (
                      <div key={star} className="flex items-center gap-3">
                        <button
                          onClick={() => toggleStarFilter(star)}
                          className={`flex items-center gap-2 text-sm ${
                            selectedFilterStars === star
                              ? "font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          <span className="w-6">{star}★</span>
                        </button>
                        <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden">
                          <div
                            className="h-2 rounded"
                            style={{
                              width: `${percent}%`,
                              background:
                                "linear-gradient(90deg,#34d399,#10b981)",
                            }}
                          />
                        </div>
                        <div className="w-8 text-right text-sm text-gray-500">
                          {count}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="w-full border rounded-full py-2 flex items-center justify-center gap-2 mt-2 mb-4 border-neutral-300"
                  onClick={() =>
                    alert("Open write review form (implement yourself)")
                  }
                >
                  <span className="text-sm">Write a review</span>
                </button>

                <div className="mt-3 text-sm text-gray-500">
                  <div className="font-medium mb-1">Filter by ratings</div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <label key={s} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedFilterStars === s}
                          onChange={() => toggleStarFilter(s)}
                          className="w-4 h-4"
                        />
                        <span>{s} ★</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <main className="col-span-12 lg:col-span-9">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  Items 1-{Math.min(filteredSorted.length, visibleCount)} of{" "}
                  {filteredSorted.length}
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-600">Sort By</label>
                  <select
                    className=" rounded px-3 py-1 text-sm border border-neutral-300"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="mostHelpful">Most Helpful</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {visibleReviews.map((review) => {
                  const absoluteIndex = filteredSorted.indexOf(review);
                  const isExpandedComment = !!expandedComments[absoluteIndex];
                  const needsTruncate =
                    review.comment && review.comment.length > 220;

                  return (
                    <div
                      key={`${review.name}-${absoluteIndex}`}
                      className="bg-white rounded-lg p-5 border border-neutral-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${avatarBgClass(
                              review.name
                            )}`}
                          >
                            {review.name
                              ? review.name.charAt(0).toUpperCase()
                              : "U"}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="font-semibold">
                                  {review.name}
                                </div>
                                <div className="text-xs text-gray-400">|</div>
                                <div className="text-xs text-gray-500">
                                  {fDate(review.date)}
                                </div>
                              </div>

                              <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }).map((_, sIdx) => (
                                  <FaStar
                                    key={sIdx}
                                    className={
                                      sIdx < (review.rating || 0)
                                        ? "text-yellow-400"
                                        : "text-gray-200"
                                    }
                                  />
                                ))}
                              </div>
                            </div>

                            <div>
                              <button
                                onClick={() => handleHelpful(absoluteIndex)}
                                className="flex items-center gap-2 border border-neutral-300 rounded-full px-3 py-2 text-sm hover:bg-gray-50"
                              >
                                <FaThumbsUp className="text-gray-600" />
                                <span>Helpful</span>
                                <span className="ml-1 text-gray-600">
                                  {" "}
                                  {(review.helpful || 0) +
                                    (localHelpful[absoluteIndex] || 0)}
                                </span>
                              </button>
                            </div>
                          </div>

                          <p className="mt-3 text-gray-700 leading-relaxed">
                            {needsTruncate && !isExpandedComment
                              ? truncate(review.comment, 220)
                              : review.comment}
                          </p>

                          {needsTruncate && (
                            <button
                              onClick={() =>
                                toggleCommentExpanded(absoluteIndex)
                              }
                              className="mt-2 text-sm text-blue-600 hover:underline"
                            >
                              {isExpandedComment ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-center">
                {visibleCount < filteredSorted.length ? (
                  <button
                    onClick={() => setVisibleCount((v) => v + 50)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-full text-sm"
                  >
                    Load More +
                  </button>
                ) : (
                  <div className="text-sm text-gray-500">No more reviews</div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
