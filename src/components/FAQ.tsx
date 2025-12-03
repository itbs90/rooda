import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const faqs = [
    {
      question: "Como funciona o teste grátis?",
      answer: "Você tem 7 dias para testar TODAS as funcionalidades sem limitações. Não pedimos cartão de crédito. Se gostar, escolhe um plano. Se não, sem problema.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim. O cancelamento é imediato e você continua usando até o fim do período pago. Sem taxa, sem burocracia, sem pegadinha.",
    },
    {
      question: "Quais apps são suportados?",
      answer: "Uber, 99, InDrive e qualquer outro app de corridas. Você registra manualmente as receitas de cada plataforma e o Rooda organiza tudo.",
    },
    {
      question: "Quanto tempo gasto por dia?",
      answer: "2 minutos. Sério. Abre o app, registra receitas/despesas/km, pronto. O sistema faz todo o cálculo e análise automaticamente.",
    },
    {
      question: "Meus dados são seguros?",
      answer: "Sim. Usamos criptografia de ponta (SSL 256 bits) e servidores em nuvem com backup diário. Seus dados financeiros são 100% privados e protegidos.",
    },
    {
      question: "Posso exportar meus dados?",
      answer: "Sim. Você pode exportar relatórios completos em PDF ou planilha Excel a qualquer momento.",
    },
    {
      question: "Funciona em iPhone e Android?",
      answer: "Sim, o Rooda funciona perfeitamente em iOS e Android. Interface nativa para cada sistema.",
    },
    {
      question: "E se eu esquecer de registrar um dia?",
      answer: "Sem problema. Você pode voltar e registrar dias anteriores. O sistema mantém seu histórico completo e organizado.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-foreground">
            Perguntas frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-4 md:px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
