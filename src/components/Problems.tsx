import { TrendingDown, Fuel, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Problems = () => {
  const { ref, isVisible } = useScrollAnimation();
  const problems = [
    {
      icon: TrendingDown,
      title: "Rodei o dia todo e não sobrou nada",
      description: "O Rooda calcula seu lucro líquido real depois de todas as despesas. Você vê quanto cada hora na rua realmente vale.",
    },
    {
      icon: Fuel,
      title: "Combustível está comendo meu lucro",
      description: "Análise automática de custo por km e eficiência diária. Descubra se você está gastando mais do que deveria.",
    },
    {
      icon: Target,
      title: "Não consigo bater minhas metas",
      description: "Sistema inteligente de metas com alertas em tempo real. Você sabe exatamente quanto falta para fechar o dia no verde.",
    },
  ];

  return (
    <section id="para-quem-roda" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-foreground leading-tight">
            Você trabalha 12 horas por dia. Mas está realmente lucrando?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center mb-10 md:mb-16 text-muted-foreground">
            Todo motorista de app já passou por isso:
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-primary rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-accent/20"
              >
                <div className="bg-accent/90 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <problem.icon className="w-6 h-6 md:w-9 md:h-9 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-accent leading-tight">
                  "{problem.title}"
                </h3>
                <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              Sem controle = Sem lucro. É simples assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
