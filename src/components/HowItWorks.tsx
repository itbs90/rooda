import { Button } from "@/components/ui/button";
import { Edit3, BarChart3, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      number: "1",
      icon: Edit3,
      title: "Registre seu dia",
      description: "Receitas, despesas, km rodados. Interface simples em 3 etapas com prévia instantânea.",
    },
    {
      number: "2",
      icon: BarChart3,
      title: "Veja seus números de verdade",
      description: "Dashboard completo com gráficos de evolução, comparação semanal e análise de tendências.",
    },
    {
      number: "3",
      icon: Lightbulb,
      title: "Tome decisões que aumentam seu lucro",
      description: "Receba insights automáticos: quando rodar, onde economizar, como bater suas metas.",
    },
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-foreground">
            Controle profissional em 3 passos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center mb-10 md:mb-16 text-muted-foreground">
            (2 minutos por dia)
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="bg-background rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group border border-border/50 relative"
              >
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-primary text-primary-foreground w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-background">
                  {step.number}
                </div>
                <div className="mt-4 md:mt-6 mb-4 md:mb-6 bg-accent/10 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 md:w-9 md:h-9 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-foreground uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-accent text-4xl font-bold opacity-30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              TESTAR GRÁTIS POR 7 DIAS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
