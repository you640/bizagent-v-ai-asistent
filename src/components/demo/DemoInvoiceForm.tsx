import { Plus, Trash2, RotateCcw } from "lucide-react";
import { demoClients, itemCatalog } from "@/data/demo";
import { formatEur, type useDemoState } from "@/hooks/useDemoState";

type Props = { demo: ReturnType<typeof useDemoState> };

const DemoInvoiceForm = ({ demo }: Props) => {
  const { state, dispatch, subtotal, vat, total } = demo;

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <label htmlFor="demo-client" className="text-sm font-semibold">
            Odberateľ
          </label>
          <button
            type="button"
            onClick={() => dispatch({ type: "reset" })}
            className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>
        <select
          id="demo-client"
          value={state.clientId}
          onChange={(e) => dispatch({ type: "setClient", id: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
        >
          {demoClients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} · IČO {c.ico}
            </option>
          ))}
        </select>
      </div>

      <div className="glass rounded-xl p-4">
        <p className="text-sm font-semibold mb-3">Položky faktúry</p>
        <ul className="space-y-2">
          {state.items.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="flex-1 text-sm truncate">{item.name}</span>
              <input
                type="number"
                min={1}
                max={99}
                value={item.qty}
                aria-label={`Množstvo — ${item.name}`}
                onChange={(e) => dispatch({ type: "setQty", id: item.id, qty: Number(e.target.value) })}
                className="w-14 rounded-md border border-border bg-background px-2 py-1 text-sm text-right"
              />
              <input
                type="number"
                min={0}
                value={item.price}
                aria-label={`Cena — ${item.name}`}
                onChange={(e) => dispatch({ type: "setPrice", id: item.id, price: Number(e.target.value) })}
                className="w-20 rounded-md border border-border bg-background px-2 py-1 text-sm text-right"
              />
              <button
                type="button"
                onClick={() => dispatch({ type: "removeItem", id: item.id })}
                aria-label={`Odstrániť ${item.name}`}
                className="p-1 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {itemCatalog.slice(0, 3).map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => dispatch({ type: "addItem", name: c.name, price: c.price })}
              className="inline-flex items-center gap-1 text-xs rounded-full border border-border px-3 py-1 hover:border-primary hover:text-primary transition-colors"
            >
              <Plus className="w-3 h-3" /> {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Základ</span>
          <span className="font-medium">{formatEur(subtotal)}</span>
        </div>
        <label className="flex justify-between items-center text-sm cursor-pointer">
          <span className="text-muted-foreground">DPH 23 %</span>
          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={state.vatEnabled}
              onChange={() => dispatch({ type: "toggleVat" })}
              className="accent-[hsl(var(--primary))]"
            />
            <span className="font-medium">{formatEur(vat)}</span>
          </span>
        </label>
        <div className="flex justify-between pt-2 border-t border-border">
          <span className="font-semibold">Spolu na úhradu</span>
          <span className="text-xl font-bold text-primary">{formatEur(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default DemoInvoiceForm;
