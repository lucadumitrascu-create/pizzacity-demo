"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "italian",
    flag: "🇮🇹",
    tab: "Italienisch",
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    desc: "Klassische Pizza aus dem Ofen, frische Pasta, echte italienische Tradition.",
    items: [
      { name: "Margherita", price: "€8,50", tag: "Klassiker" },
      { name: "Salami", price: "€9,50", tag: null },
      { name: "Prosciutto", price: "€10,50", tag: null },
      { name: "Quattro Stagioni", price: "€11,00", tag: "Beliebt" },
    ],
  },
  {
    id: "american",
    flag: "🇺🇸",
    tab: "Amerikanisch",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    desc: "Saftige Burger, knusprige Pommes, amerikanische Klassiker.",
    items: [
      { name: "Classic Burger", price: "€9,50", tag: null },
      { name: "Cheeseburger", price: "€10,00", tag: "Beliebt" },
      { name: "BBQ Burger", price: "€11,50", tag: null },
      { name: "Chicken Burger", price: "€10,50", tag: null },
    ],
  },
  {
    id: "indian",
    flag: "🇮🇳",
    tab: "Indisch",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    desc: "Aromatische Currys, frisches Naan, authentische indische Spezialitäten.",
    items: [
      { name: "Chicken Tikka Masala", price: "€11,50", tag: "Beliebt" },
      { name: "Butter Chicken", price: "€11,50", tag: null },
      { name: "Lamb Curry", price: "€12,50", tag: "Premium" },
      { name: "Vegetable Biryani", price: "€10,50", tag: null },
    ],
  },
];

export default function MenuHighlights() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-caveat text-gold text-2xl mb-2">Drei Küchen, ein Ort</p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto tracking-wide">
            UNSERE SPEZIALITÄTEN
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-charcoal/5 rounded-full p-1.5 gap-1">
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`px-5 md:px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  active === i
                    ? "bg-tomato text-cream shadow-lg"
                    : "text-texto/60 hover:text-texto"
                }`}
              >
                <span className="mr-1.5">{c.flag}</span>
                {c.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10">
              <Image
                src={cat.img}
                alt={cat.tab}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Items list */}
            <div>
              <p className="text-texto/50 text-sm mb-8 max-w-sm leading-relaxed">{cat.desc}</p>
              <div className="space-y-0">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between py-4 border-b border-charcoal/5 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-texto group-hover:text-tomato transition-colors font-medium">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          item.tag === "Beliebt"
                            ? "bg-gold/15 text-gold"
                            : item.tag === "Klassiker"
                              ? "bg-green/15 text-green"
                              : "bg-tomato/10 text-tomato"
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="font-bebas text-xl text-texto/80">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-texto/30 text-[11px] mt-4">* ca.-Preise für die Demo</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-14">
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-cream px-8 py-4 text-sm font-bold tracking-wide uppercase hover:bg-texto transition-colors rounded-full"
          >
            Komplette Speisekarte ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
