import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, UserPlus, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Escolha o seu plano",
      description: "O Cartão Solidário tem um valor mensal acessível e garante acesso a médicos e exames para toda a sua família, sem surpresas no preço.",
      linkText: "Ver planos",
      linkHref: "/planos",
      color: "from-blue-500 to-primary",
    },
    {
      icon: UserPlus,
      step: "02",
      title: "Faça sua adesão online",
      description: "O processo é simples e rápido. Preencha seus dados em poucos minutos e comece a usar seus benefícios imediatamente.",
      linkText: "Começar agora",
      linkHref: "/planos",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Acesse seus benefícios",
      description: "Utilize o Cartão Solidário em consultas médicas, telemedicina e exames em clínicas e farmácias parceiras.",
      linkText: "Aproveite",
      linkHref: "#beneficios",
      color: "from-secondary to-emerald-500",
    },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/50 to-primary/[0.05] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,122,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Simples e rápido</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como adquirir o seu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              cartão solidário
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda abaixo o passo a passo para garantir o seu lugar no nosso programa de descontos
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="relative h-full border-0 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                      {step.step}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  <a 
                    href={step.linkHref}
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent group/link`}
                  >
                    {step.linkText}
                    <ArrowRight className="h-4 w-4 ml-1 text-primary transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-secondary to-emerald-500 hover:from-secondary/90 hover:to-emerald-500/90 rounded-full shadow-lg shadow-secondary/25 h-14 px-10 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30" 
            asChild
          >
            <a href="/planos" className="flex items-center gap-2">
              Adquira o seu Agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
