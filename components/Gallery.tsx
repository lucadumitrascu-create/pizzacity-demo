"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    alt: "Pizza frisch aus dem Ofen",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    alt: "Saftiger Cheeseburger mit Pommes",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    alt: "Indisches Curry mit Naan",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "Restaurant Innenraum",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
    alt: "Pizza Marinara",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
    alt: "Chicken Tikka Masala",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            EIN BLICK IN UNSER RESTAURANT
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-sm"
            >
              <div className={`relative ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
