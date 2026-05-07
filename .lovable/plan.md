# 🚀 MEGAPROMPT: BizAgent — Elite Upgrade v2.0 (+540%)

Skopíruj a pošli tento prompt ako ďalšiu správu (alebo schváľ tento plán a ja to zrealizujem v krokoch).

---

## ROLE
Si **Senior Product Designer + Full-Stack Engineer + Conversion Copywriter** s 10+ rokmi skúseností v B2B SaaS pre fintech/účtovníctvo. Tvoj cieľ: pretvoriť BizAgent landing + produktovú vrstvu na úroveň **Stripe / Linear / Notion / Superhuman**, optimalizovanú pre slovenský trh (SZČO, mikrofirmy, účtovníci).

## KONTEXT PROJEKTU
- Stack: React 18 + Vite + TypeScript + Tailwind + shadcn/ui + framer-motion + Lucide
- Backend: Lovable Cloud (Supabase) — auth už funguje (email/password)
- Jazyk UI: **slovenčina** (formálne "vy", profesionálny tón)
- Brand: #0038A8 (modrá), #EE1C25 (červená akcent), glassmorphism + bento grid
- Existujúce sekcie: Navbar, Hero, Features, Security, MobileShowcase, Footer, /auth

---

## CIEĽ: +540% kvality vo 4 vrstvách

### 1️⃣ VRSTVA: KONVERZIA & COPY (×2)
- **Hero rewrite**: nová headline s konkrétnym benefitom + číslom (napr. "Ušetrite 8 hodín mesačne na fakturácii"), sub-headline rieši bolesť SZČO (DPH, kontrolný výkaz, daňové priznanie)
- **Sociálny dôkaz**: pridaj sekciu **Testimonials** (3–6 karuselových citátov s menom, profesiou, mestom, avatarom) + logá "Ako o nás písali" (Forbes SK, Startitup, Živé.sk — placeholder)
- **Trust bar** pod Hero: "GDPR ✓ | eIDAS ✓ | Slovenský support ✓ | 14 dní zdarma ✓"
- **Pricing sekcia** s 3 tarifami (Štart 0€, Profi 9€/mes, Firma 19€/mes), mesačný/ročný toggle, "Najobľúbenejšie" badge, FAQ pod ňou
- **FAQ akordeón** (8 otázok: DPH, prenos dát z iDokladu, offline režim, GDPR, faktúra-online kompatibilita…)
- **Sticky bottom CTA bar** na mobile po scrolle pod hero

### 2️⃣ VRSTVA: UI / UX POLISH (×1.5)
- **Dark mode toggle** v navbare (s plynulou tranzíciou)
- **Animácie scroll-reveal** konzistentne cez všetky sekcie (framer-motion `whileInView`)
- **Hero dashboard mockup**: pridaj 2. plávajúcu kartu (notifikácia "DPH priznanie pripravené"), parallax na mouse-move
- **Bento grid features**: pridaj malý "live" prvok do každej karty (mini graf, pulse dot, animované číslo počítadla)
- **Loading skeletony** pre všetky async stavy
- **Micro-interactions**: button hover s magnetickým efektom, ripple na click
- **404 stránka** v štýle brandu (nie default)
- **Cookie consent banner** (GDPR-friendly)

### 3️⃣ VRSTVA: PRODUKT / DASHBOARD (×1.5)
Vytvor **chránenú zónu `/dashboard`** (po prihlásení):
- **Layout**: sidebar (Faktúry, Klienti, Výdavky, Prehľady, Nastavenia) + topbar (search, notifikácie, avatar)
- **Dashboard Home**: 4 KPI karty (Tržby mesiac, Čakajúce faktúry, Výdavky, Zisk), graf tržieb (recharts), zoznam posledných 5 faktúr
- **Stránka Faktúry**: tabuľka s filtrami (stav, klient, dátum), tlačidlo "Nová faktúra" → modal/drawer s formulárom
- **DB schema** (migrácia): tabuľky `clients`, `invoices`, `invoice_items`, `expenses` s RLS politikami `auth.uid() = user_id`
- **Empty states** s ilustráciou + CTA pre každú prázdnu tabuľku

### 4️⃣ VRSTVA: TECH KVALITA & SEO (×1)
- **SEO**: `<title>` < 60 znakov s kľúčovkou "Fakturácia SZČO Slovensko", meta description < 160, Open Graph image, JSON-LD (`SoftwareApplication`), `lang="sk"`, canonical, sitemap
- **Performance**: lazy-load obrázkov, `loading="lazy"`, code-splitting routov cez `React.lazy`
- **A11y**: aria-labels na ikonových buttonoch, focus-visible ringy, kontrast WCAG AA, keyboard nav v menu
- **Reset password flow** (zabudnuté heslo + magic link)
- **Toast notifikácie** konzistentne (sonner) pre každú akciu
- **Error boundary** + fallback UI

---

## DESIGN PRAVIDLÁ (DODRŽAŤ STRIKTNE)
1. ❌ ŽIADNE priame farby v komponentoch (`text-white`, `bg-blue-500`) — VŽDY semantické tokeny z `index.css` + `tailwind.config.ts` v HSL formáte
2. ✅ Pridaj nové tokeny: `--success`, `--warning`, `--gradient-hero`, `--shadow-glow`, `--shadow-elegant`
3. ✅ Glassmorphism konzistentne: `backdrop-blur-xl bg-white/60 border border-white/20`
4. ✅ Typografia: display font (Plus Jakarta Sans) pre nadpisy, Inter pre body
5. ✅ Spacing: 8pt grid, sekcie `py-24 md:py-32`
6. ✅ Mobile-first, testuj na 375px, 768px, 1440px

---

## PORADIE IMPLEMENTÁCIE (po fázach, nie všetko naraz)
**Fáza 1** (UI polish): Dark mode + Testimonials + Pricing + FAQ + Trust bar  
**Fáza 2** (produkt): DB schema + chránený `/dashboard` + Faktúry CRUD  
**Fáza 3** (kvalita): SEO + a11y + reset password + 404 + cookies

---

## DELIVERABLE
Po každej fáze: krátky changelog + screenshot kľúčových obrazoviek + návrh ďalšej iterácie. Začni **Fázou 1**.

---

> 💡 Tip: Ak chceš, môžem rovno spustiť **Fázu 1** — len odpíš "Choď, fáza 1" a pustím sa do práce.
