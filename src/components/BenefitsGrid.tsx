import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Video, Users, FileText, Tag, Gift } from "lucide-react";

export const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Consultas Médicas:",
      description: "Tenha acesso rápido a médicos especializados, sem precisar esperar meses para ser atendido. O Cartão Solidário garante que você possa consultar com especialistas sempre que precisar.",
    },
    {
      icon: Video,
      title: "Telemedicina:",
      description: "Realize consultas online com médicos de qualquer lugar, sem filas e no conforto da sua casa. Não perca tempo esperando por consultas presenciais. A telemedicina traz praticidade e rapidez para o seu dia a dia.",
    },
    {
      icon: Users,
      title: "Cobertura Familiar:",
      description: "Até 8 pessoas da sua família podem ser beneficiadas com o Cartão Solidário. A solução ideal para quem precisa de cuidados médicos de qualidade para toda a família, com um único cartão.",
    },
    {
      icon: FileText,
      title: "Exames Laboratoriais a Partir de R$3,00:",
      description: "Exames de qualidade, realizados em laboratórios credenciados, com preços acessíveis e resultados rápidos. Cuide da sua saúde sem comprometer o orçamento da sua família.",
    },
    {
      icon: Tag,
      title: "Descontos em Farmácias e Óticas:",
      description: "Aproveite descontos especiais em farmácias e óticas parceiras, reduzindo ainda mais os custos com medicamentos e óculos. A saúde vai além das consultas, e você também pode cuidar da saúde financeira.",
    },
    {
      icon: Gift,
      title: "Programa de Descontos",
      description: "Além de descontos em farmácias e óticas, o cartão solidário oferece um vasto programa de descontos em serviços com médicos de mais de 28 especialidades.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Sabemos o quanto é difícil arcar com os custos de saúde para uma família.
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto">
            Pensando nisso, o Cartão Solidário foi criado para oferecer uma alternativa simples e econômica para que você e sua família 
            possam ter acesso a cuidados médicos de qualidade, sem a necessidade de comprometer o seu orçamento. Aqui, você 
            encontra consultas rápidas, telemedicina, exames acessíveis e muito mais, tudo com um preço justo e sem a burocracia dos 
            planos de saúde tradicionais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
