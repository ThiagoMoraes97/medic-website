import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Phone, Clock, Star, Filter, Building2, Sparkles, ArrowRight, CheckCircle, Users, Heart } from "lucide-react";

interface Clinica {
  id: number;
  nome: string;
  especialidades: string[];
  exames: string[];
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  horario: string;
  imagem: string;
}

const clinicasMock: Clinica[] = [
  {
    id: 1,
    nome: "Clínica DH Med",
    especialidades: ["Alergista", "Angiologista", "Clínico Geral", "Dermatologista", "Endocrinologista", "Gastroenterologista", "Geriatra", "Ginecologista", "Mastologista", "Neurologista", "Nutricionista", "Oftalmologista", "Ortopedista", "Otorrino", "Pediatra", "Proctologista", "Reumatologista", "Urologista", "Fonoaudiologista", "Psicologia", "Fisioterapia"],
    exames: ["Mamografia", "Ultrassonografia", "Ultrassonografia c/ doppler", "Gonioscopia", "Pam", "Mapeamento de retina", "Raio-X", "Mapa 24h", "Holter 24h", "Ecocardiograma", "Eco Vértebras", "Doppler A.V", "Doppler A. Renais"],
    endereco: "Estr. Caetano Monteiro, 789 - Badu",
    cidade: "Niterói",
    estado: "RJ",
    telefone: "(21) 99571-7282",
    horario: "Seg-Sex: 8h às 19h | Sáb: 8h às 12h",
    imagem: "https://i.imgur.com/fP5VBnn.png",
  },
  {
    id: 2,
    nome: "Clínica DH Med - Alcântara",
    especialidades: ["Alergista", "Angiologista", "Clínico Geral", "Dermatologista", "Endocrinologista", "Gastroenterologista", "Geriatra", "Ginecologista", "Mastologista", "Neurologista", "Nutricionista", "Oftalmologista", "Ortopedista", "Otorrino", "Pediatra", "Proctologista", "Reumatologista", "Urologista", "Fonoaudiologista", "Psicologia", "Fisioterapia"],
    exames: [],
    endereco: "Rua Manoel João Gonçalves, N 414 - Sala 201 - Alcântara",
    cidade: "São Gonçalo",
    estado: "RJ",
    telefone: "(21) 99571-7282",
    horario: "Seg-Sex: 8h às 19h",
    imagem: "https://i.imgur.com/0kIZLLB.png",
  },
  {
    id: 3,
    nome: "Clínica DH Med - Santa Rosa",
    especialidades: ["Alergista", "Angiologista", "Clínico Geral", "Dermatologista", "Endocrinologista", "Gastroenterologista", "Geriatra", "Ginecologista", "Mastologista", "Neurologista", "Nutricionista", "Oftalmologista", "Ortopedista", "Otorrino", "Pediatra", "Proctologista", "Reumatologista", "Urologista", "Fonoaudiologista", "Psicologia", "Fisioterapia"],
    exames: [],
    endereco: "Rua Noronha Torrezão, 18 - Santa Rosa",
    cidade: "Niterói",
    estado: "RJ",
    telefone: "(21) 99571-7282",
    horario: "Seg-Sex: 8h às 19h",
    imagem: "https://i.imgur.com/th5DnvX.png",
  },
];

const especialidadesUnicas = [...new Set(clinicasMock.flatMap((c) => c.especialidades))];
const cidadesUnicas = [...new Set(clinicasMock.map((c) => c.cidade))];

