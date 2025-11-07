import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoFull} alt="Rooda" className="h-8" />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
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
