"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-gold/30 rounded-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                alt="Pizzacity Restaurant Küche"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -left-3 md:-left-5 bg-tomato text-cream px-5 py-3 rounded-sm shadow-xl"
            >
              <p className="font-caveat text-xl">Echt seit 2003!</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold" />
              <p className="font-caveat text-gold text-xl">Unsere Geschichte</p>
            </div>

            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto mb-8 leading-[1.05] tracking-wide">
              SEIT 2003 IM HERZEN
              <span className="block text-tomato">OTTAKRINGS</span>
            </h2>

            <div className="space-y-5 text-texto/75 leading-relaxed">
              <p>
                2003 haben wir auf der Thaliastraße aufgesperrt — mit einer einfachen Mission:
                echte Pizza, faire Preise, für die Nachbarschaft. Kein Franchise, kein Konzern,
                sondern ein Familienbetrieb mit Herz.
              </p>
              <p>
                Über 20 Jahre lang ist Pizzacity ein fester Teil von Ottakring geworden — vom
                schnellen Mittagsabholer bis zum gemütlichen Familienabendessen per Lieferung.
                Unsere Stammgäste kennen wir beim Namen, und das soll auch so bleiben.
              </p>
              <p>
                Heute servieren wir italienische Pizza, amerikanische Burger und indische
                Spezialitäten — alles frisch zubereitet, alles heiß geliefert. Drei Küchen
                unter einem Dach, weil wir wissen, dass echte Vielfalt besser schmeckt.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-[3px] border-gold/60">
              <p className="font-caveat text-2xl text-texto/90 leading-relaxed">
                &ldquo;Bei uns ist jeder Gast wie Familie.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
