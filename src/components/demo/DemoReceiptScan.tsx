import { useState } from "react";
import { motion } from "framer-motion";
import { ScanLine, Sparkles, Check } from "lucide-react";
import { demoReceipt } from "@/data/demo";
import { formatEur } from "@/hooks/useDemoState";

const DemoReceiptScan = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-4">
        <div className="relative mx-auto w-48 rounded-lg bg-muted/60 p-4 font-mono text-[10px] leading-relaxed text-muted-foreground overflow-hidden">
          <p className="font-bold text-foreground">{demoReceipt.merchant}</p>
          <p>IČ DPH: SK2020845738</p>
          <p className="mt-2">Nafta 41.02 l</p>
          <p>Káva 1x</p>
          <p className="mt-2 border-t border-border pt-1 text-foreground font-bold">
            SPOLU {demoReceipt.total.toFixed(2)} €
          </p>
          <p>DPH 23% {demoReceipt.vat.toFixed(2)} €</p>
          <p>{demoReceipt.date}</p>
          {!scanned && (
            <motion.div
              aria-hidden
              animate={{ y: ["-100%", "600%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            />
          )}
        </div>

        <button
          type="button"
          onClick={() => setScanned((s) => !s)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <ScanLine className="w-4 h-4" />
          {scanned ? "Skenovať znova" : "Naskenovať bloček"}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: scanned ? 1 : 0.35, y: scanned ? 0 : 8 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-xl p-4 space-y-2"
      >
        <p className="text-sm font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" /> AI vyhodnotenie
        </p>
        {[
          ["Dodávateľ", demoReceipt.merchant],
          ["Dátum", demoReceipt.date],
          ["Suma s DPH", formatEur(demoReceipt.total)],
          ["Odpočet DPH", formatEur(demoReceipt.vat)],
          ["Kategória", demoReceipt.category],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 text-sm">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-medium text-right">{v}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-2 border-t border-border text-sm text-success font-medium">
          <Check className="w-4 h-4" /> Zaúčtované ako daňový výdavok
        </div>
      </motion.div>
    </div>
  );
};

export default DemoReceiptScan;
