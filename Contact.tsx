"use client";

import { useEffect, useRef, useState } from "react";

export function Contact() {
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
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-coffee-400" />
            <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Get In Touch</span>
            <div className="w-8 h-px bg-coffee-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)]">
            We&apos;d Love to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
              {" "}Hear From You
            </span>
          </h2>
          <p className="mt-4 text-coffee-600/60 text-lg">
            Have a question, feedback, or want to place an order? Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Call Card */}
          <div
            className={`group p-8 rounded-2xl bg-gradient-to-br from-coffee-50 to-cream-100 border border-coffee-100/50 hover:shadow-xl hover:shadow-coffee-900/5 transition-all duration-500 hover:-translate-y-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coffee-500 to-coffee-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-coffee-900 font-[var(--font-heading)]">Call Us</h3>
            <p className="mt-2 text-coffee-600/60 text-sm">Give us a call for orders or inquiries</p>
            <a
              href="tel:+8801998600800"
              className="mt-4 inline-flex items-center gap-2 text-coffee-700 font-semibold hover:text-coffee-500 transition-colors"
            >
              +880 1998-600800
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Visit Card */}
          <div
            className={`group p-8 rounded-2xl bg-gradient-to-br from-coffee-50 to-cream-100 border border-coffee-100/50 hover:shadow-xl hover:shadow-coffee-900/5 transition-all duration-500 hover:-translate-y-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coffee-500 to-coffee-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-coffee-900 font-[var(--font-heading)]">Visit Us</h3>
            <p className="mt-2 text-coffee-600/60 text-sm">Come and experience our café</p>
            <p className="mt-4 text-coffee-700 font-medium text-sm leading-relaxed">
              House #42, 1st Floor,<br />
              Road 12, Dhanmondi,<br />
              Dhaka 1213
            </p>
          </div>

          {/* Hours Card */}
          <div
            className={`group p-8 rounded-2xl bg-gradient-to-br from-coffee-50 to-cream-100 border border-coffee-100/50 hover:shadow-xl hover:shadow-coffee-900/5 transition-all duration-500 hover:-translate-y-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coffee-500 to-coffee-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-coffee-900 font-[var(--font-heading)]">Opening Hours</h3>
            <p className="mt-2 text-coffee-600/60 text-sm">We&apos;re ready to serve you</p>
            <div className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between text-coffee-700">
                <span>Sun — Tue, Thu — Sat</span>
                <span className="font-semibold">10 AM – 10 PM</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Wednesday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:+8801998600800"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white font-semibold rounded-2xl shadow-xl shadow-coffee-600/25 hover:from-coffee-500 hover:to-coffee-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://maps.app.goo.gl/Y2uNwPDKxjDyuBiM6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-600/25 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
