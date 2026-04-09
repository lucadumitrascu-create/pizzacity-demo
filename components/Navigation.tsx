"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menü", href: "#menu" },
  { label: "Über uns", href: "#story" },
  { label: "Lieferung", href: "#lieferung" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-bebas text-3xl text-cream tracking-wider">PIZZACITY</span>
          <span className="text-cream/50 text-[10px] tracking-[0.25em] uppercase">1160 Wien</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/70 hover:text-gold transition-colors text-sm tracking-wide uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tomato text-cream px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-tomato/90 transition-colors rounded-sm"
          >
            Jetzt Bestellen
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal/95 backdrop-blur-md px-6 pb-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-cream/70 hover:text-gold transition-colors text-sm tracking-wide uppercase border-b border-cream/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://pizzacity.at"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-tomato text-cream px-6 py-3 text-sm font-semibold tracking-wide uppercase text-center hover:bg-tomato/90 transition-colors rounded-sm"
          >
            Jetzt Bestellen
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
