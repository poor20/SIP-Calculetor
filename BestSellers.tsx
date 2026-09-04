"use client";

import { useEffect, useRef, useState } from "react";

const specials = [
  {
    name: "Classic Breakfast Set",
    description: "Our signature breakfast platter with eggs, sausages, hash browns, toast & fresh salad. The perfect way to start your day!",
    price: "৳420",
    emoji: "🍳",
    badge: "Best Seller",
  },
  {
    name: "Grilled Chicken Platter",
    description: "Tender, perfectly grilled chicken served with seasonal vegetables, fluffy rice & house-made sauce.",
    price: "৳550",
    emoji: "🍗",
    badge: "Chef's Pick",
  },
  {
    name: "Nutella Brownie",
    description: "Warm, fudgy brownie drizzled with Nutella and topped with a scoop of vanilla ice cream. Pure indulgence!",
    price: "৳350",
    emoji: "🍫",
    badge: "Must Try",
  },
  {
    name: "Café Latte",
    description: "Our premium house blend espresso with silky steamed milk. Smooth, balanced, and absolutely addictive.",
    price: "৳260",
    emoji: "☕",
    badge: "Signature",
  },
];

export function BestSellers() {
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
    <section id="specials" ref={ref} className="py-24 sm:py-32 bg-gradient-to-br from-espresso-900 via-coffee-900 to-coffee-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coffee-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-coffee-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-coffee-400/50" />
            <span className="text-sm font-semibold text-coffee-300 uppercase tracking-wider">Specials</span>
            <div className="w-8 h-px bg-coffee-400/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-[var(--font-heading)]">
            Our Best
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-300 to-cream-300">
              {" "}Sellers
            </span>
          </h2>
          <p className="mt-4 text-coffee-300/60 text-lg">
            The most loved items from our kitchen — tried, tested, and adored by our regulars.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((item, i) => (
            <div
              key={item.name}
              className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white text-xs font-bold rounded-full shadow-lg">
                {item.badge}
              </div>

              {/* Emoji */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white font-[var(--font-heading)]">{item.name}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.description}</p>

              {/* Price */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-coffee-300">{item.price}</span>
                <div className="w-10 h-10 rounded-full bg-coffee-500/20 flex items-center justify-center text-coffee-300 group-hover:bg-coffee-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
