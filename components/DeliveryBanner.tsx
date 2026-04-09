"use client";

import { motion } from "framer-motion";

export default function DeliveryBanner() {
  return (
    <section className="bg-tomato py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-4">
            HUNGRIG? WIR LIEFERN IN 8 BEZIRKE.
          </h2>
          <p className="text-cream/80 text-lg mb-8">
            Bestellen Sie jetzt — wir sind bis 23:00 für Sie da.
          </p>
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream text-tomato px-8 py-4 text-sm font-bold tracking-wide uppercase hover:bg-white transition-colors rounded-sm"
          >
            Jetzt Bestellen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
