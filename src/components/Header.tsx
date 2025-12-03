import { Button } from "@/components/ui/button";
import logoMenuVerde from "@/assets/logo-menu-verde.png";
import logoMenuBranco from "@/assets/logo-menu-branco.png";
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <img 
              src={isScrolled ? logoMenuBranco : logoMenuVerde} 
              alt="Rooda" 
              className="h-8 md:h-12" 
            />
            <nav className="hidden lg:flex items-center gap-6">
              <HeaderLink href="#para-quem-roda" isScrolled={isScrolled}>Para quem Roda</HeaderLink>
              <HeaderLink href="#como-funciona" isScrolled={isScrolled}>Como Funciona</HeaderLink>
              <HeaderLink href="#funcionalidades" isScrolled={isScrolled}>Funcionalidades</HeaderLink>
              <HeaderLink href="#planos" isScrolled={isScrolled}>Planos</HeaderLink>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              className={`hidden sm:inline-flex text-sm md:text-base ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground hover:text-primary-foreground/80"
              }`}
            >
              Acessar Conta
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs sm:text-sm md:text-base px-3 md:px-4">
              Criar conta Grátis
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute left-0 right-0 top-full border-b shadow-lg animate-fade-in ${
            isScrolled 
              ? "bg-background border-border" 
              : "bg-primary border-primary-foreground/10"
          }`}>
            <nav className="flex flex-col py-4 px-4 gap-1">
              <a 
                href="#para-quem-roda" 
                onClick={closeMobileMenu}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Para quem Roda
              </a>
              <a 
                href="#como-funciona" 
                onClick={closeMobileMenu}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Como Funciona
              </a>
              <a 
                href="#funcionalidades" 
                onClick={closeMobileMenu}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Funcionalidades
              </a>
              <a 
                href="#planos" 
                onClick={closeMobileMenu}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                Planos
              </a>
              <div className="pt-2 border-t border-current/10 mt-2">
                <a 
                  href="#" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isScrolled 
                      ? "text-foreground hover:bg-muted" 
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Acessar Conta
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
