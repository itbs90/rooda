import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-hero-from to-hero-to text-primary-foreground pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Você está rodando no prejuízo sem saber.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            A cada corrida, seu lucro escorre pelo ralo em despesas invisíveis. O Rooda mostra exatamente quanto você está levando pra casa — em 2 minutos por dia.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-accent/20 transition-all"
          >
            COMEÇAR TESTE GRÁTIS por 7 dias
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Dados 100% seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
