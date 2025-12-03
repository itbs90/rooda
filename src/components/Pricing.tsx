import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  const plans = [
    {
      name: "PLANO FREE",
      price: "7 dias completos",
      period: "",
      features: [
        "Teste ilimitado de todas as funcionalidades",
        "Sem cartão de crédito",
        "Sem compromisso",
        "Cancele quando quiser",
      ],
      cta: "COMEÇAR TESTE GRÁTIS",
      highlighted: false,
    },
    {
      name: "PLANO PRO",
      badge: "MAIS POPULAR",
      price: "R$ 9,90",
      period: "/mês",
      features: [
        "Tudo do Free +",
        "Registros e histórico ilimitados",
        "Análises avançadas sem limites",
        "Conquistas e gamificação",
        "Suporte prioritário via WhatsApp",
      ],
      note: "Menos que o preço de 1 litro de gasolina por dia.",
      cta: "ASSINAR AGORA",
      highlighted: true,
    },
    {
      name: "PLANO PRO ANUAL",
      badge: "MELHOR CUSTO",
      price: "R$ 89,90",
      period: "/ano",
      originalPrice: "R$ 118,80",
      discount: "(economize 25%)",
      features: [
        "Tudo do Pro mensal",
        "Menos de R$ 7,50/mês",
        "2 meses grátis",
        "Pague uma vez, use o ano todo",
      ],
      cta: "GARANTIR DESCONTO",
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Comece grátis. Evolua quando ver o valor.
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-5 md:p-8 ${
                  plan.highlighted 
                    ? 'bg-primary text-primary-foreground shadow-2xl sm:scale-105 border-2 border-accent order-first sm:order-none' 
                    : 'bg-card border border-border shadow-sm'
                }`}
              >
                {plan.badge && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 md:mb-4">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-4 md:mb-6">
                  <div className="flex items-baseline gap-1 md:gap-2 flex-wrap">
                    <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-base md:text-lg ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className={`line-through mr-2 text-sm ${plan.highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                        {plan.originalPrice}
                      </span>
                      <span className={`font-semibold text-sm ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {plan.discount}
                      </span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <Check className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} />
                      <span className={`text-xs sm:text-sm ${plan.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {plan.note && (
                  <p className={`text-xs sm:text-sm italic mb-4 md:mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.note}
                  </p>
                )}
                
                <Button 
                  className={`w-full font-bold py-5 md:py-6 rounded-xl text-sm md:text-base ${
                    plan.highlighted 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 md:mt-12 text-sm md:text-base text-muted-foreground">
            Todos os planos: Cancele quando quiser. Período de teste incluso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
