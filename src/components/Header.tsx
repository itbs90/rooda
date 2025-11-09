import { Button } from "@/components/ui/button";
import logoBranco from "@/assets/logo-branco.png";
import logoVerde from "@/assets/logo-verde.png";
import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={isScrolled ? logoVerde : logoBranco} 
            alt="Rooda" 
            className="h-12" 
          />
          
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <HeaderLink href="#como-funciona" isScrolled={isScrolled}>Como Funciona</HeaderLink>
            <HeaderLink href="#funcionalidades" isScrolled={isScrolled}>Funcionalidades</HeaderLink>
            <HeaderLink href="#planos" isScrolled={isScrolled}>Planos</HeaderLink>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className={`${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground hover:text-primary-foreground/80"
              }`}
            >
              Acessar Conta
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Criar conta Grátis
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col gap-4">
              <HeaderLink href="#como-funciona" isScrolled={isScrolled}>Como Funciona</HeaderLink>
              <HeaderLink href="#funcionalidades" isScrolled={isScrolled}>Funcionalidades</HeaderLink>
              <HeaderLink href="#planos" isScrolled={isScrolled}>Planos</HeaderLink>
              <div className="flex flex-col gap-2 mt-2">
                <Button 
                  variant="ghost" 
                  className={`w-full ${
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-primary-foreground hover:text-primary-foreground/80"
                  }`}
                >
                  Acessar Conta
                </Button>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Criar conta Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
