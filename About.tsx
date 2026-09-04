"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
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
    <section id="about" ref={ref} className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-coffee-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image Area */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-coffee-200 via-coffee-100 to-cream-200 aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">☕</div>
                  <div className="text-6xl mb-2">🫘</div>
                  <div className="text-5xl">🍰</div>
                </div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl shadow-coffee-900/10 border border-coffee-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coffee-500 to-coffee-600 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-coffee-800">5.0</div>
                    <div className="text-xs text-coffee-500">Excellent Rating</div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-coffee-600 to-coffee-700 text-white rounded-2xl px-5 py-3 shadow-xl">
                <div className="text-sm font-medium">Best Coffee</div>
                <div className="text-xs text-white/70">in Town ☕</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-coffee-400" />
              <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Our Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)] leading-tight">
              A Place That Feels
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
                Like Home
              </span>
            </h2>

            <p className="mt-6 text-lg text-coffee-700/70 leading-relaxed">
              Coffee And is more than just a café — it&apos;s a destination where every cup of coffee
              is crafted with passion and every moment is designed to be savored. Located in the
              heart of Dhanmondi, Dhaka, we&apos;ve built a space where friends gather, families
              celebrate, and memories are made.
            </p>

            <p className="mt-4 text-coffee-700/60 leading-relaxed">
              From our signature coffee blends to our carefully curated menu of Chinese, Asian,
              and international cuisines, we ensure that every visit is a delightful experience.
              Whether you&apos;re here for a quick coffee, a hearty meal, or a celebration — we&apos;ve got
              you covered.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: "☕", title: "Premium Coffee", desc: "Handcrafted & fresh" },
                { icon: "🍳", title: "All-Day Meals", desc: "Breakfast to dinner" },
                { icon: "🎉", title: "Party Venue", desc: "Birthday celebrations" },
                { icon: "💚", title: "Healthy Options", desc: "Fresh & nutritious" },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-coffee-100/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <div className="font-semibold text-coffee-800 text-sm">{feature.title}</div>
                    <div className="text-xs text-coffee-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-coffee-600 to-coffee-700 text-white">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Opening Hours</span>
              </div>
              <div className="space-y-1 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Sun — Tue, Thu — Sat</span>
                  <span className="font-medium text-white">10:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span className="font-medium text-red-300">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
