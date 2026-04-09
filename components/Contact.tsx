"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="relative">
      {/* Full-width map background */}
      <div className="h-[300px] md:h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0!2d16.3290!3d48.2105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGhhbGlhc3RyYcOfZSA0MCwgMTE2MCBXaWVu!5e0!3m2!1sde!2sat!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pizzacity Standort"
        />
      </div>

      {/* Floating contact card */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative -mt-24 md:-mt-32 bg-charcoal rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto"
        >
          <h2 className="font-bebas text-3xl md:text-4xl text-cream tracking-wide mb-8 text-center">
            BESUCHEN SIE UNS
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-tomato mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-cream font-semibold text-sm">Adresse</p>
                <p className="text-cream/50 text-sm">Thaliastraße 40</p>
                <p className="text-cream/50 text-sm">1160 Wien · Ottakring</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-tomato mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-cream font-semibold text-sm">Telefon</p>
                <a
                  href="tel:+4314053017"
                  className="text-cream text-xl font-bold hover:text-gold transition-colors tabular-nums"
                >
                  01 / 405 30 17
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-tomato mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-cream font-semibold text-sm">Öffnungszeiten</p>
                <p className="text-cream/50 text-sm">Mo–So + Feiertag</p>
                <p className="text-cream/50 text-sm">09:00 – 23:00</p>
                <p className="text-cream/50 text-sm mt-1">Lieferung: 11:00 – 23:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-tomato mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-cream font-semibold text-sm">Kontakt</p>
                <a href="mailto:pizzacity@live.at" className="text-cream/50 hover:text-gold transition-colors text-sm block">
                  pizzacity@live.at
                </a>
                <a
                  href="https://www.instagram.com/pizzcitywien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cream/50 hover:text-gold transition-colors text-sm mt-1"
                >
                  <InstagramIcon size={14} />
                  @pizzcitywien
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://pizzacity.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tomato text-cream px-8 py-3.5 text-sm font-bold tracking-wide uppercase hover:bg-red-600 transition-colors rounded-full"
            >
              Jetzt online bestellen
            </a>
          </div>
        </motion.div>
      </div>

      {/* Spacer for card overflow */}
      <div className="h-20 bg-cream" />
    </section>
  );
}
