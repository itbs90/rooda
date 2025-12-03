import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-hero-from to-hero-to text-primary-foreground pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Pare de rodar no escuro. Comece a lucrar de verdade.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed">
              A cada corrida, seu lucro escorre pelo ralo em despesas invisíveis. O Rooda mostra exatamente quanto você está levando para casa em poucos minutos.
            </p>
            
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-xl shadow-2xl hover:shadow-accent/20 transition-all w-full sm:w-auto"
            >
              COMEÇAR TESTE GRÁTIS por 7 dias
            </Button>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 mt-4 md:mt-6 text-xs sm:text-sm text-primary-foreground/80">
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
          
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src={heroImage} 
              alt="Rooda App Interface - Controle financeiro para motoristas de app" 
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl drop-shadow-2xl animate-fade-in" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
