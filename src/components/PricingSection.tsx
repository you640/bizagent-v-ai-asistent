import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Štart",
    tagline: "Pre začínajúcich SZČO",
    monthly: 0,
    yearly: 0,
    features: ["Až 10 faktúr mesačne", "Základné šablóny PDF", "QR platby", "Email podpora"],
    cta: "Začať zadarmo",
  },
  {
    name: "Profi",
    tagline: "Najobľúbenejšia voľba",
    monthly: 9,
    yearly: 7,
    features: [
      "Neobmedzené faktúry",
      "AI kategorizácia výdavkov",
      "OCR skenovanie bločkov",
      "DPH priznanie automaticky",
      "Prioritný support",
    ],
    highlighted: true,
    cta: "Vyskúšať 14 dní zdarma",
  },
  {
    name: "Firma",
    tagline: "Pre malé tímy",
    monthly: 19,
    yearly: 15,
    features: [
      "Všetko z Profi",
      "Až 5 používateľov",
      "Export do Pohody / Omega",
      "Vlastný branding faktúr",
      "API prístup",
      "Dedikovaný account manager",
    ],
    cta: "Kontaktovať predaj",
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(true);
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Cenník
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transparentné ceny,{" "}
            <span className="text-gradient-primary">žiadne prekvapenia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Začnite zadarmo. Upgradnite, keď budete pripravení rásť.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>
            Mesačne
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly(!yearly)}
            className="relative w-14 h-7 rounded-full bg-primary/20 transition-colors"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary transition-transform ${
                yearly ? "translate-x-7" : ""
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
            Ročne <span className="text-accent">−20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-2xl scale-105 border-2 border-accent"
                    : "glass"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    NAJOBĽÚBENEJŠIE
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold">€{price}</span>
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      / mesiac
                    </span>
                  </div>
                  {yearly && plan.monthly > 0 && (
                    <p className={`text-xs mt-1 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      účtované ročne (€{plan.yearly * 12})
                    </p>
                  )}
                </div>

                <Button
                  variant={plan.highlighted ? "accent-glow" : "primary-glow"}
                  size="lg"
                  className="w-full mb-8"
                  onClick={() => navigate("/auth")}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
