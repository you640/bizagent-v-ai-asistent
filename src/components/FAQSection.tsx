import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Je BizAgent vhodný pre platcov DPH?",
    a: "Áno. BizAgent automaticky generuje DPH priznanie aj kontrolný výkaz vo formáte XML pre Finančnú správu SR.",
  },
  {
    q: "Môžem importovať dáta z iDokladu, SuperFaktúry alebo Pohody?",
    a: "Samozrejme. Podporujeme import z najpoužívanejších slovenských fakturačných nástrojov vrátane CSV a XML exportov.",
  },
  {
    q: "Funguje aplikácia offline?",
    a: "Áno. BizAgent je PWA s offline-first architektúrou. Vystavujte faktúry kdekoľvek — synchronizácia prebehne, keď ste online.",
  },
  {
    q: "Sú moje dáta v bezpečí podľa GDPR?",
    a: "Áno. Všetky dáta sú šifrované, hostované v EÚ a spracovávané v súlade s GDPR. Máte plnú kontrolu nad exportom aj zmazaním.",
  },
  {
    q: "Koľko stojí používanie?",
    a: "Plán Štart je úplne zdarma navždy. Plán Profi začína od €7/mesiac pri ročnej platbe. Žiadne skryté poplatky.",
  },
  {
    q: "Akceptujú banky vaše QR platby?",
    a: "Generujeme štandardné EPC-QR kódy podporované všetkými slovenskými bankami (Tatra banka, VÚB, SLSP, ČSOB a ďalšie).",
  },
  {
    q: "Môžem zrušiť predplatné kedykoľvek?",
    a: "Áno. Predplatné môžete zrušiť kedykoľvek bez výpovednej lehoty. Vaše dáta vám zostanú prístupné.",
  },
  {
    q: "Ponúkate podporu v slovenčine?",
    a: "Áno. Náš tím sídli v Bratislave a poskytuje podporu v slovenčine emailom aj cez chat.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Časté <span className="text-gradient-primary">otázky</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nenašli ste odpoveď? Napíšte nám na{" "}
            <a href="mailto:hello@bizagent.sk" className="text-primary font-medium hover:underline">
              hello@bizagent.sk
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
