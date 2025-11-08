import { Instagram } from "lucide-react";
import logoBranco from "@/assets/logo-branco.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo e tagline */}
          <div className="flex flex-col gap-4">
            <img src={logoBranco} alt="Rooda" className="h-12" />
            <p className="text-primary-foreground/80 text-base">
              Cada volta conta. Cada real também.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <a href="#problema" className="text-primary-foreground/80 hover:text-accent transition-colors">Para quem Roda</a>
              <a href="#como-funciona" className="text-primary-foreground/80 hover:text-accent transition-colors">Como Funciona</a>
              <a href="#funcionalidades" className="text-primary-foreground/80 hover:text-accent transition-colors">Funcionalidades</a>
              <a href="#precos" className="text-primary-foreground/80 hover:text-accent transition-colors">Planos</a>
            </nav>
          </div>

          {/* Redes sociais e contato */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Contato</h3>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>@roodaapp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Rooda. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
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
