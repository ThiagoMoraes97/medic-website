import { Facebook, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Medic Benefícios" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Medic</span>
                <span className="text-sm font-semibold text-secondary">Benefícios</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Localização</h3>
            <address className="not-italic text-primary-foreground/80">
              Rua Coronel Francisco Soares, 221, Centro, Nova Iguaçu - RJ - Brasil
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contatos</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a href="tel:+552120420127" className="hover:text-secondary transition-colors">
                  (21) 2042-0127
                </a>
              </p>
              <p>
                <a href="mailto:contato@medicbeneficios.com.br" className="hover:text-secondary transition-colors">
                  contato@medicbeneficios.com.br
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Todos os Direitos Reservados - Medic Benefícios - Política de Privacidade</p>
        </div>
      </div>
    </footer>
  );
};
