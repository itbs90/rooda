import { TrendingDown, Fuel, Target } from "lucide-react";

const Problems = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Você trabalha 12 horas por dia. Mas está realmente lucrando?
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Todo motorista de app já passou por isso:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-accent/20"
              >
                <div className="bg-accent/90 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <problem.icon className="w-9 h-9 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-accent leading-tight">
                  "{problem.title}"
                </h3>
                <p className="text-base text-primary-foreground/90 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              Sem controle = Sem lucro. É simples assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
