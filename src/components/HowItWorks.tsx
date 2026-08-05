import { motion } from "framer-motion";
import { UserPlus, FileSignature, Bot } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Zaregistrujte sa",
    text: "Účet vytvoríte za 60 sekúnd. Stačí e-mail — žiadne zdĺhavé formuláre ani platobná karta.",
  },
  {
    icon: FileSignature,
    title: "2. Vystavte faktúru",
    text: "Vyberte klienta, pridajte položky a odošlite. QR kód na úhradu sa vygeneruje automaticky.",
  },
  {
    icon: Bot,
    title: "3. Nechajte AI účtovať",
    text: "Odfoťte bločky, AI ich zaradí, vypočíta DPH a pripraví podklady pre účtovníka.",
  },
];

const HowItWorks = () => (
  <section id="ako-to-funguje" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
          Ako to funguje
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Od registrácie po prvú faktúru{" "}
          <span className="text-gradient-primary">za 5 minút</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bento-card text-center relative"
          >
            <div className="feature-icon mx-auto mb-4">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
