import { useReducer } from "react";
import { defaultItems, demoClients, type DemoItem } from "@/data/demo";

export type DemoState = {
  clientId: string;
  items: DemoItem[];
  vatEnabled: boolean;
  note: string;
};

type Action =
  | { type: "setClient"; id: string }
  | { type: "addItem"; name: string; price: number }
  | { type: "removeItem"; id: string }
  | { type: "setQty"; id: string; qty: number }
  | { type: "setPrice"; id: string; price: number }
  | { type: "toggleVat" }
  | { type: "reset" };

const initialState: DemoState = {
  clientId: demoClients[0].id,
  items: defaultItems,
  vatEnabled: true,
  note: "Ďakujeme za spoluprácu.",
};

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case "setClient":
      return { ...state, clientId: action.id };
    case "addItem":
      return {
        ...state,
        items: [
          ...state.items,
          { id: `i${Date.now()}`, name: action.name, qty: 1, price: action.price },
        ],
      };
    case "removeItem":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "setQty":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: Math.max(1, Math.min(99, action.qty)) } : i,
        ),
      };
    case "setPrice":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, price: Math.max(0, action.price) } : i,
        ),
      };
    case "toggleVat":
      return { ...state, vatEnabled: !state.vatEnabled };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const formatEur = (value: number) =>
  new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR" }).format(value);

export function useDemoState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const client = demoClients.find((c) => c.id === state.clientId) ?? demoClients[0];
  const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const vat = state.vatEnabled ? subtotal * 0.23 : 0;
  const total = subtotal + vat;

  return { state, dispatch, client, subtotal, vat, total };
}
