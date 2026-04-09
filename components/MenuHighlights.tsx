"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    flag: "🇮🇹",
    title: "Italienisch",
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    desc: "Klassische Pizza aus dem Ofen, frische Pasta, echte italienische Tradition",
    items: [
      { name: "Margherita", price: "€8,50" },
      { name: "Salami", price: "€9,50" },
      { name: "Prosciutto", price: "€10,50" },
      { name: "Quattro Stagioni", price: "€11,00" },
    ],
  },
  {
    flag: "🇺🇸",
    title: "Amerikanisch",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    desc: "Saftige Burger, knusprige Pommes, amerikanische Klassiker",
    items: [
      { name: "Classic Burger", price: "€9,50" },
      { name: "Cheeseburger", price: "€10,00" },
      { name: "BBQ Burger", price: "€11,50" },
      { name: "Chicken Burger", price: "€10,50" },
    ],
  },
  {
    flag: "🇮🇳",
    title: "Indisch",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    desc: "Aromatische Currys, frisches Naan, authentische indische Spezialitäten",
    items: [
      { name: "Chicken Tikka Masala", price: "€11,50" },
      { name: "Butter Chicken", price: "€11,50" },
      { name: "Lamb Curry", price: "€12,50" },
      { name: "Vegetable Biryani", price: "€10,50" },
    ],
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-3">
            UNSERE SPEZIALITÄTEN
          </h2>
          <p className="font-caveat text-gold text-2xl">Drei Küchen, ein Ort</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-texto/30 rounded-sm overflow-hidden border border-cream/5 hover:border-gold/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-bebas text-3xl text-cream tracking-wide">
                    {cat.flag} {cat.title}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-cream/50 text-sm mb-5 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-baseline">
                      <span className="text-cream/80 text-sm">{item.name}</span>
                      <span className="text-gold font-semibold text-sm ml-2">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-cream/30 text-xs mb-4">* Preise sind ca.-Angaben für die Demo</p>
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-tomato text-tomato px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-tomato hover:text-cream transition-colors rounded-sm"
          >
            Komplette Speisekarte ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
