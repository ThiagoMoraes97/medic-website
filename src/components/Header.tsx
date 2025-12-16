import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio", isAnchor: true },
    { label: "Benefícios", href: "#beneficios", isAnchor: true },
    { label: "Planos", href: "#planos", isAnchor: true },
    { label: "FAQ", href: "#faq", isAnchor: true },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? "bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/[0.03]" 
        : "bg-white/30 backdrop-blur-xl border-b border-white/10"
    }`}
    style={{
      WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
      backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
    }}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="block">
          <img src="/logo.png" alt="Medic Benefícios" className="h-12 w-auto transition-opacity duration-300 hover:opacity-80" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={item.isAnchor ? (e) => handleAnchorClick(e, item.href) : undefined}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/clinicas"
            className="ml-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-primary hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Rede Credenciada
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Área do Cliente temporariamente desabilitada - funcionalidade futura */}
          {/* <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-gray-300 text-foreground hover:text-primary hover:border-primary hover:bg-primary/5 font-medium px-5" 
            asChild
          >
            <a href="/login">Área do Cliente</a>
          </Button> */}
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-secondary to-emerald-500 hover:from-secondary/90 hover:to-emerald-500/90 rounded-full shadow-md shadow-secondary/25 font-semibold px-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30" 
            asChild
          >
            <a href="/planos">Adquira o seu Cartão</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] p-0">
            <div className="p-6">
              <div className="mb-8">
                <img src="/logo.png" alt="Medic Benefícios" className="h-11 w-auto" />
              </div>
              
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.isAnchor) {
                        handleAnchorClick(e, item.href);
                      }
                      setIsOpen(false);
                    }}
                    className="text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-4 py-3 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/clinicas"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium px-4 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary hover:to-primary hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2 mt-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Rede Credenciada
                </a>
              </nav>

              <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-border">
                {/* Área do Cliente temporariamente desabilitada - funcionalidade futura */}
                {/* <Button variant="outline" className="rounded-xl h-12" asChild>
                  <a href="/login">Área do Cliente</a>
                </Button> */}
                <Button className="bg-gradient-to-r from-secondary to-emerald-500 rounded-xl h-12 font-semibold shadow-md" asChild>
                  <a href="/planos" onClick={() => setIsOpen(false)}>Adquira o seu Cartão</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
