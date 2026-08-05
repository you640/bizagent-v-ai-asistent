import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, LifeBuoy } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: neexistujúca cesta:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
          <span className="text-primary-foreground font-bold text-2xl">B</span>
        </div>
        <p className="text-6xl font-extrabold text-gradient-primary mb-2">404</p>
        <h1 className="text-2xl font-bold mb-3">Táto stránka neexistuje</h1>
        <p className="text-muted-foreground mb-8">
          Odkaz je pravdepodobne neplatný alebo sa stránka presunula. Skúste to z úvodu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4" />
              Späť na úvod
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:podpora@bizagent.sk">
              <LifeBuoy className="w-4 h-4" />
              Napísať podpore
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
