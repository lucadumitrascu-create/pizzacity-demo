"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002", alt: "Pizza frisch aus dem Ofen" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349", alt: "Saftiger Cheeseburger" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe", alt: "Indisches Curry" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", alt: "Restaurant Innenraum" },
  { src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212", alt: "Pizza Marinara" },
  { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b", alt: "Chicken Tikka" },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="font-caveat text-gold text-xl mb-1">Eindrücke</p>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-texto tracking-wide">
              EIN BLICK HINTER DIE KULISSEN
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-shrink-0 w-72 md:w-96 snap-center group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="384px"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-6 w-12 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-6 w-12 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
