import { QRCodeSVG } from "qrcode.react";
import { Smartphone, ShieldCheck } from "lucide-react";
import { formatEur, type useDemoState } from "@/hooks/useDemoState";

type Props = { demo: ReturnType<typeof useDemoState> };

const DemoQrPayment = ({ demo }: Props) => {
  const { client, total } = demo;

  // Vizuálna ukážka EPC (SEPA Credit Transfer) payloadu
  const payload = [
    "BCD",
    "002",
    "1",
    "SCT",
    "",
    client.name,
    client.iban.replace(/\s/g, ""),
    `EUR${total.toFixed(2)}`,
    "",
    "FA2026-090",
    "Uhrada faktury 2026-090",
  ].join("\n");

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-6 flex flex-col items-center text-center">
        <div className="rounded-2xl bg-background p-4 shadow-lg">
          <QRCodeSVG value={payload} size={168} level="M" bgColor="transparent" fgColor="hsl(var(--foreground))" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Naskenujte v bankovej aplikácii</p>
        <p className="text-2xl font-bold text-primary">{formatEur(total)}</p>
      </div>

      <div className="glass rounded-xl p-4 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Príjemca</span>
          <span className="font-medium text-right">{client.name}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">IBAN</span>
          <span className="font-mono text-xs text-right">{client.iban}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Variabilný symbol</span>
          <span className="font-medium">2026090</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="glass rounded-xl p-3 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium">Podpora všetkých SK bánk</span>
        </div>
        <div className="glass rounded-xl p-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-success" />
          <span className="text-xs font-medium">EPC / SEPA štandard</span>
        </div>
      </div>
    </div>
  );
};

export default DemoQrPayment;