const Clinicas = () => {
  const [busca, setBusca] = useState("");
  const [especialidade, setEspecialidade] = useState<string>("todas");
  const [regiao, setRegiao] = useState<string>("todas");

  const clinicasFiltradas = clinicasMock.filter((clinica) => {
    const matchBusca =
      clinica.nome.toLowerCase().includes(busca.toLowerCase()) ||
      clinica.cidade.toLowerCase().includes(busca.toLowerCase()) ||
      clinica.endereco.toLowerCase().includes(busca.toLowerCase());

    const matchEspecialidade =
      especialidade === "todas" || clinica.especialidades.includes(especialidade);

    const matchRegiao = regiao === "todas" || clinica.cidade === regiao;

    return matchBusca && matchEspecialidade && matchRegiao;
  });

  const stats = [
    { icon: Building2, value: "3+", label: "Clínicas Credenciadas" },
    { icon: Users, value: "28+", label: "Especialidades" },
    { icon: Heart, value: "Niterói, São Gonçalo", label: "Regiões Atendidas" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 pt-12 pb-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>
          
          <div className="container relative z-10">
            <div className="text-center text-white mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span>Rede credenciada em expansão</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Encontre a{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-secondary bg-clip-text text-transparent">
                  Rede Credenciada
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Conheça nossa rede credenciada de clínicas e laboratórios.{" "}
                <strong className="text-white">Clínicas credenciadas</strong> com mais de 28 especialidades e 13 tipos de exames prontos para atender você e sua família em Niterói e São Gonçalo.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Bar - Floating */}
        <section className="relative z-20 -mt-12">
          <div className="container">
            <Card className="max-w-5xl mx-auto border-0 rounded-3xl shadow-2xl shadow-gray-200/50 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por nome, cidade ou endereço..."
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      className="pl-12 rounded-xl h-14 border-gray-200 bg-gray-50/50 focus:bg-white transition-colors text-base"
                    />
                  </div>
                  <Select value={especialidade} onValueChange={setEspecialidade}>
                    <SelectTrigger className="w-full lg:w-[220px] rounded-xl h-14 border-gray-200 bg-gray-50/50">
                      <Filter className="h-4 w-4 mr-2 text-primary" />
                      <SelectValue placeholder="Especialidade" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="todas">Todas especialidades</SelectItem>
                      {especialidadesUnicas.map((esp) => (
                        <SelectItem key={esp} value={esp}>
                          {esp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={regiao} onValueChange={setRegiao}>
                    <SelectTrigger className="w-full lg:w-[180px] rounded-xl h-14 border-gray-200 bg-gray-50/50">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <SelectValue placeholder="Região" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="todas">Todas regiões</SelectItem>
                      {cidadesUnicas.map((cidade) => (
                        <SelectItem key={cidade} value={cidade}>
                          {cidade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    className="h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 font-semibold shadow-lg shadow-primary/20"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Buscar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-muted-foreground">
                  Mostrando{" "}
                  <span className="font-bold text-foreground text-lg">{clinicasFiltradas.length}</span>{" "}
                  estabelecimento(s)
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Todos os estabelecimentos são verificados</span>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {clinicasFiltradas.map((clinica) => (
                <Card
                  key={clinica.id}
                  className="group overflow-hidden border-0 rounded-3xl bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={clinica.imagem}
                      alt={clinica.nome}
                      className="w-full h-full object-contain p-8 scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Location badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/95 backdrop-blur-sm text-foreground rounded-full px-3 py-1.5 shadow-lg">
                        <MapPin className="h-3 w-3 mr-1 text-primary" />
                        {clinica.cidade}/{clinica.estado}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-5">
                    <div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {clinica.nome}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {clinica.especialidades.slice(0, 4).map((esp) => (
                          <Badge
                            key={esp}
                            variant="secondary"
                            className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {esp}
                          </Badge>
                        ))}
                        {clinica.especialidades.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs rounded-full px-3 py-1 bg-secondary/10 text-secondary font-semibold"
                          >
                            +{clinica.especialidades.length - 4} especialidades
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <span className="pt-1">{clinica.endereco}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-4 w-4 text-secondary" />
                        </div>
                        <span>{clinica.telefone}</span>
                      </div>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="pt-1">{clinica.horario}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-secondary to-emerald-500 hover:from-secondary/90 hover:to-emerald-500/90 font-semibold shadow-md shadow-secondary/20 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 group/btn"
                      asChild
                    >
                      <a href={`tel:${clinica.telefone}`} className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>Entre em Contato</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {clinicasFiltradas.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Não encontramos estabelecimentos com os filtros selecionados. Tente ajustar sua busca.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 font-medium"
                  onClick={() => {
                    setBusca("");
                    setEspecialidade("todas");
                    setRegiao("todas");
                  }}
                >
                  Limpar todos os filtros
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Clinicas;
