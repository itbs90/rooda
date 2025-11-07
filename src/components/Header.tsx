import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";
import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="flex items-center gap-8">
            <img src={logoFull} alt="Rooda" className="h-8" />
            <nav className="hidden md:flex items-center gap-6">
              <HeaderLink href="#problema" isScrolled={isScrolled}>Por que Rooda?</HeaderLink>
              <HeaderLink href="#como-funciona" isScrolled={isScrolled}>Como Funciona</HeaderLink>
              <HeaderLink href="#funcionalidades" isScrolled={isScrolled}>Funcionalidades</HeaderLink>
              <HeaderLink href="#precos" isScrolled={isScrolled}>Preços</HeaderLink>
              <HeaderLink href="#faq" isScrolled={isScrolled}>FAQ</HeaderLink>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
