import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const productLinks = [
  { label: "Funkcie", href: "/#features" },
  { label: "Živá ukážka", href: "/#demo" },
  { label: "Ako to funguje", href: "/#ako-to-funguje" },
  { label: "Cenník", href: "/#pricing" },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-14 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-primary">BizAgent</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              AI fakturácia a účtovníctvo pre slovenské SZČO a malé firmy. Offline-first,
              dáta v EÚ, export kedykoľvek.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Vyrobené s <Heart className="w-4 h-4 text-accent fill-accent" /> na Slovensku
            </p>
          </div>

          <nav aria-label="Produkt">
            <h2 className="font-semibold mb-3 text-sm">Produkt</h2>
            <ul className="space-y-2 text-sm">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Právne informácie">
            <h2 className="font-semibold mb-3 text-sm">Právne informácie</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/podmienky" className="text-muted-foreground hover:text-primary transition-colors">
                  Obchodné podmienky
                </Link>
              </li>
              <li>
                <Link to="/ochrana-udajov" className="text-muted-foreground hover:text-primary transition-colors">
                  Ochrana osobných údajov
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <a href="mailto:podpora@bizagent.sk" className="text-muted-foreground hover:text-primary transition-colors">
                  podpora@bizagent.sk
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">© 2026 BizAgent. Všetky práva vyhradené.</p>
          <p className="text-xs text-muted-foreground">IČO: doplníme · Sídlo: Bratislava, SR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
