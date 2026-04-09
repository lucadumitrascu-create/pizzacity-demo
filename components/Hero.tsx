"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden">
      {/* Split layout: text left, image right */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 w-fit mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-caveat text-gold text-lg">Seit 2003 in Ottakring</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-bebas text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] text-cream tracking-wide mb-6"
          >
            ECHTE
            <br />
            PIZZA.
            <br />
            <span className="text-tomato">ECHTE</span>
            <br />
            <span className="text-tomato">QUALITÄT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-cream/50 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          >
            Pizza, Burger & indische Spezialitäten — frisch zubereitet und heiß
            geliefert in 8 Wiener Bezirke.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="https://pizzacity.at"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tomato text-cream px-8 py-4 text-sm font-bold tracking-wide uppercase hover:bg-red-600 transition-colors rounded-full"
            >
              Jetzt Bestellen
            </a>
            <a
              href="#menu"
              className="border border-cream/20 text-cream/70 px-8 py-4 text-sm font-bold tracking-wide uppercase hover:border-cream/40 hover:text-cream transition-colors rounded-full"
            >
              Speisekarte
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { num: "22+", label: "Jahre" },
              { num: "8", label: "Bezirke" },
              { num: "3", label: "Küchen" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-bebas text-gold text-3xl">{s.num}</span>
                <span className="text-cream/40 text-xs uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image with overlay */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Frische Pizza aus dem Ofen"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />

          {/* Floating badge on image */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -3 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-12 right-12 bg-gold text-charcoal px-6 py-4 rounded-sm shadow-2xl -rotate-3"
          >
            <p className="font-caveat text-2xl leading-tight">Lieferung bis</p>
            <p className="font-bebas text-4xl leading-none">23:00</p>
          </motion.div>
        </div>

        {/* Mobile: background image */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Frische Pizza aus dem Ofen"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
