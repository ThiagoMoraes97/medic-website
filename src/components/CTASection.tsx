import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users, CheckCircle, Sparkles, Clock, Zap } from "lucide-react";

export const CTASection = () => {
  const highlights = [
    { icon: Shield, text: "Sem carência", color: "from-blue-400 to-blue-500" },
    { icon: Users, text: "Até 8 pessoas", color: "from-emerald-400 to-emerald-500" },
    { icon: Heart, text: "28+ especialidades", color: "from-pink-400 to-rose-500" },
  ];

  const guarantees = [
    { icon: Zap, text: "Ativação imediata" },
    { icon: CheckCircle, text: "Cancelamento sem multa" },
    { icon: Clock, text: "Suporte 24h" },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-blue-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-[30%] w-1.5 h-1.5 bg-cyan-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-[40%] w-2 h-2 bg-emerald-300/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8 shadow-lg shadow-black/5">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>Cuide de quem você ama</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-12">
            Não perca tempo, cuide já da{" "}
            <span className="bg-gradient-to-r from-[#2DD4A8] to-emerald-300 bg-clip-text text-transparent">
              Saúde de sua família
            </span>
            {" "}com a Medic Benefícios!
          </h2>

          {/* Premium Card Display */}
          <div className="relative max-w-md mx-auto mb-12">
            {/* Multi-layer glow effects */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-emerald-400/30 rounded-[3rem] blur-3xl opacity-70" />
            <div className="absolute inset-0 -m-4 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] blur-xl" />
            
            {/* Glass container */}
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/25 shadow-2xl p-6 md:p-8">
              {/* Subtle shine line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              {/* Card with 3D effect */}
              <div className="relative group perspective-1000">
                {/* Card shadows */}
                <div className="absolute inset-x-4 -bottom-6 h-16 bg-black/30 blur-2xl rounded-[50%] transform group-hover:scale-105 transition-transform duration-700" />
                
                {/* Main card */}
                <div className="relative w-[280px] md:w-[320px] h-[175px] md:h-[200px] mx-auto transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-rotate-1 group-hover:translate-y-[-6px]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Card gradient layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 via-transparent to-cyan-400/30" />
                    
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                    
                    {/* Edge highlights */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                    
                    {/* Decorative circles */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 border border-white/10 rounded-full" />
                    <div className="absolute -top-12 -right-12 w-40 h-40 border border-white/[0.07] rounded-full" />
                    
                    {/* Card content */}
                    <div className="relative p-5 md:p-6 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-white font-bold text-xl md:text-2xl tracking-wide drop-shadow-sm">Medic</div>
                          <div className="text-white/40 text-[9px] md:text-[10px] font-medium tracking-[0.3em] mt-0.5">BENEFÍCIOS</div>
                        </div>
                        
                        {/* Premium chip */}
                        <div className="relative w-12 h-9 md:w-14 md:h-10">
                          <div className="absolute inset-0 translate-y-0.5 bg-black/20 rounded-md blur-sm" />
                          <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/50 via-transparent to-yellow-200/50" />
                            <div className="absolute inset-[2px] flex flex-col justify-center gap-[1px]">
                              <div className="flex gap-[1px]">
                                <div className="w-1/3 h-1.5 bg-yellow-600/30 rounded-sm" />
                                <div className="flex-1 h-1.5 bg-yellow-600/20 rounded-sm" />
                              </div>
                              <div className="w-full h-2 bg-yellow-600/20 rounded-sm" />
                              <div className="flex gap-[1px]">
                                <div className="flex-1 h-1.5 bg-yellow-600/20 rounded-sm" />
                                <div className="w-1/3 h-1.5 bg-yellow-600/30 rounded-sm" />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-white/50 text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold">Cartão Solidário</div>
                        <div className="flex items-center gap-3 text-white font-mono text-base md:text-lg tracking-[0.1em]">
                          <span className="flex gap-0.5">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                          </span>
                          <span className="flex gap-0.5">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                          </span>
                          <span className="flex gap-0.5">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full" />
                          </span>
                          <span className="text-white font-semibold">1234</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights with icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors duration-300"
              >
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70 text-sm">
                <item.icon className="h-4 w-4 text-[#2DD4A8]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative inline-block">
            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4A8] to-emerald-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-[#2DD4A8] to-emerald-500 hover:from-[#25BF97] hover:to-emerald-600 text-slate-900 text-base md:text-lg px-10 md:px-14 h-14 md:h-16 rounded-full font-bold shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/50 hover:-translate-y-1 hover:scale-[1.02]"
              asChild
            >
              <a href="/planos" className="flex items-center gap-3">
                ADQUIRA O SEU AGORA
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Subtle reassurance */}
          <p className="text-white/40 text-sm mt-6">
            Junte-se a mais de 10.000 famílias que já cuidam da saúde com economia
          </p>
        </div>
      </div>
    </section>
  );
};
