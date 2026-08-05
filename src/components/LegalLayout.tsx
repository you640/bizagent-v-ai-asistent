import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

type Props = { title: string; updated: string; children: ReactNode };

const LegalLayout = ({ title, updated, children }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} — BizAgent`;
  }, [title]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Späť na úvod
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Aktualizované: {updated}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
