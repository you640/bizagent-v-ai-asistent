import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0 pointer-events-none"
      }`}
    >
      <div className="glass rounded-2xl p-3 shadow-xl flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold leading-tight">14 dní zdarma</p>
          <p className="text-[11px] text-muted-foreground leading-tight">Bez platobnej karty</p>
        </div>
        <Button
          variant="accent-glow"
          size="default"
          onClick={() => navigate("/auth")}
          className="shrink-0"
        >
          Začať
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
