"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto tracking-wide">
            BESUCHEN SIE UNS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-tomato mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Adresse</p>
                <p className="text-texto/70">Thaliastraße 40</p>
                <p className="text-texto/70">1160 Wien · Ottakring</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-tomato mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Telefon</p>
                <a
                  href="tel:+4314053017"
                  className="text-2xl font-inter font-bold text-texto hover:text-tomato transition-colors tabular-nums"
                >
                  01 / 405 30 17
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-tomato mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">E-Mail</p>
                <a
                  href="mailto:pizzacity@live.at"
                  className="text-texto/70 hover:text-tomato transition-colors"
                >
                  pizzacity@live.at
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-tomato mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Öffnungszeiten</p>
                <p className="text-texto/70">Mo – So + Feiertag · 09:00 – 23:00</p>
                <p className="font-semibold text-texto mt-3">Lieferzeiten</p>
                <p className="text-texto/70">11:00 – 23:00</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.instagram.com/pizzcitywien/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-texto/60 hover:text-tomato transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
                <span className="text-sm">@pizzcitywien</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] md:h-full min-h-[350px] rounded-sm overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0!2d16.3290!3d48.2105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGhhbGlhc3RyYcOfZSA0MCwgMTE2MCBXaWVu!5e0!3m2!1sde!2sat!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pizzacity Standort auf Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
