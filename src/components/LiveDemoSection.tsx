import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, FilePlus2, QrCode, ScanLine, PiggyBank, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDemoState } from "@/hooks/useDemoState";
import DemoDashboard from "@/components/demo/DemoDashboard";
import DemoInvoiceForm from "@/components/demo/DemoInvoiceForm";
import DemoQrPayment from "@/components/demo/DemoQrPayment";
import DemoReceiptScan from "@/components/demo/DemoReceiptScan";
import DemoTaxes from "@/components/demo/DemoTaxes";

const steps = [
  { id: "prehlad", label: "Prehľad", icon: LayoutDashboard, desc: "KPI, graf príjmov a stav faktúr na jednej obrazovke." },
  { id: "faktura", label: "Nová faktúra", icon: FilePlus2, desc: "Vyskladajte položky — súčet a DPH sa prepočítajú naživo." },
  { id: "qr", label: "QR platba", icon: QrCode, desc: "Z faktúry vznikne EPC-QR kód pre okamžitú úhradu." },
  { id: "blocek", label: "Sken bločku", icon: ScanLine, desc: "AI prečíta bloček a zaradí ho do správnej kategórie." },
  { id: "dane", label: "Prehľad daní", icon: PiggyBank, desc: "Odvody, základ dane a čistý zisk v reálnom čase." },
] as const;

const LiveDemoSection = () => {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const navigate = useNavigate();
  const demo = useDemoState();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (interacted || !inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 5000);
    return () => clearInterval(t);
  }, [interacted, inView]);

  const select = (i: number) => {
    setInteracted(true);
    setActive(i);
  };

  const screens = [
    <DemoDashboard />,
    <DemoInvoiceForm demo={demo} />,
    <DemoQrPayment demo={demo} />,
    <DemoReceiptScan />,
    <DemoTaxes />,
  ];

  return (
    <section id="demo" ref={sectionRef} className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Živá ukážka
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pozrite si, ako BizAgent{" "}
            <span className="text-gradient-primary">reálne funguje</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toto nie je video ani screenshot. Je to skutočná aplikácia na demo dátach —
            skúšajte bez registrácie.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8 items-start">
          {/* Steps */}
          <div
            className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x"
            role="tablist"
            aria-label="Kroky ukážky"
          >
            {steps.map((step, i) => (
              <button
                key={step.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => select(i)}
                className={`snap-start shrink-0 lg:shrink text-left rounded-2xl border px-4 py-3 transition-all duration-300 ${
                  active === i
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-background/50 hover:border-primary/40"
                }`}
              >
                <span className="flex items-center gap-2 font-semibold text-sm">
                  <step.icon className={`w-4 h-4 ${active === i ? "text-primary" : "text-muted-foreground"}`} />
                  {step.label}
                </span>
                <span className="hidden lg:block text-xs text-muted-foreground mt-1">{step.desc}</span>
              </button>
            ))}
          </div>

          {/* Browser frame */}
          <div className="dashboard-glass rounded-3xl p-3 md:p-4 shadow-xl">
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-warning/60" />
              <span className="w-3 h-3 rounded-full bg-success/60" />
              <div className="flex-1 mx-3 h-6 rounded-full bg-muted/60 flex items-center justify-center">
                <span className="text-[11px] text-muted-foreground">app.bizagent.sk/{steps[active].id}</span>
              </div>
            </div>

            <div className="rounded-2xl bg-background/70 p-4 min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[active].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {screens[active]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="accent-glow" size="xl" onClick={() => navigate("/auth")}>
            Vyskúšať naostro
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">14 dní zdarma · bez platobnej karty</p>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
