import womanPhone from "@/assets/woman-phone.png";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VisualShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform -translate-x-20 hidden md:block"></div>
              <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/30 rounded-full blur-3xl hidden md:block"></div>
              <img 
                src={womanPhone} 
                alt="Pessoa usando o app Rooda" 
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                A maneira mais simples de cuidar do seu dinheiro
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Interface clara e rápida, feita para quem não tem tempo a perder. Registre tudo em segundos e tenha insights instantâneos.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent/20 p-1 flex-shrink-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground mb-1">
                    Poucos campos, máximo resultado
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Registre receitas, despesas e km rodados em menos de 2 minutos por dia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent/20 p-1 flex-shrink-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground mb-1">
                    Feito para quem não tem tempo a perder
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Entre corridas, no trânsito, onde você estiver. Interface pensada para uso rápido
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-accent/20 p-1 flex-shrink-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground mb-1">
                    Dados sempre seguros
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Criptografia de ponta e backup automático. Suas informações financeiras totalmente protegidas
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 md:py-6 rounded-xl shadow-lg w-full sm:w-auto"
            >
              TESTAR GRÁTIS POR 7 DIAS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
