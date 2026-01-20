import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, ArrowLeft, Loader2 } from "lucide-react";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().trim().email({ message: "Neplatná emailová adresa" }).max(255),
  password: z.string().min(6, { message: "Heslo musí mať aspoň 6 znakov" }).max(72),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
  const { user, loading, signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = authSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "password") fieldErrors.password = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Chyba prihlásenia",
            description: "Nesprávny email alebo heslo",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Úspešné prihlásenie",
            description: "Vitajte späť!",
          });
          navigate("/");
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          toast({
            title: "Chyba registrácie",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Účet vytvorený",
            description: "Boli ste úspešne zaregistrovaní!",
          });
          navigate("/");
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Back button */}
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Späť na hlavnú stránku
          </Button>

          {/* Glass card */}
          <div className="glass rounded-3xl p-8 shadow-glow">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-primary">BizAgent</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-2">
              {isLogin ? "Prihlásiť sa" : "Vytvoriť účet"}
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              {isLogin
                ? "Zadajte svoje prihlasovacie údaje"
                : "Začnite používať BizAgent zadarmo"}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="vas@email.sk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Heslo</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isLogin ? (
                  "Prihlásiť sa"
                ) : (
                  "Vytvoriť účet"
                )}
              </Button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin
                  ? "Nemáte účet? Zaregistrujte sa"
                  : "Už máte účet? Prihláste sa"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
