import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const PlansSection = () => {
  const plans = [
    {
      name: "ESSENCIAL VIDA",
      price: "R$29,90",
      features: [
        { text: "Acesso ao Clube de Vantagens Medic Benefícios", included: true },
        { text: "Descontos exclusivos em consultas médicas, exames laboratoriais e de imagem", included: true },
        { text: "Benefícios estendidos para até 7 dependentes sem custo adicional", included: true },
        { text: "Parcerias com clínicas, farmácias, laboratórios, academias e serviços de estética", included: true },
        { text: "Sem carência, sem limite de idade, sem burocracia", included: true },
        { text: "Telemedicina ilimitada 24h para todos os beneficiários (clínico geral e especialidades)", included: false },
        { text: "Receituário digital com validade em todo território nacional", included: false },
        { text: "Acompanhamento médico online para condições crônicas, dúvidas e orientações de saúde", included: false },
        { text: "Atendimento sem agendamento, direto pelo celular ou computador", included: false },
      ],
      cta: "Perfeito para quem busca saúde de qualidade com economia real!",
    },
    {
      name: "CONECTA SAÚDE",
      price: "R$59,90",
      subtitle: "(R$ 29,90 do plano base + R$ 30,00 da telemedicina para todos os participantes)",
      features: [
        { text: "Acesso ao Clube de Vantagens Medic Benefícios", included: true },
        { text: "Descontos exclusivos em consultas médicas, exames laboratoriais e de imagem", included: true },
        { text: "Benefícios estendidos para até 7 dependentes sem custo adicional", included: true },
        { text: "Parcerias com clínicas, farmácias, laboratórios, academias e serviços de estética", included: true },
        { text: "Sem carência, sem limite de idade, sem burocracia", included: true },
        { text: "Telemedicina ilimitada 24h para todos os beneficiários (clínico geral e especialidades)", included: true },
        { text: "Receituário digital com validade em todo território nacional", included: true },
        { text: "Acompanhamento médico online para condições crônicas, dúvidas e orientações de saúde", included: true },
        { text: "Atendimento sem agendamento, direto pelo celular ou computador", included: true },
      ],
      cta: "Ideal para quem busca praticidade e atendimento médico rápido, onde estiver!",
      highlighted: true,
    },
  ];

  return (
    <section id="planos" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Chegou a hora de escolher como você vai cuidar da sua família:
          </h2>
          <p className="text-lg text-muted-foreground">
            Saúde, economia e proteção para você e até 7 dependentes!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={plan.highlighted ? "border-secondary shadow-lg" : ""}
            >
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">{plan.highlighted ? "💙" : "🛡️"}</div>
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                {plan.subtitle && (
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-medium text-center mb-4">{plan.cta}</p>
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90" 
                    size="lg"
                    asChild
                  >
                    <a href="#adquirir">Adquira Agora</a>
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
