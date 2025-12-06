import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Olá! 👋 Bem-vindo ao Medic Benefícios. Como posso ajudar você hoje?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const quickActions = [
  { label: "Planos", query: "planos" },
  { label: "Preços", query: "preços" },
  { label: "Telemedicina", query: "telemedicina" },
];

const botResponses: Record<string, string> = {
  plano: "Temos dois planos incríveis! O **Essencial Vida** por R$29,90/mês e o **Conecta Saúde** por R$59,90/mês com telemedicina ilimitada. Qual te interessa mais?",
  preço: "Nossos planos começam a partir de R$29,90/mês. O Essencial Vida custa R$29,90 e o Conecta Saúde R$59,90 com telemedicina incluída!",
  telemedicina: "A telemedicina está disponível no plano Conecta Saúde (R$59,90/mês) com atendimento 24h, sem limite de consultas para você e seus dependentes!",
  dependente: "Você pode incluir até 7 dependentes sem custo adicional em qualquer um dos nossos planos!",
  clinica: "Temos diversas clínicas parceiras! Você pode verificar todas na nossa página de Rede Credenciada no menu principal.",
  exame: "Oferecemos exames laboratoriais a partir de R$3,00 em laboratórios credenciados com resultados rápidos!",
  default: "Obrigado pela sua mensagem! Para informações mais detalhadas, entre em contato pelo WhatsApp ou ligue para nossa central de atendimento. Posso ajudar com informações sobre planos, preços, telemedicina ou rede de clínicas.",
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("plano")) return botResponses.plano;
    if (lowerMessage.includes("preço") || lowerMessage.includes("valor") || lowerMessage.includes("custo")) return botResponses.preço;
    if (lowerMessage.includes("telemedicina") || lowerMessage.includes("online")) return botResponses.telemedicina;
    if (lowerMessage.includes("dependente") || lowerMessage.includes("família")) return botResponses.dependente;
    if (lowerMessage.includes("clínica") || lowerMessage.includes("clinica") || lowerMessage.includes("rede")) return botResponses.clinica;
    if (lowerMessage.includes("exame") || lowerMessage.includes("laboratório")) return botResponses.exame;
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (query: string) => {
    setInputValue(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button - Modern floating design */}
      <div
        className={cn(
          "transition-all duration-500",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-emerald-400 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          
          <Button
            size="icon"
            className="relative h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-secondary to-emerald-500 hover:from-secondary hover:to-emerald-400 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir chat"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </Button>
          
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary items-center justify-center text-[10px] text-white font-bold">1</span>
          </span>
        </div>
      </div>

      {/* Chat Window - Modern glass design */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-[380px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 z-50",
          "bg-white/95 backdrop-blur-2xl border border-gray-200/50",
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        )}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Header - Gradient design */}
        <div className="relative bg-gradient-to-r from-primary via-blue-600 to-primary p-5 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Medic AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="text-xs text-white/80">Online • Responde em segundos</p>
                </div>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-xl text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages area */}
        <ScrollArea className="flex-1 p-5" ref={scrollRef}>
          <div className="space-y-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "bot" && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-3 shadow-sm",
                    message.sender === "user"
                      ? "bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl rounded-br-md"
                      : "bg-gray-100 text-foreground rounded-2xl rounded-bl-md"
                  )}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <p className={cn(
                    "text-[10px] mt-1.5",
                    message.sender === "user" ? "text-white/60" : "text-muted-foreground"
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary/20 to-emerald-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <User className="h-5 w-5 text-secondary" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center shadow-sm">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick actions */}
        {messages.length <= 2 && (
          <div className="px-5 pb-3">
            <p className="text-xs text-muted-foreground mb-2">Perguntas rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="px-3 py-1.5 text-xs font-medium bg-primary/5 hover:bg-primary/10 text-primary rounded-full border border-primary/20 hover:border-primary/30 transition-colors flex items-center gap-1"
                >
                  {action.label}
                  <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area - Modern design */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full rounded-2xl border-gray-200 bg-white pl-4 pr-4 py-6 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
              />
            </div>
            <Button
              size="icon"
              className={cn(
                "h-12 w-12 rounded-2xl transition-all duration-300",
                inputValue.trim() 
                  ? "bg-gradient-to-br from-secondary to-emerald-500 hover:from-secondary hover:to-emerald-400 shadow-lg shadow-secondary/30" 
                  : "bg-gray-200 text-gray-400"
              )}
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Footer branding */}
          <p className="text-center text-[10px] text-muted-foreground mt-3">
            Powered by <span className="font-semibold text-primary">Medic Benefícios</span>
          </p>
        </div>
      </div>
    </>
  );
};
