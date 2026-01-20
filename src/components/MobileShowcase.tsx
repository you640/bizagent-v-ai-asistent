import { motion } from "framer-motion";
import { Zap, Download, Link2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Zap,
    text: "Štart < 1s (CanvasKit performance)",
  },
  {
    icon: Download,
    text: "Nainštalovateľná (Add to Home Screen)",
  },
  {
    icon: Link2,
    text: "Clean URLs & Deep Linking",
  },
];

const MobileShowcase = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
              Mobilná aplikácia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Aplikácia, ktorá{" "}
              <span className="text-gradient-accent">nezaťažuje</span> váš telefón
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vyvinutá s najnovšími technológiami pre maximálnu rýchlosť a minimálnu
              spotrebu batérie. Funguje ako natívna aplikácia, bez potreby App Store.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              <Download className="w-5 h-5" />
              Stiahnuť PWA
            </Button>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 md:w-72 aspect-[9/19] bg-foreground rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground rounded-b-2xl z-10" />
                  
                  {/* App Content */}
                  <div className="pt-10 px-4 h-full bg-gradient-to-b from-secondary/50 to-background">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between mb-4 px-2">
                      <span className="text-xs font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-foreground/50 rounded-sm">
                          <div className="w-3/4 h-full bg-green-500 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="glass rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">B</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">BizAgent</p>
                          <p className="text-xs text-muted-foreground">Dashboard</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold">€8,420</div>
                      <p className="text-xs text-green-600">+12% tento týždeň</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="glass rounded-xl p-3 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-xs font-medium">Nová faktúra</p>
                      </div>
                      <div className="glass rounded-xl p-3 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-xs font-medium">Scan doklad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">Offline Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
