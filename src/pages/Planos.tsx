import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  X,
  Shield, 
  Crown,
  ArrowRight,
  Star,
  Users,
  Clock,
  Heart,
  Sparkles,
  CheckCircle,
  Zap,
  Gift,
  Phone,
  Stethoscope,
  Video
} from "lucide-react";

const Planos = () => {
  const plans = [
    {
      id: "essencial",
      name: "ESSENCIAL VIDA",
      icon: Shield,
      price: "29",
      cents: "90",
      perDay: "menos de R$1/dia",
      checkoutUrl: "https://planos-checkout.nemasaude.com.br/medic-beneficios/essencial-vida?v=1506",
      subtitle: "Economia e qualidade para sua família",
      description: "O plano perfeito para quem busca acesso à saúde de qualidade com o melhor custo-benefício do mercado. Ideal para famílias que querem economizar sem abrir mão de cuidados médicos essenciais.",
      features: [
        { text: "Acesso ao Clube de Vantagens Medic Benefícios", included: true },
        { text: "Descontos exclusivos em consultas médicas", included: true },
        { text: "Descontos em exames laboratoriais e de imagem", included: true },
        { text: "Até 7 dependentes sem custo adicional", included: true },
        { text: "Parcerias com clínicas, farmácias e laboratórios", included: true },
        { text: "Parcerias com academias e serviços de estética", included: true },
        { text: "Sem carência, sem limite de idade", included: true },
        { text: "Sem burocracia para adesão", included: true },
        { text: "Telemedicina ilimitada 24h", included: false },
        { text: "Receituário digital nacional", included: false },
        { text: "Acompanhamento médico online", included: false },
      ],
      benefits: [
        { icon: Users, text: "Até 8 pessoas cobertas" },
        { icon: Gift, text: "Descontos exclusivos" },
        { icon: Stethoscope, text: "28+ especialidades" },
      ],
      color: "primary",
      gradient: "from-primary to-blue-600",
      bgGradient: "from-blue-50 to-primary/5",
    },
    {
      id: "conecta",
      name: "CONECTA SAÚDE",
      icon: Crown,
      price: "59",
      cents: "90",
      perDay: "R$2/dia",
      checkoutUrl: "https://planos-checkout.nemasaude.com.br/medic-beneficios/conecta-saude?v=1506",
      subtitle: "Tudo do Essencial + Telemedicina completa",
      description: "A solução completa para quem valoriza praticidade e quer atendimento médico na palma da mão. Consulte especialistas 24h por dia, 7 dias por semana, sem sair de casa.",
      features: [
        { text: "Tudo do plano Essencial Vida incluído", included: true, highlight: true },
        { text: "Telemedicina ilimitada 24h para todos", included: true },
        { text: "Receituário digital válido em todo Brasil", included: true },
        { text: "Acompanhamento médico online para condições crônicas", included: true },
        { text: "Atendimento sem agendamento prévio", included: true },
        { text: "Acesso direto pelo celular ou computador", included: true },
        { text: "Histórico médico digital", included: true },
        { text: "Lembretes de medicação", included: true },
        { text: "Suporte prioritário", included: true },
      ],
      benefits: [
        { icon: Video, text: "Telemedicina 24h" },
        { icon: Clock, text: "Sem agendamento" },
        { icon: Phone, text: "Acesso imediato" },
      ],
      highlighted: true,
      color: "secondary",
      gradient: "from-secondary to-emerald-500",
      bgGradient: "from-emerald-50 to-secondary/5",
    },
  ];

  const testimonials = [
    {
      quote: "Economizei mais de R$500 em consultas e exames no primeiro mês. O Cartão Solidário mudou a forma como cuido da saúde da minha família.",
      author: "Maria Silva",
      role: "Mãe de 3 filhos",
    },
    {
      quote: "A telemedicina é incrível! Consegui atendimento às 2h da manhã quando meu filho teve febre. Não precisei ir ao pronto-socorro.",
      author: "Carlos Santos",
      role: "Empresário",
    },
  ];

  const guarantees = [
    { icon: Shield, title: "Sem Carência", description: "Use seus benefícios imediatamente após a adesão" },
    { icon: Users, title: "Toda a Família", description: "Inclua até 7 dependentes sem custo adicional" },
    { icon: Zap, title: "Ativação Rápida", description: "Comece a usar em minutos após o cadastro" },
    { icon: Heart, title: "Sem Burocracia", description: "Processo 100% online, simples e rápido" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Mais de 10.000 famílias já confiam em nós</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Escolha o plano ideal para{" "}
              <span className="bg-gradient-to-r from-secondary to-emerald-300 bg-clip-text text-transparent">
                cuidar de quem você ama
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Saúde de qualidade com preços que cabem no seu bolso. Consultas, exames e telemedicina para toda a família.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {guarantees.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background relative">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden border-0 transition-all duration-500 ${
                  plan.highlighted 
                    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-slate-900/20 ring-2 ring-secondary/50" 
                    : "bg-white shadow-xl shadow-gray-200/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                    MAIS POPULAR
                  </div>
                )}

                <CardContent className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.highlighted 
                        ? "bg-gradient-to-br from-secondary to-emerald-500" 
                        : "bg-gradient-to-br from-primary to-blue-600"
                    }`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                        {plan.name}
                      </h2>
                      <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-lg ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>R$</span>
                      <span className={`text-6xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                        ,{plan.cents}
                      </span>
                      <span className={`text-lg ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>/mês</span>
                    </div>
                    <p className={`text-sm mt-1 ${plan.highlighted ? "text-secondary" : "text-primary"}`}>
                      {plan.perDay}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>

                  {/* Quick Benefits */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-8">
                    {plan.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className={`text-center p-2 md:p-3 rounded-xl ${
                          plan.highlighted ? "bg-white/5" : "bg-gray-50"
                        }`}
                      >
                        <benefit.icon className={`h-5 w-5 mx-auto mb-1 ${
                          plan.highlighted ? "text-secondary" : "text-primary"
                        }`} />
                        <span className={`text-[10px] md:text-xs font-medium leading-tight block ${
                          plan.highlighted ? "text-white/80" : "text-foreground"
                        }`}>
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            feature.highlight ? "text-secondary" : plan.highlighted ? "text-secondary" : "text-primary"
                          }`} />
                        ) : (
                          <X className="h-5 w-5 flex-shrink-0 mt-0.5 text-gray-300" />
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? plan.highlighted ? "text-white/90" : "text-foreground"
                            : "text-gray-400 line-through"
                        } ${feature.highlight ? "font-semibold" : ""}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.highlighted 
                        ? "bg-gradient-to-r from-secondary to-emerald-500 hover:from-secondary/90 hover:to-emerald-500/90 text-white shadow-lg shadow-secondary/30" 
                        : "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg shadow-primary/20"
                    }`}
                    asChild
                  >
                    <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Quero este plano
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>

                  {/* Trust text */}
                  <p className={`text-center text-xs mt-4 ${plan.highlighted ? "text-white/50" : "text-muted-foreground"}`}>
                    Cancele quando quiser • Sem multas • Sem fidelidade
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gradient-to-b from-background to-blue-50/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Medic Benefícios?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais do que um cartão de benefícios, somos seu parceiro na jornada pela saúde
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {guarantees.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                clientes
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comece a cuidar da sua saúde hoje mesmo
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Escolha seu plano e tenha acesso imediato a todos os benefícios. Sem carência, sem burocracia.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-8 text-lg font-semibold shadow-xl"
                asChild
              >
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  Escolher meu plano
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Planos;
