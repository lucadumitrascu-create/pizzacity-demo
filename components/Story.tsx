"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2003",
    title: "Die Eröffnung",
    text: "Ein kleines Lokal auf der Thaliastraße, eine große Mission: echte Pizza, faire Preise, für die Nachbarschaft. Kein Franchise — ein Familienbetrieb.",
  },
  {
    year: "2010",
    title: "Ottakring kennt uns",
    text: "Vom Geheimtipp zum festen Bestandteil des Bezirks. Stammgäste kennen wir beim Namen, Familien bestellen jede Woche.",
  },
  {
    year: "2018",
    title: "Drei Küchen, ein Dach",
    text: "Wir erweitern: neben italienischer Pizza jetzt auch amerikanische Burger und indische Spezialitäten. Weil echte Vielfalt besser schmeckt.",
  },
  {
    year: "Heute",
    title: "8 Bezirke, 7 Tage",
    text: "Jeden Tag liefern wir frisch und heiß in 8 Wiener Bezirke — und das Lokal auf der Thaliastraße ist nach wie vor unser Zuhause.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-caveat text-gold text-2xl mb-2">Unsere Geschichte</p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-texto tracking-wide leading-[1]">
            NICHT NUR EINE PIZZERIA.
            <br />
            <span className="text-tomato">EIN STÜCK OTTAKRING.</span>
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  {/* Dot on line */}
                  <div className="absolute left-6 md:left-1/2 top-1 w-3 h-3 rounded-full bg-tomato -translate-x-1.5 md:-translate-x-1.5 z-10 ring-4 ring-cream" />

                  {/* Content card — alternates sides on desktop */}
                  <div className={`pl-16 md:pl-0 md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}>
                    <span className="font-bebas text-5xl md:text-6xl text-gold/30 block leading-none mb-1">
                      {m.year}
                    </span>
                    <h3 className="font-bebas text-2xl text-texto tracking-wide mb-2">
                      {m.title}
                    </h3>
                    <p className="text-texto/60 leading-relaxed text-[15px]">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom quote — different from Il Rione's blockquote style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-charcoal rounded-2xl px-10 py-8 max-w-md">
            <p className="font-caveat text-2xl md:text-3xl text-cream leading-snug">
              &ldquo;Bei uns ist jeder Gast wie Familie.&rdquo;
            </p>
            <p className="text-cream/30 text-xs mt-3 uppercase tracking-widest">Pizzacity Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
