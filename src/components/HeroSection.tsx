import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock, Star, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const stats = [
    { icon: Users, value: "Até 8", label: "pessoas cobertas" },
    { icon: Clock, value: "24h", label: "telemedicina" },
    { icon: Shield, value: "100%", label: "sem carência" },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#0066E6] via-[#0077FF] to-[#0088FF] pt-12 pb-14 md:pt-20 md:pb-20 lg:pb-24">
      {/* Multi-layer background */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,200,255,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(45,212,168,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(59,130,246,0.2),transparent)]" />
        
        {/* Large ambient orbs */}
        <div className="absolute -top-[300px] -right-[200px] w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -left-[150px] w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[200px] right-[20%] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px]" />
        
        {/* Subtle mesh gradient effect */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-conic from-transparent via-white/5 to-transparent opacity-30 blur-3xl" />
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/50 to-transparent" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>Mais de 10.000 famílias atendidas</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Cuide da Saúde da Sua Família Por{" "}
              <span className="text-[#2DD4A8]">
                Menos de R$1
              </span>
              {" "}Por Dia
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Acesso a consultas médicas, telemedicina 24h e exames laboratoriais com preços acessíveis para até <strong className="text-white">8 pessoas</strong> da sua família.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#2DD4A8]" />
                <span>Sem carência</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#2DD4A8]" />
                <span>Sem limite de idade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#2DD4A8]" />
                <span>Sem burocracia</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-[#2DD4A8] hover:bg-[#25BF97] text-slate-900 font-semibold rounded-full shadow-xl shadow-[#2DD4A8]/30 h-14 px-8 text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#2DD4A8]/40 hover:-translate-y-0.5"
                asChild
              >
                <a href="/planos" className="flex items-center gap-2">
                  Adquira o seu Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary rounded-full h-14 px-8 text-base font-semibold transition-all duration-300"
                asChild
              >
                <a href="#beneficios">Conheça os Benefícios</a>
              </Button>
            </div>
          </div>

          {/* Right side - Card visual */}
          <div className="relative lg:pl-8">
            {/* Main card container */}
            <div className="relative mb-24 lg:mb-28">
              {/* Ambient glow */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-blue-600/30 rounded-[3rem] blur-3xl opacity-60" />
              
              {/* Floating particles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Glass container */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/20 shadow-2xl">
                {/* Subtle top line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                <div className="relative p-8 md:p-12">
                  <div className="text-center space-y-8">
                    {/* Premium Card with 3D perspective */}
                    <div className="relative group perspective-1000">
                      {/* Card shadow - realistic multi-layer */}
                      <div className="absolute inset-x-6 -bottom-8 h-24 bg-black/30 blur-2xl rounded-[50%] transform scale-90 group-hover:scale-95 transition-transform duration-700" />
                      <div className="absolute inset-x-12 -bottom-4 h-16 bg-blue-900/40 blur-xl rounded-[50%]" />
                      
                      {/* Main card with hover animation */}
                      <div className="relative w-[320px] md:w-[360px] h-[200px] md:h-[220px] mx-auto transform transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-rotate-2 group-hover:translate-y-[-4px]" style={{ transformStyle: 'preserve-3d' }}>
                        {/* Card base */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                          {/* Multi-layer gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 via-transparent to-cyan-400/30" />
                          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/20 to-blue-900/40" />
                          
                          {/* Metallic shine sweep effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                          
                          {/* Top edge highlight */}
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                          
                          {/* Left edge highlight */}
                          <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                          
                          {/* Inner shadow for depth */}
                          <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]" />
                          
                          {/* Noise texture for premium feel */}
                          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
                          
                          {/* Decorative circles - more subtle */}
                          <div className="absolute -top-20 -right-20 w-56 h-56 border border-white/10 rounded-full" />
                          <div className="absolute -top-16 -right-16 w-48 h-48 border border-white/[0.07] rounded-full" />
                          <div className="absolute -top-12 -right-12 w-40 h-40 border border-white/[0.05] rounded-full" />
                          
                          {/* Card content */}
                          <div className="relative p-7 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-white font-bold text-2xl md:text-3xl tracking-wide drop-shadow-sm">Medic</div>
                                <div className="text-white/40 text-[10px] md:text-xs font-medium tracking-[0.3em] mt-0.5">BENEFÍCIOS</div>
                              </div>
                              
                              {/* Premium chip with realistic metallic effect */}
                              <div className="relative w-14 h-11 md:w-16 md:h-12">
                                {/* Chip shadow */}
                                <div className="absolute inset-0 translate-y-1 bg-black/20 rounded-lg blur-sm" />
                                
                                {/* Chip base */}
                                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                                  {/* Gold gradient */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600" />
                                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/50 via-transparent to-yellow-200/50" />
                                  
                                  {/* Chip lines */}
                                  <div className="absolute inset-[3px] flex flex-col justify-center gap-[2px]">
                                    <div className="flex gap-[2px]">
                                      <div className="w-1/3 h-2 bg-yellow-600/30 rounded-sm" />
                                      <div className="flex-1 h-2 bg-yellow-600/20 rounded-sm" />
                                    </div>
                                    <div className="w-full h-3 bg-yellow-600/20 rounded-sm" />
                                    <div className="flex gap-[2px]">
                                      <div className="flex-1 h-2 bg-yellow-600/20 rounded-sm" />
                                      <div className="w-1/3 h-2 bg-yellow-600/30 rounded-sm" />
                                    </div>
                                  </div>
                                  
                                  {/* Shine overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="text-white/50 text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold">Cartão Solidário</div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-white font-mono text-xl md:text-2xl tracking-[0.15em]">
                                  <span className="flex gap-1">
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                  </span>
                                  <span className="flex gap-1">
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                  </span>
                                  <span className="flex gap-1">
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/80 rounded-full" />
                                  </span>
                                  <span className="text-white font-semibold">1234</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text content with improved typography */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight">
                        Cartão Solidário
                        <span className="bg-gradient-to-r from-[#2DD4A8] via-emerald-300 to-cyan-300 bg-clip-text text-transparent"> Medic</span>
                      </h3>
                      <p className="text-white/50 text-base md:text-lg font-light">
                        Saúde e bem-estar para toda sua família
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats floating cards - Modern pill design */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:absolute lg:-bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-max">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-white shadow-xl shadow-primary/10 border border-gray-100/80 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="pr-1">
                    <div className="font-bold text-lg text-foreground leading-tight">{stat.value}</div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
