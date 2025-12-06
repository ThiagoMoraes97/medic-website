import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Crown, Shield, Sparkles, ArrowRight } from "lucide-react";

export const PlansSection = () => {
  const plans = [
    {
      name: "ESSENCIAL VIDA",
      icon: Shield,
      price: "29",
      cents: "90",
      perDay: "menos de R$1/dia",
      checkoutUrl: "https://planos-checkout.nemasaude.com.br/medic-beneficios/essencial-vida?v=1506",
      features: [
        { text: "Acesso ao Clube de Vantagens Medic Benefícios", included: true },
        { text: "Descontos exclusivos em consultas médicas, exames laboratoriais e de imagem", included: true },
        { text: "Benefícios estendidos para até 7 dependentes sem custo adicional", included: true },
        { text: "Parcerias com clínicas, farmácias, laboratórios, academias e serviços de estética", included: true },
        { text: "Sem carência, sem limite de idade, sem burocracia", included: true },
        { text: "Telemedicina ilimitada 24h para todos os beneficiários", included: false },
        { text: "Receituário digital com validade em todo território nacional", included: false },
        { text: "Acompanhamento médico online para condições crônicas", included: false },
        { text: "Atendimento sem agendamento, direto pelo celular ou computador", included: false },
      ],
      cta: "Perfeito para quem busca saúde de qualidade com economia real!",
      gradient: "from-gray-600 to-gray-800",
      buttonGradient: "from-primary to-blue-600",
    },
    {
      name: "CONECTA SAÚDE",
      icon: Crown,
      price: "59",
      cents: "90",
      perDay: "R$2/dia",
      subtitle: "Plano base + Telemedicina completa",
      checkoutUrl: "https://planos-checkout.nemasaude.com.br/medic-beneficios/conecta-saude?v=1506",
      features: [
        { text: "Acesso ao Clube de Vantagens Medic Benefícios", included: true },
        { text: "Descontos exclusivos em consultas médicas, exames laboratoriais e de imagem", included: true },
        { text: "Benefícios estendidos para até 7 dependentes sem custo adicional", included: true },
        { text: "Parcerias com clínicas, farmácias, laboratórios, academias e serviços de estética", included: true },
        { text: "Sem carência, sem limite de idade, sem burocracia", included: true },
        { text: "Telemedicina ilimitada 24h para todos os beneficiários", included: true },
        { text: "Receituário digital com validade em todo território nacional", included: true },
        { text: "Acompanhamento médico online para condições crônicas", included: true },
        { text: "Atendimento sem agendamento, direto pelo celular ou computador", included: true },
      ],
      cta: "Ideal para quem busca praticidade e atendimento médico rápido!",
      highlighted: true,
      gradient: "from-secondary to-emerald-500",
      buttonGradient: "from-secondary to-emerald-500",
    },
  ];

  return (
    <section id="planos" className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Escolha seu plano</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Chegou a hora de escolher como você vai{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              cuidar da sua família
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Saúde, economia e proteção para você e até 7 dependentes!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 transition-all duration-500 ${
                plan.highlighted 
                  ? "bg-gradient-to-br from-primary via-blue-600 to-primary shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-105" 
                  : "bg-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/60"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-secondary to-emerald-400 text-white text-sm font-semibold rounded-bl-2xl">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className={`text-center pb-8 pt-10 ${plan.highlighted ? "text-white" : ""}`}>
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  plan.highlighted 
                    ? "bg-white/20 backdrop-blur-sm" 
                    : "bg-gradient-to-br from-primary/10 to-secondary/10"
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.highlighted ? "text-white" : "text-primary"}`} />
                </div>
                <CardTitle className={`text-2xl mb-4 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-lg ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>R$</span>
                  <span className={`text-6xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    ,{plan.cents}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>/mês</span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.perDay}
                </p>
                {plan.subtitle && (
                  <p className={`text-sm mt-2 ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.subtitle}
                  </p>
                )}
              </CardHeader>
              
              <CardContent className={`space-y-6 px-8 pb-10 ${plan.highlighted ? "text-white" : ""}`}>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      {feature.included ? (
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.highlighted ? "bg-secondary/80" : "bg-secondary/20"
                        }`}>
                          <Check className={`h-3 w-3 ${plan.highlighted ? "text-white" : "text-secondary"}`} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                          <X className="h-3 w-3 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm leading-relaxed ${
                        feature.included 
                          ? plan.highlighted ? "text-white/90" : "text-foreground"
                          : "text-muted-foreground"
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 space-y-4">
                  <p className={`text-sm font-medium text-center ${
                    plan.highlighted ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {plan.cta}
                  </p>
                  <Button 
                    className={`w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 ${
                      plan.highlighted 
                        ? "bg-white text-primary hover:bg-white/90 shadow-lg" 
                        : `bg-gradient-to-r ${plan.buttonGradient} text-white hover:opacity-90 shadow-lg shadow-primary/20`
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Adquira Agora
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
