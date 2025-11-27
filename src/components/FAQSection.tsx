import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Quais serviços estão inclusos no Cartão Solidário?",
      answer: "O Cartão Solidário oferece acesso a consultas médicas com descontos, telemedicina 24h (no plano Conecta Saúde), exames laboratoriais a partir de R$3,00, descontos em farmácias e óticas parceiras, além de um programa de descontos em mais de 28 especialidades médicas.",
    },
    {
      question: "Quanto custa o Cartão Solidário?",
      answer: "O valor do Cartão Solidário é acessível e depende do número de pessoas da sua família que deseja incluir no plano. O plano Essencial Vida custa R$29,90 mensais e o Conecta Saúde R$59,90 mensais. Clique para saber mais sobre os planos disponíveis.",
    },
    {
      question: "Preciso de algum tipo de documentação para me cadastrar?",
      answer: "O processo de cadastro é simples e rápido. Você precisará apenas de documentos básicos de identificação e informações de contato. Não há necessidade de documentação médica ou comprovação de renda.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-muted-foreground">
              Separamos algumas das perguntas que mais recebemos de nossos clientes e que podem ser as suas também:
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="#adquirir">Adquira Agora</a>
            </Button>
          </div>

          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-4 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
