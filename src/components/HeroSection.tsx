import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Cuide da Saúde da Sua Família Por Menos de R$1 Por Dia
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Acesso a consultas médicas, telemedicina e exames laboratoriais com preços acessíveis para até 8 pessoas da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                asChild
              >
                <a href="#planos">
                  Adquira o seu Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#beneficios">Conheça os Benefícios</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary-foreground/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-primary-foreground/10 rounded-3xl flex items-center justify-center mb-4">
                    <div className="text-6xl">💳</div>
                  </div>
                  <p className="text-primary-foreground font-semibold">Cartão Solidário Medic Benefícios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
