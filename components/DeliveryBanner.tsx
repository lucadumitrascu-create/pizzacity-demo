"use client";

import { motion } from "framer-motion";

export default function DeliveryBanner() {
  return (
    <section className="relative bg-tomato overflow-hidden">
      {/* Angled top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-caveat text-cream/70 text-2xl mb-3">Noch Hunger?</p>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-cream tracking-wide mb-4 leading-[0.95]">
            WIR LIEFERN IN
            <br />
            8 BEZIRKE.
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-md mx-auto">
            Bestellen Sie jetzt — wir sind bis 23:00 für Sie da.
          </p>
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream text-tomato px-10 py-4 text-sm font-bold tracking-wide uppercase hover:bg-white transition-colors rounded-full shadow-lg"
          >
            Jetzt Bestellen
          </a>
        </motion.div>
      </div>

      {/* Angled bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-charcoal" style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}
