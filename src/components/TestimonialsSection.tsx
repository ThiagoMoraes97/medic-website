import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Com o Cartão Solidário, consegui realizar todos os exames de rotina e ainda aproveitei os descontos em farmácias. Realmente é a melhor solução para quem não pode pagar um plano de saúde.",
      author: "Carlos Silva",
      role: "Empresário",
    },
    {
      quote: "A telemedicina mudou a minha vida! Agora consigo consultar com especialistas sem sair de casa, economizando tempo e dinheiro. O Cartão Solidário é essencial para minha família.",
      author: "Maria Santos",
      role: "Professora",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Depoimentos de quem já utiliza o Cartão Solidário
          </h2>
          <p className="text-lg text-muted-foreground">
            Coletamos alguns depoimentos de clientes que fizeram parte do nosso lançamento teste há alguns meses:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={index === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}>
              <CardContent className="p-8 space-y-6">
                <Quote className={`h-10 w-10 ${index === 0 ? "text-primary-foreground/20" : "text-primary/20"}`} />
                <p className={`text-lg italic ${index === 0 ? "text-primary-foreground" : ""}`}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className={`font-semibold ${index === 0 ? "text-primary-foreground" : ""}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
