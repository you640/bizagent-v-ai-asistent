import { motion } from "framer-motion";
import { WifiOff, QrCode, BrainCircuit, FileText, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Offline-First PWA",
    description: "Pracujte bez internetu. Dáta sa synchronizujú automaticky, keď ste online.",
    size: "large",
  },
  {
    icon: QrCode,
    title: "Smart QR Platby",
    description: "Generovanie EPC-QR kódov pre okamžité úhrady faktúr.",
    size: "normal",
  },
  {
    icon: BrainCircuit,
    title: "AI Účtovník",
    description: "Automatická kategorizácia výdavkov a OCR skenovanie bločkov.",
    size: "normal",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description: "Profesionálne faktúry v PDF, ktoré váš účtovník bude milovať.",
    size: "normal",
  },
  {
    icon: Zap,
    title: "Bleskurýchle",
    description: "Štart pod 1 sekundu. Optimalizované pre výkon.",
    size: "normal",
  },
  {
    icon: Shield,
    title: "Bezpečné",
    description: "Šifrované dáta. Vaše informácie sú v bezpečí.",
    size: "normal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Funkcie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Všetko čo potrebujete,{" "}
            <span className="text-gradient-primary">na jednom mieste</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nástroje navrhnuté pre moderných slovenských podnikateľov. Jednoduché,
            výkonné a vždy dostupné.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`bento-card group ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="feature-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
                {index === 0 && (
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                      <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                      <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Používa tisíce podnikateľov
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
