# Medic Benefícios - Website

Platform moderna e responsiva para apresentação dos planos de saúde solidária Medic Benefícios.

##  Sobre o Projeto

Medic Benefícios é uma solução de saúde acessível que oferece:
- **Planos flexíveis** (Essencial Vida e Conecta Saúde)
- **Cobertura para até 8 pessoas** da família
- **Telemedicina 24h** (plano Conecta Saúde)
- **Rede credenciada** com 500+ estabelecimentos em todo Brasil
- **Sem carência** e sem burocracia

##  Características

### Páginas Principais
- **Home** - Seção hero, benefícios, como funciona, planos, depoimentos e FAQ
- **Planos** - Comparativo detalhado entre planos com checkouts integrados
- **Rede Credenciada** - Buscador de clínicas e laboratórios com filtros
- **Privacidade** - Política de privacidade completa
- **Termos de Uso** - Termos e condições

### Design & UX
-  **Glassmorphism header** com blur effect profissional
-  **Design system moderno** com Tailwind CSS
-  **Totalmente responsivo** (mobile, tablet, desktop)
-  **Performance otimizada** com Vite
-  **Animações suaves** e transições profissionais
-  **Integração WhatsApp** para contato direto

### Componentes
- Sistema de cards com efeitos 3D
- Premium card designs com chips metálicos
- Filtros e buscadores interativos
- Accordion FAQs
- Badges e badges de status
- Floating buttons para WhatsApp

##  Tecnologias

- **Framework**: React 18+ com TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS custom properties
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Icons**: Lucide React

##  Configuração Local

### Pré-requisitos
- Node.js (v16+)
- npm ou bun

### Instalação

\\\ash
# Clonar o repositório
git clone https://github.com/ThiagoMoraes97/medic-website.git

# Entrar no diretório
cd medic-website

# Instalar dependências
npm install
# ou
bun install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
bun run dev
\\\

O site estará disponível em \http://localhost:5173\

##  Scripts Disponíveis

\\\ash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build de produção
npm run lint     # Verifica erros com ESLint
\\\

##  Estrutura do Projeto

\\\
src/
 components/          # Componentes reutilizáveis
    Header.tsx      # Navegação com glassmorphism
    Footer.tsx      # Rodapé
    HeroSection.tsx # Seção principal com card premium
    PlansSection.tsx
    BenefitsGrid.tsx
    HowItWorks.tsx
    TestimonialsSection.tsx
    FAQSection.tsx
    CTASection.tsx
    ui/             # Componentes shadcn/ui
 pages/              # Páginas da aplicação
    Index.tsx       # Homepage
    Planos.tsx      # Página de planos
    Clinicas.tsx    # Rede credenciada
    Privacidade.tsx # Política de privacidade
    Termos.tsx      # Termos de uso
    NotFound.tsx    # 404
 lib/
    utils.ts        # Utilitários
 App.tsx             # Componente principal
 main.tsx            # Entry point
\\\

##  Funcionalidades Principais

### Home
- Hero section com card premium 3D
- Seção de benefícios com ícones
- Como funciona (passo a passo)
- Planos destacados
- Depoimentos de clientes
- Seção de FAQ interativa
- CTA final para conversão

### Planos
- Comparativo detalhado dos 2 planos
- Tabela de funcionalidades
- Links de checkout integrados
- Depoimentos
- Garantias e trustmarks

### Rede Credenciada
- Buscador de clínicas
- Filtros por especialidade e estado
- Cards com informações completas
- Avaliações e horários

##  Contato

- **WhatsApp**: +55 21 2042-0127
- **Google Maps**: https://maps.app.goo.gl/HQgxDwSeWbCFQ1b68

##  Segurança & Privacidade

O site está em conformidade com:
- LGPD (Lei Geral de Proteção de Dados)
- Termos e políticas claramente estabelecidas

##  Funcionalidades Futuras

- [ ] Integração com backend para checkout
- [ ] Área do Cliente (dashboard)
- [ ] Chat com IA para suporte
- [ ] Blog e artigos sobre saúde

##  Licença

Proprietary - Medic Benefícios

##  Autor

Desenvolvido por Thiago Moraes

---

**Status**:  Em produção

Última atualização: Dezembro 5, 2025
