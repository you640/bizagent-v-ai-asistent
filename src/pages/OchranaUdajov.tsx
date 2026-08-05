import LegalLayout from "@/components/LegalLayout";

const OchranaUdajov = () => (
  <LegalLayout title="Ochrana osobných údajov" updated="1. 8. 2026">
    <p>
      Vaše súkromie berieme vážne. Osobné údaje spracúvame v súlade s nariadením GDPR
      a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
    </p>

    <h2>Aké údaje spracúvame</h2>
    <ul>
      <li>Registračné údaje: e-mail, meno, prípadne názov firmy a IČO.</li>
      <li>Obsahové údaje: faktúry, klienti, výdavky a doklady, ktoré do služby vložíte.</li>
      <li>Technické údaje: IP adresa, typ zariadenia, logy prístupov.</li>
    </ul>

    <h2>Účel a právny základ</h2>
    <p>
      Údaje spracúvame na poskytovanie služby (plnenie zmluvy), plnenie zákonných povinností
      a na zlepšovanie produktu (oprávnený záujem).
    </p>

    <h2>Uchovávanie</h2>
    <p>
      Údaje uchovávame po dobu trvania účtu a následne 30 dní po jeho zrušení. Účtovné
      doklady môžu byť uchované dlhšie, ak to vyžaduje zákon.
    </p>

    <h2>Vaše práva</h2>
    <ul>
      <li>Právo na prístup, opravu a vymazanie údajov.</li>
      <li>Právo na prenosnosť — dáta viete kedykoľvek exportovať.</li>
      <li>Právo namietať a podať sťažnosť na Úrad na ochranu osobných údajov SR.</li>
    </ul>

    <h2>Bezpečnosť</h2>
    <p>
      Dáta sú prenášané cez šifrované spojenie (TLS) a ukladané v šifrovanej podobe
      v dátových centrách v EÚ.
    </p>

    <h2>Kontakt</h2>
    <p>Otázky k spracúvaniu údajov: gdpr@bizagent.sk.</p>
  </LegalLayout>
);

export default OchranaUdajov;
