"use client";

import { motion } from "framer-motion";
import { Package, Pizza, CreditCard, Truck } from "lucide-react";

const steps = [
  { icon: Package, title: "PLZ wählen", desc: "Wählen Sie Ihren Bezirk" },
  { icon: Pizza, title: "Gericht auswählen", desc: "Italienisch, amerikanisch oder indisch" },
  { icon: CreditCard, title: "Online bezahlen", desc: "Bar, Karte oder online" },
  { icon: Truck, title: "Genießen", desc: "Schnell und heiß zu Ihnen" },
];

const bezirke = ["1070", "1080", "1090", "1140", "1150", "1160", "1170", "1180"];

export default function DeliveryZones() {
  return (
    <section id="lieferung" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A2420' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto tracking-wide mb-3">
            WIR LIEFERN BEI IHNEN
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {bezirke.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`font-bebas text-4xl md:text-5xl tracking-wider ${
                    b === "1160" ? "text-tomato" : "text-texto/70"
                  }`}
                >
                  {b}
                  {i < bezirke.length - 1 && (
                    <span className="text-gold/40 mx-1">·</span>
                  )}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-texto/50 text-sm">
              Lieferung täglich von 11:00 bis 23:00
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-bebas text-2xl text-texto tracking-wide mb-8">SO LÄUFT&apos;S AB</p>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-tomato/10 rounded-sm flex items-center justify-center">
                    <s.icon className="text-tomato" size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bebas text-gold text-lg">{i + 1}.</span>
                      <h3 className="font-semibold text-texto">{s.title}</h3>
                    </div>
                    <p className="text-texto/60 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
