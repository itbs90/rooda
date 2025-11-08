import dashboardImage from "@/assets/dashboard-preview.png";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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
