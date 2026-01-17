import { Facebook, Instagram, MapPin, Phone, Mail, Heart, ExternalLink } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "/" },
    { label: "Planos", href: "/planos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "FAQ", href: "#faq" },
    { label: "Rede Credenciada", href: "/clinicas" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="Medic Benefícios" className="h-12 w-auto brightness-0 invert transition-opacity duration-300 hover:opacity-80" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Cuidando da saúde da sua família com qualidade e preços acessíveis. Mais de 10.000 famílias já confiam em nós.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/medicbeneficios/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/medicbeneficios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-secondary transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary transition-colors duration-200" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-4">
              <a 
                href="tel:+552120420127" 
                className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors duration-200 text-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-200">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(21) 2042-0127</span>
              </a>
              <a 
                href="mailto:contato@medicbeneficios.com.br" 
                className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors duration-200 text-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contato@medicbeneficios.com.br</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Localização</h3>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <address className="not-italic leading-relaxed">
                Rua Coronel Francisco Soares, 221<br />
                Centro, Nova Iguaçu - RJ<br />
                Brasil
              </address>
            </div>
            <a 
              href="https://maps.app.goo.gl/HQgxDwSeWbCFQ1b68" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary text-sm hover:underline"
            >
              <span>Ver no mapa</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2025 Todos os Direitos Reservados - Medic Benefícios
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacidade" className="text-white/40 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-white/40 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-white/30 text-xs flex items-center justify-center gap-1">
              Feito com <Heart className="h-3 w-3 text-red-500 fill-red-500" /> para cuidar de você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
