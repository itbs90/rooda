import { Button } from "@/components/ui/button";
import { Edit3, BarChart3, Lightbulb } from "lucide-react";

const HowItWorks = () => {
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Controle profissional em 3 passos
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            (2 minutos por dia)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                  {step.number}
                </div>
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  PASSO {step.number} | {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-7 rounded-xl"
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
