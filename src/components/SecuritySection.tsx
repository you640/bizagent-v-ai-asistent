import { motion } from "framer-motion";
import { Shield, Lock, Smartphone, Key } from "lucide-react";

const securityFeatures = [
  {
    icon: Key,
    title: "Google Sign-In",
    description: "Oficiálna integrácia s Google účtom pre bezpečné prihlásenie.",
  },
  {
    icon: Lock,
    title: "Šifrované dáta",
    description: "Cloud Firestore Security Rules chránia vaše citlivé informácie.",
  },
  {
    icon: Smartphone,
    title: "Lokálne úložisko",
    description: "Vaše dáta sú bezpečne uložené priamo vo vašom zariadení.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Shield Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main Shield */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" />
                  </div>
                </div>

                {/* Floating Lock Icons */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-8 glass rounded-xl p-3 shadow-lg"
                >
                  <Lock className="w-6 h-6 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-4 glass rounded-xl p-3 shadow-lg"
                >
                  <Key className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                Bezpečnosť
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Bezpečnosť na{" "}
                <span className="text-gradient-primary">bankovej úrovni</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vaše finančné údaje si zaslúžia najvyššiu ochranu. Používame
                overené bezpečnostné štandardy a šifrovanie na každej úrovni.
              </p>
            </motion.div>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-background/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
