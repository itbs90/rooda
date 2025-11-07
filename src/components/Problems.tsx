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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Você trabalha 12 horas por dia. Mas está realmente lucrando?
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Todo motorista de app já passou por isso:
          </p>
          
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                      "{problem.title}"
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
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
