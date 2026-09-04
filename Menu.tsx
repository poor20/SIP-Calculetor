"use client";

import { useEffect, useRef, useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

type MenuCategory = {
  name: string;
  icon: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    name: "Coffee & Beverages",
    icon: "☕",
    items: [
      { name: "Espresso", description: "Rich, bold single shot of pure coffee perfection", price: "৳180" },
      { name: "Cappuccino", description: "Velvety espresso with steamed milk foam", price: "৳250" },
      { name: "Café Latte", description: "Smooth espresso with creamy steamed milk", price: "৳260" },
      { name: "Mocha", description: "Espresso, chocolate & steamed milk indulgence", price: "৳280" },
      { name: "Iced Americano", description: "Chilled espresso with cold water, bold & refreshing", price: "৳220" },
      { name: "Caramel Macchiato", description: "Layered espresso with vanilla, caramel & milk", price: "৳300" },
      { name: "Hazelnut Latte", description: "Aromatic hazelnut blended with latte perfection", price: "৳290" },
      { name: "Hot Chocolate", description: "Premium cocoa with steamed milk & whipped cream", price: "৳250" },
      { name: "Fresh Fruit Juice", description: "Seasonal fresh-pressed fruit juices", price: "৳180", tags: ["Popular"] },
      { name: "Iced Tea", description: "Refreshing brewed tea served over ice", price: "৳160" },
    ],
  },
  {
    name: "Breakfast",
    icon: "🍳",
    items: [
      { name: "Classic Breakfast Set", description: "Eggs, toast, sausages, hash browns & fresh salad", price: "৳420", tags: ["Best Seller"] },
      { name: "Pancake Stack", description: "Fluffy pancakes with maple syrup & fresh berries", price: "৳350" },
      { name: "Egg Benedict", description: "Poached eggs with hollandaise on English muffins", price: "৳450", tags: ["Popular"] },
      { name: "Avocado Toast", description: "Sourdough topped with avocado, cherry tomatoes & feta", price: "৳380" },
    ],
  },
  {
    name: "Main Course",
    icon: "🍽️",
    items: [
      { name: "Grilled Chicken Platter", description: "Tender grilled chicken with seasonal vegetables & rice", price: "৳550", tags: ["Best Seller"] },
      { name: "Stir Fry Rice Bowl", description: "Wok-tossed rice with mixed vegetables & choice of protein", price: "৳450" },
      { name: "Chicken Fettuccine", description: "Creamy fettuccine pasta with grilled chicken", price: "৳555" },
      { name: "Noodles stir-fry", description: "Asian-style noodles with vegetables & sauce", price: "৳400" },
      { name: "Fish & Chips", description: "Beer-battered fish with crispy fries & tartar sauce", price: "৳520" },
      { name: "Meat Lovers Pizza 12″", description: "Loaded pizza with pepperoni, sausage, chicken & cheese", price: "৳1030", tags: ["Premium"] },
    ],
  },
  {
    name: "Snacks & Sides",
    icon: "🥗",
    items: [
      { name: "Crispy Calamari", description: "Golden fried squid rings with spicy mayo", price: "৳415" },
      { name: "Chicken Wings", description: "Spicy buffalo wings with blue cheese dip", price: "৳380", tags: ["Popular"] },
      { name: "French Fries", description: "Crispy golden fries with seasoning", price: "৳180" },
      { name: "Seafood Soup", description: "Rich & savory soup with mixed seafood", price: "৳350" },
      { name: "Spring Rolls", description: "Crispy vegetable spring rolls with sweet chili sauce", price: "৳220" },
    ],
  },
  {
    name: "Desserts",
    icon: "🍰",
    items: [
      { name: "Red Velvet Cake", description: "Layers of red velvet with cream cheese frosting", price: "৳320" },
      { name: "Chocolate Cake", description: "Rich dark chocolate layered cake", price: "৳240" },
      { name: "Nutella Brownie", description: "Warm brownie topped with Nutella & ice cream", price: "৳350", tags: ["Best Seller"] },
      { name: "Tiramisu", description: "Classic Italian coffee-flavored layered dessert", price: "৳380" },
      { name: "Cheesecake", description: "Creamy New York-style cheesecake", price: "৳340" },
    ],
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
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

  const currentItems = menuCategories[activeCategory].items;

  return (
    <section id="menu" ref={ref} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coffee-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cream-200 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-coffee-500 uppercase tracking-wider">Our Menu</span>
            <div className="w-8 h-px bg-coffee-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-coffee-900 font-[var(--font-heading)]">
            Crafted With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-coffee-400">
              {" "}Passion
            </span>
          </h2>
          <p className="mt-4 text-coffee-600/60 text-lg">
            Every dish is prepared with fresh ingredients and served with love. Explore our
            diverse menu featuring Chinese, Asian, and international cuisines.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-gradient-to-r from-coffee-600 to-coffee-700 text-white shadow-lg shadow-coffee-600/25 scale-105"
                  : "bg-coffee-50 text-coffee-700 hover:bg-coffee-100"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentItems.map((item, i) => (
            <div
              key={item.name}
              className={`menu-card group p-5 rounded-2xl bg-cream-50 border border-coffee-100/50 hover:bg-white hover:shadow-xl hover:shadow-coffee-900/5 hover:border-coffee-200 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-coffee-900 group-hover:text-coffee-700 transition-colors">
                      {item.name}
                    </h3>
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${
                          tag === "Best Seller"
                            ? "bg-amber-100 text-amber-700"
                            : tag === "Popular"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-coffee-100 text-coffee-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-coffee-500/70 mt-1 leading-relaxed">{item.description}</p>
                </div>
                <div className="text-lg font-bold text-coffee-700 whitespace-nowrap bg-coffee-100/50 px-3 py-1 rounded-lg group-hover:bg-coffee-600 group-hover:text-white transition-all duration-300">
                  {item.price}
                </div>
              </div>
              {/* Dotted line */}
              <div className="mt-3 border-b border-dotted border-coffee-200/50" />
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coffee-50 text-coffee-600 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Prices are indicative. Please contact us for the latest menu &amp; prices.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
