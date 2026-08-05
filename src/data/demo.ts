export type DemoItem = {
  id: string;
  name: string;
  qty: number;
  price: number;
};

export type DemoClient = {
  id: string;
  name: string;
  ico: string;
  iban: string;
};

export const demoClients: DemoClient[] = [
  { id: "c1", name: "Tatra Design s.r.o.", ico: "51234567", iban: "SK31 1200 0000 1987 4263 7541" },
  { id: "c2", name: "Kaviareň Pod Lipou", ico: "47112233", iban: "SK89 0900 0000 0051 2345 6789" },
  { id: "c3", name: "Novak Consulting", ico: "52998877", iban: "SK12 1111 0000 0012 3456 7890" },
];

export const defaultItems: DemoItem[] = [
  { id: "i1", name: "Webdizajn — hlavná stránka", qty: 1, price: 850 },
  { id: "i2", name: "Konzultácie (hod.)", qty: 6, price: 45 },
];

export const itemCatalog = [
  { name: "Webdizajn — hlavná stránka", price: 850 },
  { name: "Konzultácie (hod.)", price: 45 },
  { name: "Údržba mesačne", price: 120 },
  { name: "Copywriting (normostrana)", price: 28 },
  { name: "Grafika — logo", price: 390 },
];

export const revenueSeries = [
  { month: "Jan", value: 4200 },
  { month: "Feb", value: 5100 },
  { month: "Mar", value: 4700 },
  { month: "Apr", value: 6400 },
  { month: "Máj", value: 7900 },
  { month: "Jún", value: 8600 },
  { month: "Júl", value: 12450 },
];

export const demoInvoices = [
  { id: "2026-089", client: "Tatra Design s.r.o.", amount: 1250, status: "paid" as const, due: "12.07." },
  { id: "2026-088", client: "Kaviareň Pod Lipou", amount: 480, status: "sent" as const, due: "22.07." },
  { id: "2026-087", client: "Novak Consulting", amount: 2100, status: "overdue" as const, due: "01.07." },
  { id: "2026-086", client: "Tatra Design s.r.o.", amount: 640, status: "paid" as const, due: "28.06." },
];

export const statusLabel: Record<string, string> = {
  paid: "Zaplatená",
  sent: "Odoslaná",
  overdue: "Po splatnosti",
};

export const demoReceipt = {
  merchant: "OMV Bratislava — Petržalka",
  date: "18.07.2026",
  total: 68.42,
  vat: 11.4,
  category: "Pohonné hmoty",
  deductible: true,
};

export const demoTaxes = {
  income: 48350,
  expensesFlat: 0.6,
  socialInsurance: 216.13,
  healthInsurance: 97.8,
};
