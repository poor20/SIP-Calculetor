"use client";

import { useEffect, useRef, useState } from "react";

const galleryItems = [
  { emoji: "☕", title: "Our Signature Coffee", category: "Beverages" },
  { emoji: "🍰", title: "Artisan Desserts", category: "Desserts" },
  { emoji: "🍳", title: "Hearty Breakfast", category: "Breakfast" },
  { emoji: "🍕", title: "Fresh Pizza", category: "Main Course" },
  { emoji: "🥗", title: "Healthy Salads", category: "Fresh" },
  { emoji: "🧁", title: "Baked Treats", category: "Bakery" },
  { emoji: "🍜", title: "Asian Noodles", category: "Asian" },
  { emoji: "🫖", title: "Premium Tea", category: "Beverages" },
];

export function Gallery() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-coffee-400" />
            <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Gallery</span>
            <div className="w-8 h-px bg-coffee-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)]">
            A Visual
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
              {" "}Treat
            </span>
          </h2>
          <p className="mt-4 text-coffee-600/60 text-lg">
            Feast your eyes on our beautifully crafted dishes and beverages that make Coffee And special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-coffee-100 to-cream-200 cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`${i === 0 ? "text-8xl" : "text-6xl"} group-hover:scale-125 transition-transform duration-500`}>
                  {item.emoji}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 via-coffee-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-semibold text-coffee-300 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white font-semibold mt-1">{item.title}</h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
