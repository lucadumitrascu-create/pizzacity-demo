export default function Footer() {
  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-bebas text-3xl text-cream tracking-wider mb-3">PIZZACITY</h3>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Echte Pizza, echte Burger, echte indische Küche — seit 2003 im
              Herzen Ottakrings. Drei Küchen, ein Zuhause.
            </p>
          </div>

          <div>
            <h4 className="text-cream/70 font-semibold text-sm tracking-wide uppercase mb-4">
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Speisekarte", href: "https://pizzacity.at" },
                { label: "Über uns", href: "#story" },
                { label: "Liefergebiete", href: "#lieferung" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-cream/40 hover:text-gold transition-colors text-sm"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream/70 font-semibold text-sm tracking-wide uppercase mb-4">
              Kontakt
            </h4>
            <div className="text-cream/40 text-sm space-y-2">
              <p>Thaliastraße 40, 1160 Wien</p>
              <p>
                <a href="tel:+4314053017" className="hover:text-gold transition-colors">
                  01 / 405 30 17
                </a>
              </p>
              <p>
                <a href="mailto:pizzacity@live.at" className="hover:text-gold transition-colors">
                  pizzacity@live.at
                </a>
              </p>
            </div>
            <div className="mt-6 text-cream/25 text-xs space-y-1">
              <p>YÜRÜKCÜ e.U.</p>
              <p>Wirtschaftskammer, Fachgruppe Gastronomie</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/25 text-sm">
            © 2026 Pizzacity · Echte Pizza seit 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
