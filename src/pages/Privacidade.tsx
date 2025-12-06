import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Shield, 
  Database, 
  FileText, 
  Cookie, 
  Lock, 
  UserCheck, 
  Share2, 
  RefreshCw, 
  Mail,
  ArrowLeft,
  CheckCircle
} from "lucide-react";

const Privacidade = () => {
  const sections = [
    {
      id: 1,
      icon: Shield,
      title: "Compromisso com a sua privacidade",
      content: "A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao acessar o site beneficiosmedic.com.br."
    },
    {
      id: 2,
      icon: Database,
      title: "Coleta de dados",
      content: "Coletamos dados pessoais apenas quando necessário para:",
      list: [
        "Entrar em contato com você",
        "Processar sua solicitação de plano",
        "Melhorar a experiência de navegação"
      ],
      extra: "Os dados podem incluir: nome, e-mail, telefone, CPF, data de nascimento, e informações relacionadas à contratação de planos."
    },
    {
      id: 3,
      icon: FileText,
      title: "Uso das informações",
      content: "As informações coletadas são utilizadas para:",
      list: [
        "Enviar propostas ou informações sobre nossos planos",
        "Entrar em contato por telefone, e-mail ou WhatsApp",
        "Personalizar sua experiência no site",
        "Cumprir obrigações legais e contratuais"
      ],
      extra: "Não compartilhamos seus dados com terceiros sem sua autorização, exceto quando necessário para prestação de serviço ou cumprimento legal."
    },
    {
      id: 4,
      icon: Cookie,
      title: "Cookies e tecnologias semelhantes",
      content: "Utilizamos cookies para melhorar a navegação, entender o comportamento do visitante e personalizar anúncios. Você pode desativá-los nas configurações do seu navegador."
    },
    {
      id: 5,
      icon: Lock,
      title: "Armazenamento e segurança dos dados",
      content: "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda ou divulgação indevida."
    },
    {
      id: 6,
      icon: UserCheck,
      title: "Direitos do titular dos dados (LGPD)",
      content: "Você tem direito de:",
      list: [
        "Confirmar a existência de tratamento",
        "Acessar seus dados",
        "Corrigir dados incompletos, inexatos ou desatualizados",
        "Solicitar a exclusão ou anonimização de dados",
        "Revogar o consentimento"
      ],
      extra: "Para exercer qualquer desses direitos, envie uma solicitação para nosso e-mail de contato abaixo."
    },
    {
      id: 7,
      icon: Share2,
      title: "Compartilhamento de dados",
      content: "Seus dados podem ser compartilhados com plataformas de pagamento, operadoras parceiras e fornecedores de tecnologia, sempre com o objetivo de viabilizar a contratação e a prestação de nossos serviços."
    },
    {
      id: 8,
      icon: RefreshCw,
      title: "Alterações nesta política",
      content: "Esta política pode ser atualizada periodicamente. Recomendamos que você a revise sempre que visitar nosso site.",
      extra: "Última atualização: 06 de agosto de 2025"
    },
    {
      id: 9,
      icon: Mail,
      title: "Contato",
      content: "Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos como titular dos dados, entre em contato:",
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
              <Shield className="h-4 w-4" />
              <span>Transparência e Segurança</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Política de Privacidade
            </h1>
            
            <p className="text-xl text-white/70">
              Medic Benefícios - Saiba como tratamos e protegemos suas informações pessoais.
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
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="space-y-2 ml-1">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.extra && (
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {section.extra}
                    </p>
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

export default Privacidade;
