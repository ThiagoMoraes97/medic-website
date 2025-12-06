import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Video, Users, FileText, Tag, Gift } from "lucide-react";

export const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      description: "Tenha acesso rápido a médicos especializados, sem precisar esperar meses para ser atendido. O Cartão Solidário garante que você possa consultar com especialistas sempre que precisar.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Video,
      title: "Telemedicina 24h",
      description: "Realize consultas online com médicos de qualquer lugar, sem filas e no conforto da sua casa. Não perca tempo esperando por consultas presenciais.",
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: Users,
      title: "Cobertura Familiar",
      description: "Até 8 pessoas da sua família podem ser beneficiadas com o Cartão Solidário. A solução ideal para quem precisa de cuidados médicos de qualidade para toda a família.",
      color: "from-secondary to-emerald-500",
      bgColor: "bg-secondary/10",
    },
    {
      icon: FileText,
      title: "Exames a Partir de R$3",
      description: "Exames de qualidade, realizados em laboratórios credenciados, com preços acessíveis e resultados rápidos. Cuide da sua saúde sem comprometer o orçamento.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Tag,
      title: "Descontos Exclusivos",
      description: "Aproveite descontos especiais em farmácias e óticas parceiras, reduzindo ainda mais os custos com medicamentos e óculos.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Gift,
      title: "28+ Especialidades",
      description: "Além de descontos em farmácias e óticas, o cartão solidário oferece um vasto programa de descontos em serviços com médicos de mais de 28 especialidades.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-gradient-to-b from-blue-50 via-primary/[0.03] to-emerald-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Por que escolher o Cartão Solidário?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sabemos o quanto é difícil arcar com os{" "}
            <span className="text-primary">custos de saúde</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pensando nisso, o Cartão Solidário foi criado para oferecer uma alternativa simples e econômica para que você e sua família 
            possam ter acesso a cuidados médicos de qualidade, sem comprometer o seu orçamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-1"
            >
              <CardContent className="p-8 space-y-5">
                <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                  <benefit.icon className={`h-7 w-7 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
              
              {/* Hover gradient accent */}
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
