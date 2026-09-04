"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-coffee-900 to-coffee-800" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coffee-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coffee-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coffee-600/5 rounded-full blur-3xl" />

        {/* Floating Coffee Beans */}
        <div className="absolute top-[15%] right-[15%] text-6xl opacity-10 animate-float" style={{ animationDelay: "0s" }}>
          ☕
        </div>
        <div className="absolute bottom-[20%] left-[10%] text-5xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          🫘
        </div>
        <div className="absolute top-[40%] left-[20%] text-4xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          🍃
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open Now · Dhanmondi, Dhaka
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight font-[var(--font-heading)] transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Where Every
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-300 via-coffee-200 to-cream-300">
              Cup Tells
            </span>
            <br />
            <span className="italic">a Story</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Beautiful place to spend time with friends and family. Best place for
            coffee, refreshing drinks, healthy food &amp; many more.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white font-semibold rounded-2xl shadow-xl shadow-coffee-600/30 hover:shadow-2xl hover:shadow-coffee-600/40 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Menu
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+8801998600800"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 flex flex-wrap gap-8 transition-all duration-700 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "5.0", label: "Rating" },
              { value: "20+", label: "Seats" },
              { value: "10+", label: "Menu Items" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white font-[var(--font-heading)]">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
