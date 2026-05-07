import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martina Kováčová",
    role: "Grafická dizajnérka, SZČO",
    city: "Bratislava",
    quote: "BizAgent mi šetrí 6 hodín mesačne. DPH priznanie pripravím za 5 minút namiesto celého večera.",
    initial: "MK",
  },
  {
    name: "Peter Horváth",
    role: "Web developer",
    city: "Košice",
    quote: "Konečne aplikácia, ktorá rozumie slovenským SZČO. QR platby + offline režim sú game changer.",
    initial: "PH",
  },
  {
    name: "Lucia Tomková",
    role: "Konzultantka",
    city: "Žilina",
    quote: "Prešla som z iDokladu za 10 minút. AI kategorizácia výdavkov funguje fantasticky.",
    initial: "LT",
  },
  {
    name: "Jozef Baláž",
    role: "Účtovník",
    city: "Nitra",
    quote: "Moji klienti sú nadšení. Faktúry v PDF sú prehľadné a export do Pohody mi šetrí hodiny.",
    initial: "JB",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Referencie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Čo hovoria{" "}
            <span className="text-gradient-primary">naši používatelia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            1000+ slovenských podnikateľov si už uľahčilo administratívu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-grow mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} • {t.city}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Press logos */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Ako o nás písali
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
            {["Forbes SK", "Startitup", "Živé.sk", "Trend", "HN Online"].map((p) => (
              <span key={p} className="text-lg md:text-xl font-bold text-muted-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
