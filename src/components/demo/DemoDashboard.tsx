import { TrendingUp, FileText, Clock, CheckCircle2 } from "lucide-react";
import { revenueSeries, demoInvoices, statusLabel } from "@/data/demo";
import { formatEur } from "@/hooks/useDemoState";

const max = Math.max(...revenueSeries.map((p) => p.value));
const points = revenueSeries
  .map((p, i) => `${(i / (revenueSeries.length - 1)) * 300},${100 - (p.value / max) * 85}`)
  .join(" ");

const statusClass: Record<string, string> = {
  paid: "bg-success/10 text-success",
  sent: "bg-primary/10 text-primary",
  overdue: "bg-destructive/10 text-destructive",
};

const DemoDashboard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: TrendingUp, label: "Príjmy (júl)", value: formatEur(12450), tone: "text-primary" },
          { icon: FileText, label: "Faktúry", value: "23", tone: "text-foreground" },
          { icon: Clock, label: "Čakajúce", value: formatEur(2580), tone: "text-accent" },
          { icon: CheckCircle2, label: "Zaplatené", value: "15", tone: "text-success" },
        ].map((kpi) => (
          <div key={kpi.label} className="glass rounded-xl p-3">
            <kpi.icon className={`w-4 h-4 mb-2 ${kpi.tone}`} />
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className={`text-lg font-bold ${kpi.tone}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold">Vývoj príjmov</p>
          <span className="text-xs text-success font-medium">+24 % m/m</span>
        </div>
        <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none" role="img" aria-label="Graf vývoja príjmov">
          <defs>
            <linearGradient id="demoChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,100 ${points} 300,100`} fill="url(#demoChart)" />
          <polyline
            points={points}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-1">
          {revenueSeries.map((p) => (
            <span key={p.month} className="text-[10px] text-muted-foreground">
              {p.month}
            </span>
          ))}
        </div>
      </div>

      <div className="glass rounded-xl p-4">
        <p className="text-sm font-semibold mb-3">Posledné faktúry</p>
        <ul className="divide-y divide-border/60">
          {demoInvoices.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between py-2 gap-2">
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{inv.client}</p>
                <p className="text-xs text-muted-foreground">
                  #{inv.id} · splatnosť {inv.due}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-semibold">{formatEur(inv.amount)}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusClass[inv.status]}`}>
                  {statusLabel[inv.status]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DemoDashboard;
