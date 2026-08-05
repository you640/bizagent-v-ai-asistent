import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const KEY = "bizagent-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Súhlas so súbormi cookie"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60] glass rounded-2xl p-5 shadow-lg"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold mb-1">Používame cookies</p>
          <p className="text-sm text-muted-foreground">
            Nevyhnutné cookies potrebujeme na fungovanie stránky. Analytické nám pomáhajú
            zlepšovať BizAgent. Viac v{" "}
            <Link to="/cookies" className="text-primary underline underline-offset-2">
              zásadách cookies
            </Link>
            .
          </p>
          <div className="flex gap-2 mt-4">
            <Button size="sm" onClick={() => decide("all")}>
              Prijať všetky
            </Button>
            <Button size="sm" variant="outline" onClick={() => decide("necessary")}>
              Len nevyhnutné
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
