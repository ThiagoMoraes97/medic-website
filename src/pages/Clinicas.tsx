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
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  horario: string;
  avaliacao: number;
  imagem: string;
}

const clinicasMock: Clinica[] = [
  {
    id: 1,
    nome: "Clínica Saúde & Vida",
    especialidades: ["Clínico Geral", "Cardiologia", "Pediatria"],
    endereco: "Av. Brasil, 1500 - Centro",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    telefone: "(21) 3333-4444",
    horario: "Seg-Sex: 7h às 19h | Sáb: 8h às 12h",
    avaliacao: 4.8,
    imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    nome: "Centro Médico Popular",
    especialidades: ["Ortopedia", "Fisioterapia", "Neurologia"],
    endereco: "Rua das Flores, 200 - Copacabana",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    telefone: "(21) 2222-5555",
    horario: "Seg-Sex: 8h às 20h",
    avaliacao: 4.6,
    imagem: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    nome: "Laboratório Diagnóstico",
    especialidades: ["Exames Laboratoriais", "Imagem"],
    endereco: "Av. Paulista, 900 - Bela Vista",
    cidade: "São Paulo",
    estado: "SP",
    telefone: "(11) 4444-6666",
    horario: "Seg-Sáb: 6h às 18h",
    avaliacao: 4.9,
    imagem: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    nome: "Clínica Bem Estar",
    especialidades: ["Dermatologia", "Estética", "Nutrição"],
    endereco: "Rua Augusta, 1200 - Consolação",
    cidade: "São Paulo",
    estado: "SP",
    telefone: "(11) 5555-7777",
    horario: "Seg-Sex: 9h às 21h | Sáb: 9h às 14h",
    avaliacao: 4.7,
    imagem: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    nome: "Hospital Popular",
    especialidades: ["Emergência", "Cirurgia Geral", "UTI"],
    endereco: "Av. Independência, 500 - Centro",
    cidade: "Belo Horizonte",
    estado: "MG",
    telefone: "(31) 3333-8888",
    horario: "24 horas",
    avaliacao: 4.5,
    imagem: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    nome: "Ótica Visão Clara",
    especialidades: ["Oftalmologia", "Óculos", "Lentes de Contato"],
    endereco: "Shopping Center Norte, Loja 45",
    cidade: "São Paulo",
    estado: "SP",
    telefone: "(11) 6666-9999",
    horario: "Seg-Sáb: 10h às 22h | Dom: 14h às 20h",
    avaliacao: 4.4,
    imagem: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
  },
];

const especialidadesUnicas = [...new Set(clinicasMock.flatMap((c) => c.especialidades))];
const estadosUnicos = [...new Set(clinicasMock.map((c) => c.estado))];

const Clinicas = () => {
  const [busca, setBusca] = useState("");
  const [especialidade, setEspecialidade] = useState<string>("todas");
  const [estado, setEstado] = useState<string>("todos");

  const clinicasFiltradas = clinicasMock.filter((clinica) => {
    const matchBusca =
      clinica.nome.toLowerCase().includes(busca.toLowerCase()) ||
      clinica.cidade.toLowerCase().includes(busca.toLowerCase()) ||
      clinica.endereco.toLowerCase().includes(busca.toLowerCase());

    const matchEspecialidade =
      especialidade === "todas" || clinica.especialidades.includes(especialidade);

    const matchEstado = estado === "todos" || clinica.estado === estado;

    return matchBusca && matchEspecialidade && matchEstado;
  });

  const stats = [
    { icon: Building2, value: "500+", label: "Estabelecimentos" },
    { icon: Users, value: "28", label: "Especialidades" },
    { icon: Heart, value: "100%", label: "Cobertura Nacional" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 pt-12 pb-32 overflow-hidden">
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
                <span>Rede credenciada em todo Brasil</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Encontre a{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-secondary bg-clip-text text-transparent">
                  Rede Credenciada
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Encontre clínicas, laboratórios e parceiros próximos a você. São mais de{" "}
                <strong className="text-white">500 estabelecimentos</strong> em todo o Brasil prontos para atender você e sua família.
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
                  <Select value={estado} onValueChange={setEstado}>
                    <SelectTrigger className="w-full lg:w-[160px] rounded-xl h-14 border-gray-200 bg-gray-50/50">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="todos">Todos estados</SelectItem>
                      {estadosUnicos.map((est) => (
                        <SelectItem key={est} value={est}>
                          {est}
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Rating badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/95 backdrop-blur-sm text-foreground rounded-full px-3 py-1.5 shadow-lg font-medium">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {clinica.avaliacao}
                      </Badge>
                    </div>
                    
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
                        {clinica.especialidades.map((esp) => (
                          <Badge
                            key={esp}
                            variant="secondary"
                            className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {esp}
                          </Badge>
                        ))}
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
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
                    setEstado("todos");
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
