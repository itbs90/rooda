import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
const Hero = () => {
  return <section className="relative bg-gradient-to-br from-hero-from to-hero-to text-primary-foreground pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Pare de trabalhar no escuro. Descubra quanto você realmente lucra.</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">Controle financeiro profissional feito para motoristas de app.  Sem planilhas. Sem complicação.</p>
            
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-accent/20 transition-all">
              COMEÇAR TESTE GRÁTIS por 7 dias
            </Button>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Dados 100% seguros</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <img src={heroImage} alt="Rooda App Interface - Controle financeiro para motoristas de app" className="w-full max-w-2xl drop-shadow-2xl animate-fade-in" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;