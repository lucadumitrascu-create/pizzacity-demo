"use client";

import { motion } from "framer-motion";
import { MapPin, ShoppingBag, CreditCard, Bike } from "lucide-react";

const bezirke = [
  { plz: "1070", name: "Neubau" },
  { plz: "1080", name: "Josefstadt" },
  { plz: "1090", name: "Alsergrund" },
  { plz: "1140", name: "Penzing" },
  { plz: "1150", name: "Rudolfsheim" },
  { plz: "1160", name: "Ottakring", home: true },
  { plz: "1170", name: "Hernals" },
  { plz: "1180", name: "Währing" },
];

const steps = [
  { icon: MapPin, label: "Bezirk wählen" },
  { icon: ShoppingBag, label: "Bestellen" },
  { icon: CreditCard, label: "Bezahlen" },
  { icon: Bike, label: "Genießen" },
];

export default function DeliveryZones() {
  return (
    <section id="lieferung" className="py-24 md:py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-caveat text-gold text-2xl mb-2">Schnell & heiß</p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            WIR LIEFERN BEI IHNEN
          </h2>
        </motion.div>

        {/* Bezirke badges grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-16 max-w-3xl mx-auto">
          {bezirke.map((b, i) => (
            <motion.div
              key={b.plz}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative text-center py-5 px-3 rounded-xl border transition-colors ${
                b.home
                  ? "bg-tomato/15 border-tomato/40"
                  : "bg-cream/5 border-cream/10 hover:border-cream/20"
              }`}
            >
              {b.home && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-tomato text-cream text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Standort
                </span>
              )}
              <span className={`font-bebas text-3xl md:text-4xl block leading-none ${
                b.home ? "text-tomato" : "text-cream"
              }`}>
                {b.plz}
              </span>
              <span className="text-cream/40 text-xs mt-1 block">{b.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Horizontal steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0"
        >
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4 sm:gap-0">
              <div className="flex flex-col items-center gap-2 w-28">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <s.icon className="text-gold" size={22} />
                </div>
                <span className="text-cream/60 text-xs font-medium text-center">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block w-12 h-px bg-cream/10 mx-2" />
              )}
            </div>
          ))}
        </motion.div>

        <p className="text-center text-cream/30 text-sm mt-10">
          Lieferung täglich 11:00 – 23:00 · Bar, Karte oder online
        </p>
      </div>
    </section>
  );
}
