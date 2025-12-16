import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";

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
    {
      question: "Quantas pessoas posso incluir no meu cartão?",
      answer: "Com o Cartão Solidário você pode incluir até 7 dependentes, totalizando 8 pessoas com cobertura completa. Isso inclui cônjuge, filhos, pais e outros familiares.",
    },
    {
      question: "Existe carência para começar a usar?",
      answer: "Não! Uma das grandes vantagens do Cartão Solidário é que não existe período de carência. Você pode começar a utilizar todos os benefícios imediatamente após a confirmação do seu cadastro.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-blue-50/50 via-background to-primary/[0.03] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="container relative max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <HelpCircle className="h-4 w-4" />
                <span>Tire suas dúvidas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Perguntas{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Separamos algumas das perguntas que mais recebemos de nossos clientes e que podem ser as suas também.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 rounded-full h-12 px-6 font-semibold shadow-lg shadow-primary/20" 
                asChild
              >
                <a href="#planos" className="flex items-center gap-2">
                  Adquira Agora
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 rounded-2xl bg-white shadow-md shadow-gray-200/50 overflow-hidden data-[state=open]:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-gray-50/50 font-medium text-foreground [&[data-state=open]]:text-primary transition-colors duration-200">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                    <div className="pl-11">
                      {faq.answer}
                    </div>
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
