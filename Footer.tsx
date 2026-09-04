"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-coffee-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-coffee-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coffee-500 to-coffee-600 flex items-center justify-center text-white text-lg shadow-lg">
                  ☕
                </div>
                <div>
                  <span className="text-xl font-bold font-[var(--font-heading)]">Coffee And</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Beautiful place to spend time with friends and family. Best place for
                coffee, refreshing drinks, healthy food &amp; celebrations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#menu", label: "Our Menu" },
                  { href: "#specials", label: "Best Sellers" },
                  { href: "#gallery", label: "Gallery" },
                  { href: "#reviews", label: "Reviews" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-coffee-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-coffee-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/40 text-sm">
                    House #42, 1st Floor,<br />Road 12, Dhanmondi,<br />Dhaka 1213
                  </span>
                </li>
                <li>
                  <a href="tel:+8801998600800" className="flex items-center gap-3 text-white/40 text-sm hover:text-coffee-300 transition-colors">
                    <svg className="w-4 h-4 text-coffee-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +880 1998-600800
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/Y2uNwPDKxjDyuBiM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/40 text-sm hover:text-coffee-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-coffee-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Google Maps
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-semibold text-white mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-white/40">
                  <span>Sun — Tue</span>
                  <span>10 AM – 10 PM</span>
                </li>
                <li className="flex justify-between text-red-400">
                  <span>Wednesday</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between text-white/40">
                  <span>Thu — Sat</span>
                  <span>10 AM – 10 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-sm">
                © {currentYear} Coffee And. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-white/30 text-sm">
                <span>Made with</span>
                <span className="text-red-400">♥</span>
                <span>in Dhaka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
