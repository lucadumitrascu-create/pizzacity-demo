"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "2003", label: "Gegründet" },
  { value: "8", label: "Lieferbezirke" },
  { value: "3", label: "Küchen" },
  { value: "22+", label: "Jahre Erfahrung" },
];

export default function Story() {
  return (
    <section id="story" className="bg-cream overflow-hidden">
      {/* Stats ribbon */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="font-bebas text-4xl md:text-5xl text-gold block">{s.value}</span>
              <span className="text-cream/40 text-xs uppercase tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story content — asymmetric: narrow text, wide image */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text — takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <p className="font-caveat text-gold text-2xl mb-3">Unsere Geschichte</p>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto tracking-wide leading-[1] mb-8">
              NICHT NUR EINE PIZZERIA.
              <br />
              <span className="text-tomato">EIN STÜCK OTTAKRING.</span>
            </h2>

            <div className="space-y-5 text-texto/70 leading-relaxed max-w-xl">
              <p>
                2003 haben wir auf der Thaliastraße aufgesperrt — mit einer einfachen
                Mission: echte Pizza, faire Preise, für die Nachbarschaft. Kein Franchise,
                kein Konzern, sondern ein Familienbetrieb mit Herz.
              </p>
              <p>
                Über 20 Jahre lang ist Pizzacity ein fester Teil von Ottakring geworden —
                vom schnellen Mittagsabholer bis zum gemütlichen Familienabendessen per
                Lieferung. Unsere Stammgäste kennen wir beim Namen.
              </p>
              <p>
                Heute servieren wir italienische Pizza, amerikanische Burger und indische
                Spezialitäten — alles frisch zubereitet, alles heiß geliefert. Drei Küchen
                unter einem Dach, weil echte Vielfalt besser schmeckt.
              </p>
            </div>

            <div className="mt-8 bg-charcoal/5 border-l-4 border-gold px-6 py-4 rounded-r-lg max-w-md">
              <p className="font-caveat text-2xl text-texto">
                &ldquo;Bei uns ist jeder Gast wie Familie.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Image — takes 2 cols, full-bleed feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                alt="Pizzacity Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Sticker overlay */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-28 md:h-28 bg-tomato rounded-full flex flex-col items-center justify-center text-cream shadow-xl rotate-6">
              <span className="font-caveat text-sm leading-none">Echt seit</span>
              <span className="font-bebas text-3xl md:text-4xl leading-none">2003</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
