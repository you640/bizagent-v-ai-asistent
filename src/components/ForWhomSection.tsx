import { motion } from "framer-motion";
import { Briefcase, Hammer, Laptop, Building2 } from "lucide-react";

const groups = [
  {
    icon: Briefcase,
    title: "SZČO na paušále",
    benefit: "Automatický prehľad 60 % paušálnych výdavkov a odvodov — bez Excelu.",
  },
  {
    icon: Hammer,
    title: "Remeselníci",
    benefit: "Faktúra priamo z mobilu na stavbe, klient platí QR kódom ešte na mieste.",
  },
  {
    icon: Laptop,
    title: "Freelanceri a IT",
    benefit: "Faktúry v EUR aj pre zahraničných klientov, opakované mesačné fakturácie.",
  },
  {
    icon: Building2,
    title: "Malé s.r.o.",
    benefit: "Viac používateľov, DPH priznanie a export XML priamo pre účtovníka.",
  },
];

const ForWhomSection = () => (
  <section id="pre-koho" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
          Pre koho
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Postavené na mieru{" "}
          <span className="text-gradient-accent">slovenským podnikateľom</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {groups.map((g, i) => (
          <motion.article
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bento-card"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <g.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold mb-2">{g.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{g.benefit}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhomSection;
