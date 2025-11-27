import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, UserPlus, CheckCircle2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Escolha o seu plano:",
      description: "O Cartão Solidário tem um valor mensal acessível e garante acesso a médicos e exames para toda a sua família, sem surpresas no preço.",
      linkText: "Escolha um Plano",
      linkHref: "#planos",
    },
    {
      icon: UserPlus,
      title: "Cadastre-se facilmente:",
      description: "O processo de adesão é simples e rápido. Preencha um formulário online e, em minutos, você estará pronto para começar a usar os benefícios.",
      linkText: "Cadastre-se",
      linkHref: "#adquirir",
    },
    {
      icon: CheckCircle2,
      title: "Acesse seus benefícios:",
      description: "Utilize o Cartão Solidário em consultas médicas, telemedicina e exames em clínicas e farmácias parceiras. Saúde e bem-estar ao seu alcance, de forma prática e econômica.",
      linkText: "Aproveite Agora",
      linkHref: "#beneficios",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Como adquirir o seu cartão solidário:</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda abaixo o passo a passo para garantir o seu lugar no nosso programa de descontos:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
                <div className="text-center">
                  <a 
                    href={step.linkHref}
                    className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center"
                  >
                    {step.linkText} →
                  </a>
                </div>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border -translate-y-1/2" />
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
            <a href="#adquirir">Adquira o seu Agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
