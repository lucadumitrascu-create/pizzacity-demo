export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Brand side */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-tomato flex items-center justify-center">
                <span className="font-bebas text-cream text-lg leading-none pt-0.5">PC</span>
              </div>
              <span className="font-bebas text-cream text-2xl tracking-wider">PIZZACITY</span>
            </div>
            <p className="text-cream/30 text-sm leading-relaxed">
              Echte Pizza, echte Burger, echte indische Küche — seit 2003 im
              Herzen Ottakrings.
            </p>
          </div>

          {/* Links + Contact side */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <h4 className="text-cream/50 text-xs font-bold uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Speisekarte", href: "https://pizzacity.at" },
                  { label: "Über uns", href: "#story" },
                  { label: "Liefergebiete", href: "#lieferung" },
                  { label: "Kontakt", href: "#kontakt" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-cream/30 hover:text-gold transition-colors text-sm"
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cream/50 text-xs font-bold uppercase tracking-widest mb-4">Kontakt</h4>
              <div className="text-cream/30 text-sm space-y-2">
                <p>Thaliastraße 40, 1160 Wien</p>
                <p>
                  <a href="tel:+4314053017" className="hover:text-gold transition-colors">01 / 405 30 17</a>
                </p>
                <p>
                  <a href="mailto:pizzacity@live.at" className="hover:text-gold transition-colors">pizzacity@live.at</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/5 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-cream/20 text-xs">
            © 2026 Pizzacity · Echte Pizza seit 2003
          </p>
          <p className="text-cream/15 text-xs">
            YÜRÜKCÜ e.U. · Wirtschaftskammer, Fachgruppe Gastronomie
          </p>
        </div>
      </div>
    </footer>
  );
}
