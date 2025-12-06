import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  FileText, 
  CheckCircle2, 
  Briefcase, 
  UserCog, 
  Copyright, 
  AlertTriangle, 
  ShieldCheck, 
  Settings,
  Mail,
  ArrowLeft,
  CheckCircle,
  XCircle
} from "lucide-react";

const Termos = () => {
  const sections = [
    {
      id: 1,
      icon: CheckCircle2,
      title: "Aceitação dos Termos",
      content: "O acesso e a utilização do site beneficiosmedic.com.br e de seus serviços estão condicionados à sua aceitação integral e irrestrita destes Termos de Uso. O uso contínuo do site constitui sua aceitação tácita e integral. Se você não concordar com estes Termos, você não deve utilizar o site."
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Descrição dos Serviços",
      content: "O site beneficiosmedic.com.br atua como uma plataforma de apresentação, consulta e intermediação de informações relativas à contratação de planos de saúde, seguros e/ou benefícios de diversas operadoras parceiras.",
      subsections: [
        {
          subtitle: "Finalidade",
          text: "Fornecer ao usuário informações detalhadas, opções de planos e a possibilidade de solicitar contato ou cotações para a contratação dos referidos serviços."
        },
        {
          subtitle: "Intermediação",
          text: "A Medic Benefícios é uma intermediadora de negócios, não sendo a operadora final ou a responsável pela prestação direta dos serviços de saúde ou benefícios contratados."
        }
      ]
    },
    {
      id: 3,
      icon: UserCog,
      title: "Direitos e Responsabilidades do Usuário",
      content: "O usuário se compromete a utilizar o site de forma ética e legal, respeitando a legislação brasileira vigente.",
      subsections: [
        {
          subtitle: "3.1. Conduta e Informações",
          items: [
            { label: "Veracidade", text: "O usuário declara que todas as informações fornecidas no site (incluindo nome, e-mail, telefone, CPF, data de nascimento e dados para cotação) são verdadeiras, precisas e completas." },
            { label: "Uso Pessoal", text: "O site destina-se ao uso pessoal e não comercial, salvo se expressamente autorizado por escrito." }
          ]
        }
      ],
      prohibitions: [
        "Violar, tentar violar ou contornar quaisquer medidas de segurança do site.",
        "Enviar ou transmitir conteúdo ilegal, difamatório, ameaçador, obsceno ou que infrinja direitos de terceiros.",
        "Utilizar scripts, bots ou qualquer meio automatizado para acessar, copiar ou monitorar qualquer parte do site."
      ],
      extra: {
        subtitle: "3.2. Responsabilidade por Dados",
        text: "O usuário é o único responsável pela precisão e veracidade dos dados fornecidos e pelo uso indevido de qualquer informação de terceiros, se aplicável. A Medic Benefícios se reserva o direito de suspender ou encerrar o acesso de qualquer usuário que forneça informações falsas."
      }
    },
    {
      id: 4,
      icon: Copyright,
      title: "Propriedade Intelectual",
      content: "Todo o conteúdo disponível no site beneficiosmedic.com.br, incluindo, mas não se limitando a, textos, gráficos, logotipos, ícones, imagens, vídeos, software, código-fonte, marcas e layouts, são de propriedade exclusiva da Medic Benefícios ou de seus licenciadores, e são protegidos pela legislação de propriedade intelectual aplicável (Direitos Autorais e Propriedade Industrial).",
      subsections: [
        {
          subtitle: "Não Licença",
          text: "A utilização do site não confere ao usuário qualquer direito de uso sobre as marcas, nomes comerciais e logotipos da Medic Benefícios."
        },
        {
          subtitle: "Uso Restrito",
          text: "O usuário não poderá copiar, reproduzir, modificar, republicar, distribuir ou criar obras derivadas de qualquer material do site sem a prévia e expressa autorização por escrito da Medic Benefícios."
        }
      ]
    },
    {
      id: 5,
      icon: AlertTriangle,
      title: "Limitação de Responsabilidade",
      content: "A Medic Benefícios envidará seus melhores esforços para garantir a disponibilidade e a segurança do site, mas não pode garantir que o serviço será ininterrupto, livre de erros ou totalmente seguro.",
      subsections: [
        {
          subtitle: "Isenção por Serviços Terceirizados",
          text: "A Medic Benefícios não se responsabiliza por quaisquer falhas, atrasos, danos ou prejuízos decorrentes dos planos de saúde, seguros ou benefícios contratados diretamente com as operadoras parceiras. A responsabilidade pela prestação e cobertura dos serviços é exclusiva da operadora/seguradora contratada."
        },
        {
          subtitle: "Danos",
          text: "A Medic Benefícios não será responsável por quaisquer perdas ou danos, diretos, indiretos, incidentais ou consequenciais, resultantes do uso ou da incapacidade de usar o site."
        }
      ]
    },
    {
      id: 6,
      icon: ShieldCheck,
      title: "Privacidade e Proteção de Dados (LGPD)",
      content: "O tratamento dos dados pessoais coletados pela Medic Benefícios é regido pela Política de Privacidade da empresa, disponível em uma seção específica do site.",
      extra: {
        subtitle: "Aceitação",
        text: "Ao aceitar estes Termos de Uso, você também concorda e aceita os termos da nossa Política de Privacidade."
      },
      link: {
        text: "Ver Política de Privacidade",
        href: "/privacidade"
      }
    },
    {
      id: 7,
      icon: Settings,
      title: "Disposições Finais",
      subsections: [
        {
          subtitle: "7.1. Modificações",
          text: "A Medic Benefícios se reserva o direito de, a qualquer momento, modificar, alterar ou descontinuar qualquer aspecto ou funcionalidade do site, bem como atualizar estes Termos de Uso, sem aviso prévio. A utilização contínua do site após as alterações constitui sua aceitação dos novos Termos."
        },
        {
          subtitle: "7.2. Legislação e Foro",
          text: "Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. As partes elegem o Foro da Comarca da sede da Medic Benefícios para dirimir quaisquer dúvidas ou controvérsias decorrentes destes Termos, com a renúncia expressa a qualquer outro, por mais privilegiado que seja."
        }
      ]
    },
    {
      id: 8,
      icon: Mail,
      title: "Contato",
      content: "Para quaisquer dúvidas ou esclarecimentos sobre estes Termos de Uso, entre em contato através do e-mail:",
      email: "contato@medicbeneficios.com.br"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 pt-16 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site
          </Link>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              <span>Documento Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Termos de Uso
            </h1>
            
            <p className="text-xl text-white/70 mb-4">
              Medic Benefícios - Regras e condições para utilização dos nossos serviços.
            </p>
            
            <p className="text-sm text-white/50">
              Última atualização: 04 de Dezembro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container max-w-4xl">
          <div className="divide-y divide-border">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex items-start gap-6 ${index === 0 ? 'pb-14' : 'py-14'}`}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {section.id}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  
                  {section.content && (
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  
                  {section.subsections && (
                    <div className="space-y-4 pt-2">
                      {section.subsections.map((sub, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-foreground mb-2">{sub.subtitle}</h3>
                          {sub.text && (
                            <p className="text-muted-foreground leading-relaxed">{sub.text}</p>
                          )}
                          {sub.items && (
                            <div className="space-y-3 mt-3">
                              {sub.items.map((item, idx) => (
                                <div key={idx}>
                                  <span className="font-medium text-foreground">{item.label}:</span>{" "}
                                  <span className="text-muted-foreground">{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.prohibitions && (
                    <div className="pt-2">
                      <h3 className="font-semibold text-foreground mb-3">É vedado ao usuário:</h3>
                      <ul className="space-y-2">
                        {section.prohibitions.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.extra && (
                    <div className="pt-2">
                      <h3 className="font-semibold text-foreground mb-2">{section.extra.subtitle}</h3>
                      <p className="text-muted-foreground leading-relaxed">{section.extra.text}</p>
                    </div>
                  )}
                  
                  {section.link && (
                    <Link 
                      to={section.link.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {section.link.text} →
                    </Link>
                  )}
                  
                  {section.email && (
                    <a 
                      href={`mailto:${section.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {section.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Back to top */}
          <div className="mt-16 text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Termos;
