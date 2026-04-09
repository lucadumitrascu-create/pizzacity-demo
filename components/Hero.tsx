"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        alt="Frische Pizza aus dem Ofen"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-caveat text-gold text-2xl md:text-3xl mb-4"
        >
          Seit 2003
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bebas text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] mb-6 tracking-wide"
        >
          ECHTE PIZZA.
          <br />
          ECHTE QUALITÄT.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Im Herzen Ottakrings, seit über 20 Jahren. Abholung, Lieferung, oder vor Ort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tomato text-cream px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-tomato/90 transition-colors rounded-sm"
          >
            Jetzt Bestellen
          </a>
          <a
            href="#menu"
            className="border border-cream/40 text-cream px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-cream/10 transition-colors rounded-sm"
          >
            Speisekarte
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 text-cream/60 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="text-gold">★</span> Seit 2003
          </span>
          <span className="hidden sm:inline text-cream/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-gold">🚚</span> 8 Bezirke
          </span>
          <span className="hidden sm:inline text-cream/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-gold">⏰</span> bis 23:00
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#story" aria-label="Nach unten scrollen">
          <ChevronDown className="text-cream/50 animate-bounce" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
