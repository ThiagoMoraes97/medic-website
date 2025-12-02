import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Não perca tempo, cuide já da Saúde de sua família com a Medic Benefícios!
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary-foreground/10 to-secondary/10 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-primary-foreground/10 rounded-3xl flex items-center justify-center mb-4">
                  <div className="text-6xl">💳</div>
                </div>
                <p className="text-primary-foreground font-semibold text-lg">Cartão Medic Benefícios</p>
                <p className="text-primary-foreground/80 text-sm mt-2">Saúde e bem-estar para toda família</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 h-14 rounded-2xl"
              asChild
            >
              <a href="#adquirir">ADQUIRA O SEU AGORA</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
