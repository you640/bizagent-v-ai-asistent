import { useState } from "react";
import { Calculator, Info } from "lucide-react";
import { demoTaxes } from "@/data/demo";
import { formatEur } from "@/hooks/useDemoState";

const DemoTaxes = () => {
  const [income, setIncome] = useState(demoTaxes.income);

  const flat = Math.min(income * demoTaxes.expensesFlat, 20000);
  const levies = (demoTaxes.socialInsurance + demoTaxes.healthInsurance) * 12;
  const base = Math.max(0, income - flat - levies);
  const tax = base * (base > 47537 ? 0.25 : 0.15);

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-4">
        <label htmlFor="demo-income" className="text-sm font-semibold flex items-center gap-2">
          <Calculator className="w-4 h-4 text-primary" /> Ročné príjmy
        </label>
        <input
          id="demo-income"
          type="range"
          min={5000}
          max={100000}
          step={500}
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full mt-3 accent-[hsl(var(--primary))]"
        />
        <p className="text-2xl font-bold text-primary mt-1">{formatEur(income)}</p>
      </div>

      <div className="glass rounded-xl p-4 space-y-2 text-sm">
        {[
          ["Paušálne výdavky (60 %, max 20 000 €)", -flat],
          ["Odvody (soc. + zdrav. / rok)", -levies],
          ["Základ dane", base],
          ["Daň z príjmu", -tax],
        ].map(([label, value]) => (
          <div key={label as string} className="flex justify-between gap-4">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-medium">{formatEur(value as number)}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 border-t border-border">
          <span className="font-semibold">Čistý zisk</span>
          <span className="text-xl font-bold text-success">{formatEur(income - flat - levies - tax)}</span>
        </div>
      </div>

      <p className="flex items-start gap-2 text-xs text-muted-foreground">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        Orientačný prepočet pre SZČO s paušálnymi výdavkami. V aplikácii počítame s reálnymi dátami a aktuálnymi sadzbami.
      </p>
    </div>
  );
};

export default DemoTaxes;
