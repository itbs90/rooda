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
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
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
    <section id="funcionalidades" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-foreground">
            Tudo que você precisa para lucrar mais
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="bg-accent/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 md:mb-2 text-foreground leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
