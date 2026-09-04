"use client";

import { useEffect, useRef, useState } from "react";

const hours = [
  { day: "Sunday", time: "10:00 AM – 10:00 PM", open: true },
  { day: "Monday", time: "10:00 AM – 10:00 PM", open: true },
  { day: "Tuesday", time: "10:00 AM – 10:00 PM", open: true },
  { day: "Wednesday", time: "Closed", open: false },
  { day: "Thursday", time: "10:00 AM – 10:00 PM", open: true },
  { day: "Friday", time: "10:00 AM – 10:00 PM", open: true },
  { day: "Saturday", time: "10:00 AM – 10:00 PM", open: true },
];

export function Location() {
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
    <section id="location" ref={ref} className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-coffee-400" />
            <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Find Us</span>
            <div className="w-8 h-px bg-coffee-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)]">
            Visit
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
              {" "}Coffee And
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-coffee-100 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2!2d90.3747!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f3e822b61%3A0xaf877932b95929a0!2sCoffee%20And!5e0!3m2!1sen!2sbd!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee And Location"
              />
            </div>
          </div>

          {/* Details */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-coffee-100/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center text-coffee-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-900">Address</h3>
                  <p className="text-coffee-600/70 mt-1 leading-relaxed">
                    House #42, 1st Floor,<br />
                    Road 12, Dhanmondi,<br />
                    Dhaka 1213, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-coffee-100/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center text-coffee-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-900">Phone</h3>
                  <a href="tel:+8801998600800" className="text-coffee-600/70 mt-1 inline-block hover:text-coffee-600 transition-colors">
                    +880 1998-600800
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-coffee-100/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center text-coffee-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-coffee-900 mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className={`${h.open ? "text-coffee-700" : "text-coffee-400"}`}>{h.day}</span>
                        <span className={`font-medium ${h.open ? "text-coffee-800" : "text-red-500"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/Y2uNwPDKxjDyuBiM6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
