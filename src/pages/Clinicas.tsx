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
import { Search, MapPin, Phone, Clock, Star, Filter } from "lucide-react";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
          <div className="container">
            <div className="text-center text-primary-foreground mb-8">
              <h1 className="text-4xl font-bold mb-4">Rede Credenciada</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Encontre clínicas, laboratórios e parceiros próximos a você. São mais de 500
                estabelecimentos em todo o Brasil prontos para atender você e sua família.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Buscar por nome, cidade ou endereço..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="pl-10 rounded-xl h-12"
                      />
                    </div>
                    <Select value={especialidade} onValueChange={setEspecialidade}>
                      <SelectTrigger className="w-full md:w-[200px] rounded-xl h-12">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Especialidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todas">Todas especialidades</SelectItem>
                        {especialidadesUnicas.map((esp) => (
                          <SelectItem key={esp} value={esp}>
                            {esp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={estado} onValueChange={setEstado}>
                      <SelectTrigger className="w-full md:w-[140px] rounded-xl h-12">
                        <MapPin className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos estados</SelectItem>
                        {estadosUnicos.map((est) => (
                          <SelectItem key={est} value={est}>
                            {est}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{clinicasFiltradas.length}</span>{" "}
                estabelecimento(s) encontrado(s)
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clinicasFiltradas.map((clinica) => (
                <Card
                  key={clinica.id}
                  className="overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={clinica.imagem}
                      alt={clinica.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-background/90 text-foreground rounded-lg">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                        {clinica.avaliacao}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{clinica.nome}</h3>
                      <div className="flex flex-wrap gap-1">
                        {clinica.especialidades.map((esp) => (
                          <Badge
                            key={esp}
                            variant="secondary"
                            className="text-xs rounded-lg"
                          >
                            {esp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>
                          {clinica.endereco} - {clinica.cidade}/{clinica.estado}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{clinica.telefone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{clinica.horario}</span>
                      </div>
                    </div>
                    <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/90">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {clinicasFiltradas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum estabelecimento encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-xl"
                  onClick={() => {
                    setBusca("");
                    setEspecialidade("todas");
                    setEstado("todos");
                  }}
                >
                  Limpar filtros
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
