# Dokončenie landing page bizagent.sk + živá ukážka appky

Cieľ: doladiť landing page do finálnej podoby a pridať interaktívnu "live demo" sekciu priamo na stránke, kde návštevník uvidí (a vyskúša) ako aplikácia reálne funguje — bez registrácie.

## 1. Živá ukážka appky (hlavná novinka)

Nová sekcia `#demo` medzi Features a Testimonials: rám prehliadača/telefónu, v ktorom beží skutočné mini-UI appky (nie obrázok, nie video).

Ľavý panel s krokmi (klikateľné taby), pravý panel s renderovanou obrazovkou:

```text
[ Prehľad ]  ->  KPI karty, graf príjmov, zoznam faktúr
[ Nová faktúra ] -> formulár: klient, položky, DPH, súčet naživo
[ QR platba ]  -> vygenerovaný EPC-QR kód z údajov faktúry
[ Sken bločku ] -> ukážka OCR: bloček -> kategória + suma
[ Prehľad daní ] -> mesačný/ročný súhrn, odvody
```

- Všetko beží na demo dátach v pamäti (žiadna DB, žiadne prihlásenie) — návštevník môže reálne meniť položky faktúry a vidieť, ako sa mení súčet a QR kód.
- Auto-play: sekcia sa sama prepína medzi krokmi, kým doň používateľ nezasiahne.
- Mobil: horizontálne swipovateľné taby, telefónny rám.
- CTA pod demom: "Vyskúšať naostro" -> /auth.

## 2. Dokončenie landing page

- **Hero**: nahradiť statickú mockup kartu odkazom na demo ("Pozrieť živú ukážku" scrolluje na `#demo`), pridať skutočný logo-lockup BizAgent.
- **Nová sekcia "Ako to funguje"**: 3 kroky (Zaregistruj sa -> Vystav faktúru -> Nechaj AI účtovať).
- **Nová sekcia "Pre koho"**: SZČO, remeselník, freelancer, malá s.r.o. — karty s konkrétnym prínosom.
- **Integrácie/Export**: pás s logami (banky, PDF, XML pre účtovníka, Excel).
- **Navbar**: doplniť odkaz "Ukážka" a "Ako to funguje", zvýrazniť aktívnu sekciu pri scrollovaní.
- **Footer**: reálne odkazy — Obchodné podmienky, Ochrana údajov, Cookies, Kontakt; adresa a IČO placeholder na doplnenie.
- **Právne stránky**: `/podmienky`, `/ochrana-udajov`, `/cookies` (jednoduchý text layout) + cookie lišta.
- **404**: prerobiť do brandu s návratom domov.

## 3. SEO a výkon pre bizagent.sk

- Title/description/canonical/OG na doménu `bizagent.sk`, `lang="sk"`.
- JSON-LD: `SoftwareApplication` + `FAQPage` (z existujúceho FAQ) + `Organization`.
- Sémantické `section` + jediné H1, alt texty, focus-visible štýly, kontrast v dark mode.
- Lazy-load ťažkých častí (demo sekcia až pri scrolle), redukcia animácií pri `prefers-reduced-motion`.

## 4. Technické detaily

- Nové komponenty: `LiveDemoSection.tsx` + `demo/` (DemoDashboard, DemoInvoiceForm, DemoQrPayment, DemoReceiptScan, DemoTaxes), `HowItWorks.tsx`, `ForWhomSection.tsx`, `IntegrationsBar.tsx`, `CookieBanner.tsx`.
- Demo stav cez lokálny `useReducer` v `useDemoState.ts`, dáta v `src/data/demo.ts`.
- QR kód: knižnica `qrcode.react`, payload podľa EPC/PAY by square formátu (vizuálna ukážka).
- Žiadne zásahy do backendu ani DB — demo je čisto frontend.
- Nové routy pre právne stránky v `App.tsx` nad catch-all.
- Všetky farby cez existujúce tokeny v `index.css`, žiadne hardcoded farby.

## 5. Poradie prác

1. Live demo sekcia (jadro požiadavky)
2. Nové obsahové sekcie + navbar/footer
3. Právne stránky + cookies + 404
4. SEO, a11y, výkon, finálna kontrola v prehliadači
