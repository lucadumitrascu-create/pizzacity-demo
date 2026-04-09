"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

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
    <>
      {/* Desktop top bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-charcoal shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tomato flex items-center justify-center">
              <span className="font-bebas text-cream text-lg leading-none pt-0.5">PC</span>
            </div>
            <div className="leading-none hidden sm:block">
              <span className="font-bebas text-cream text-xl tracking-wider block">PIZZACITY</span>
              <span className="text-cream/40 text-[9px] tracking-[0.3em] uppercase block">Ottakring · seit 2003</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/60 hover:text-cream px-4 py-2 text-[13px] tracking-wide uppercase font-medium transition-colors rounded-full hover:bg-cream/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://pizzacity.at"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-tomato text-cream px-6 py-2.5 text-[13px] font-bold tracking-wide uppercase hover:bg-red-600 transition-colors rounded-full"
            >
              Bestellen
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="tel:+4314053017" className="text-cream/60 hover:text-gold transition-colors">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="text-cream w-10 h-10 flex items-center justify-center"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-2 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-bebas text-4xl text-cream tracking-wider hover:text-gold transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="https://pizzacity.at"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 bg-tomato text-cream px-8 py-3 font-bebas text-2xl tracking-wider rounded-full"
            >
              JETZT BESTELLEN
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
