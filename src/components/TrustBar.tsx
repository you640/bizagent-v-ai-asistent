import { ShieldCheck, FileCheck2, Headphones, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "GDPR compliant" },
  { icon: FileCheck2, label: "eIDAS podpis" },
  { icon: Headphones, label: "Slovenský support" },
  { icon: Sparkles, label: "14 dní zdarma" },
];

const TrustBar = () => {
  return (
    <section aria-label="Dôveryhodnosť" className="py-6 border-y border-border bg-secondary/40">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
          {items.map((it) => (
            <li key={it.label} className="flex items-center gap-2">
              <it.icon className="w-4 h-4 text-primary" />
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
