"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "A Happy Customer",
    rating: 5,
    date: "2023",
    text: "Very good food, nice food, delicious food, amazing food, super food. Very clean and good culture. Super delicious food, beautiful place!",
    source: "TripAdvisor",
  },
  {
    name: "Food Lover Dhaka",
    rating: 5,
    date: "2024",
    text: "Beautiful place to spend time with friends and family members. Best place for coffee, refreshing drink, healthy food & many more. Best place for celebrating birthday parties!",
    source: "TripAdvisor",
  },
  {
    name: "Coffee Enthusiast",
    rating: 5,
    date: "2024",
    text: "Best coffee in town! Loved by many for having coffee, snacks & refreshing drinks. The atmosphere is wonderful and the staff is very friendly.",
    source: "TripAdvisor",
  },
  {
    name: "Regular Visitor",
    rating: 5,
    date: "2023",
    text: "A restaurant that opens at 10 AM & closes at 10 PM. Have all day meals. Sitting capacity is cozy for 20 persons. Great for intimate gatherings!",
    source: "Google Maps",
  },
];

export function Reviews() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-coffee-400" />
            <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Reviews</span>
            <div className="w-8 h-px bg-coffee-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)]">
            What People
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
              {" "}Say
            </span>
          </h2>
          <p className="mt-4 text-coffee-600/60 text-lg">
            Don&apos;t just take our word for it — hear from our beloved customers.
          </p>
        </div>

        {/* Rating Overview */}
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-6xl font-bold text-coffee-800 font-[var(--font-heading)]">5.0</span>
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-coffee-500 mt-1">Based on multiple reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`p-6 rounded-2xl bg-cream-50 border border-coffee-100/50 hover:bg-white hover:shadow-xl hover:shadow-coffee-900/5 transition-all duration-500 hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-coffee-700/80 text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-coffee-100/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-coffee-800 text-sm">{review.name}</div>
                    <div className="text-xs text-coffee-400">{review.date}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-coffee-100 text-coffee-600 font-medium">
                    {review.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
