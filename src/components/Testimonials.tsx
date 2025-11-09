import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "João M.",
      location: "São Paulo",
      app: "Uber",
      text: "Descobri que gastava R$ 400/mês a mais com combustível sem perceber. Só em agosto economizei R$ 830. O app se pagou em 3 dias.",
    },
    {
      name: "Ana Silva",
      location: "Belo Horizonte",
      app: "99",
      text: "Comecei a registrar todos os dias. Em 2 meses aumentei meu lucro líquido em 23% só com decisões melhores. Virou rotina.",
    },
    {
      name: "Carlos R.",
      location: "Curitiba",
      app: "Uber e 99",
      text: "Antes eu achava que lucrava R$ 80/dia. O Rooda mostrou que era R$ 45. Agora sei onde cortar e estou em R$ 95 de lucro real.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Motoristas reais. Resultados reais.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-card-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} | {testimonial.app}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-xl font-semibold text-foreground">
            Mais de 500 motoristas já profissionalizaram suas corridas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
