import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, MessageCircle } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Com o Cartão Solidário, consegui realizar todos os exames de rotina e ainda aproveitei os descontos em farmácias. Realmente é a melhor solução para quem não pode pagar um plano de saúde.",
      author: "Carlos Silva",
      role: "Empresário",
      avatar: "CS",
      rating: 5,
    },
    {
      quote: "A telemedicina mudou a minha vida! Agora consigo consultar com especialistas sem sair de casa, economizando tempo e dinheiro. O Cartão Solidário é essencial para minha família.",
      author: "Maria Santos",
      role: "Professora",
      avatar: "MS",
      rating: 5,
    },
    {
      quote: "Não acreditava que seria possível ter acesso a tantos benefícios por um valor tão acessível. Minha família toda usa e só temos elogios para o Cartão Solidário!",
      author: "João Pereira",
      role: "Autônomo",
      avatar: "JP",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/20 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full" />
      
      <div className="container relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Depoimentos reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes têm a dizer sobre a experiência com a Medic Benefícios!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 transition-all duration-500 hover:-translate-y-1 ${
                index === 0 
                  ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/20" 
                  : "bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl"
              }`}
            >
              <CardContent className="p-8 space-y-6 relative">
                {/* Quote icon */}
                <div className={`absolute top-6 right-6 ${index === 0 ? "text-white/10" : "text-primary/10"}`}>
                  <Quote className="h-12 w-12" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 fill-current ${
                      index === 0 ? "text-yellow-300" : "text-yellow-400"
                    }`} />
                  ))}
                </div>
                
                <p className={`text-base leading-relaxed relative z-10 ${
                  index === 0 ? "text-white/90" : "text-foreground"
                }`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${
                    index === 0 
                      ? "bg-white/20 text-white" 
                      : "bg-gradient-to-br from-primary to-secondary text-white"
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className={`font-semibold ${index === 0 ? "text-white" : "text-foreground"}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm ${index === 0 ? "text-white/70" : "text-muted-foreground"}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">Famílias atendidas</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};
