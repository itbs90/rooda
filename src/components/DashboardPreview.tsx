import dashboardImage from "@/assets/dashboard-preview.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DashboardPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-95' : 'opacity-0 scale-90'
          }`}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img 
              src={dashboardImage} 
              alt="Dashboard do Rooda - Controle financeiro completo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
