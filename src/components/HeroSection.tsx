import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-mesh overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Nová generácia účtovníctva
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Fakturácia a účtovníctvo{" "}
              <span className="text-gradient-primary">na autopilota.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Kompletné AI riešenie pre slovenské SZČO a malé firmy. Faktúry,
              výdavky a daňové prehľady v jednej offline-first aplikácii.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button variant="accent-glow" size="xl">
                Začať zadarmo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl">
                <Download className="w-5 h-5" />
                Stiahnuť aplikáciu
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <p className="text-sm text-muted-foreground">
                Dôveruje nám <span className="font-bold text-foreground">1000+</span> slovenských podnikateľov
              </p>
              <div className="flex items-center gap-4 opacity-50 grayscale">
                <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                  </svg>
                  Flutter
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
                  </svg>
                  Firebase
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Card */}
              <div className="dashboard-glass rounded-3xl p-6 animate-float">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Tento mesiac</p>
                    <h3 className="text-2xl font-bold">€12,450</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    +24%
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 mb-6 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(220 100% 33%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(220 100% 33%)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,60 100,50 T200,30 T300,20 L300,100 L0,100 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,80 Q50,60 100,50 T200,30 T300,20"
                      fill="none"
                      stroke="hsl(220 100% 33%)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">23</p>
                    <p className="text-xs text-muted-foreground">Faktúry</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">8</p>
                    <p className="text-xs text-muted-foreground">Čakajúce</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">15</p>
                    <p className="text-xs text-muted-foreground">Zaplatené</p>
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-8 glass rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Faktúra #2024-089</p>
                    <p className="text-xs text-green-600 font-medium">Zaplatené • €1,250</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating QR Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm13-2h1v3h-3v-1h2v-2zm0 4h1v3h-1v-3zm-3 0h2v1h-2v-1zm-2 0h1v3h-1v-3zm5 2v1h-2v-1h2z"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
