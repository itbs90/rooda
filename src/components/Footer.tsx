import { Instagram } from "lucide-react";
import logoRodape from "@/assets/logo-rodape.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <img src={logoRodape} alt="Rooda" className="h-10 md:h-12 w-auto max-w-[180px] md:max-w-[200px]" />
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-foreground mb-3 md:mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              <a href="#problema" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors">Para quem Roda</a>
              <a href="#como-funciona" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors">Como Funciona</a>
              <a href="#funcionalidades" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors">Funcionalidades</a>
              <a href="#precos" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors">Planos</a>
            </nav>
          </div>

          {/* Redes sociais e contato */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-foreground mb-3 md:mb-4">Contato</h3>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors group"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              <span>@roodaapp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-primary-foreground/60 text-center md:text-left">
              © 2025 Rooda. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
