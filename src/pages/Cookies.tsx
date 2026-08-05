import LegalLayout from "@/components/LegalLayout";

const Cookies = () => (
  <LegalLayout title="Zásady používania cookies" updated="1. 8. 2026">
    <p>
      Cookies sú malé súbory, ktoré si stránka ukladá vo vašom prehliadači. Používame ich
      v nevyhnutnom rozsahu a na anonymnú analytiku.
    </p>

    <h2>Nevyhnutné cookies</h2>
    <p>
      Zabezpečujú prihlásenie, bezpečnosť a základné fungovanie stránky. Bez nich služba
      nefunguje, preto ich nie je možné vypnúť.
    </p>

    <h2>Analytické cookies</h2>
    <p>
      Pomáhajú nám pochopiť, ktoré časti stránky sú užitočné. Zbierame ich len s vaším
      súhlasom a v anonymizovanej podobe.
    </p>

    <h2>Ako súhlas zmeníte</h2>
    <p>
      Súhlas viete kedykoľvek odvolať vymazaním cookies vo vašom prehliadači — pri ďalšej
      návšteve sa lišta so súhlasom zobrazí znova.
    </p>
  </LegalLayout>
);

export default Cookies;
