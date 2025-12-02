import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
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

  return (
    <>
      {/* Chat Button */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg bg-secondary hover:bg-secondary/90 transition-all duration-300",
          isOpen && "scale-0 opacity-0"
        )}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-[360px] h-[500px] bg-background rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 z-50",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">Medic Assistente</h3>
              <p className="text-xs text-primary-foreground/80">Online agora</p>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-secondary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="rounded-xl"
            />
            <Button
              size="icon"
              className="rounded-xl bg-secondary hover:bg-secondary/90"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
