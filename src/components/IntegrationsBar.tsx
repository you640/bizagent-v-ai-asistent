import { FileText, FileSpreadsheet, FileCode2, Landmark, Mail } from "lucide-react";

const exports = [
  { icon: FileText, label: "PDF faktúra" },
  { icon: FileSpreadsheet, label: "Excel / CSV" },
  { icon: FileCode2, label: "XML pre účtovníka" },
  { icon: Landmark, label: "Bankové výpisy" },
  { icon: Mail, label: "Odoslanie e-mailom" },
];

const IntegrationsBar = () => (
  <section aria-label="Exporty a integrácie" className="py-12 bg-background border-y border-border/60">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm text-muted-foreground mb-6">
        Vaše dáta patria vám — exportujte ich kedykoľvek
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {exports.map((e) => (
          <div
            key={e.label}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground"
          >
            <e.icon className="w-4 h-4 text-primary" />
            {e.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsBar;
