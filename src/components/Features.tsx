import { 
  LayoutDashboard, 
  TrendingUp, 
  Fuel, 
  Target, 
  Award, 
  Layers, 
  Zap, 
  FileText 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Profissional",
      description: "Lucro real, produtividade por hora, metas e tendências. Tudo em um só lugar.",
    },
    {
      icon: TrendingUp,
      title: "Análise Financeira Completa",
      description: "Lucro líquido após TODAS as despesas. Veja a evolução mês a mês.",
    },
    {
      icon: Fuel,
      title: "Controle de Combustível Inteligente",
      description: "Custo por km, eficiência diária e comparativos automáticos.",
    },
    {
      icon: Target,
      title: "Sistema de Metas Personalizadas",
      description: "Defina objetivos diários e veja seu progresso em tempo real.",
    },
    {
      icon: Award,
      title: "Conquistas e Gamificação",
      description: "Badges para manter a consistência e motivação alta.",
    },
    {
      icon: Layers,
      title: "Multi-app",
      description: "Compare Uber, 99 e outros apps em um único painel.",
    },
    {
      icon: Zap,
      title: "Insights Automáticos",
      description: "Alertas inteligentes sobre padrões, oportunidades e desperdícios.",
    },
    {
      icon: FileText,
      title: "Relatórios Detalhados",
      description: "Filtre por dia/semana/mês e exporte seus dados quando quiser.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Tudo que você precisa para lucrar mais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
