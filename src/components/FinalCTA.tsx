import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-hero-from to-hero-to text-primary-foreground">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Pare de rodar no escuro. Comece a lucrar de verdade.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed">
            Mais de 500 motoristas já descobriram quanto realmente ganham.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 text-primary-foreground/80">
            A única diferença entre você e eles? Eles deram o primeiro passo.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 lg:py-8 rounded-xl shadow-2xl hover:shadow-accent/20 transition-all w-full sm:w-auto"
          >
            COMEÇAR TESTE GRÁTIS DE 7 DIAS
          </Button>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8 text-xs sm:text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Sem cartão</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
