import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Shield,
  Heart,
  Sparkles
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12">
          {/* Logo */}
          <Link to="/" className="mb-12">
            <img src="/logo.png" alt="Medic Benefícios" className="h-16 w-auto brightness-0 invert" />
          </Link>

          {/* Card mockup */}
          <div className="relative mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-blue-400/30 rounded-3xl blur-2xl opacity-60" />
            <div className="relative w-80 h-48 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-primary to-blue-600" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50" />
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-bold text-2xl">Medic</div>
                    <div className="text-white/50 text-xs mt-1">BENEFÍCIOS</div>
                  </div>
                  <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg" />
                </div>
                <div className="space-y-2">
                  <div className="text-white/70 text-xs tracking-[0.2em] uppercase">Cartão Solidário</div>
                  <div className="text-white font-mono text-lg tracking-widest">•••• •••• •••• 1234</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white">
              Bem-vindo de volta!
            </h2>
            <p className="text-white/70 max-w-sm">
              Acesse sua conta para gerenciar seus benefícios e aproveitar todas as vantagens do seu plano.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex gap-8">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Acesso seguro</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Heart className="h-5 w-5" />
              <span className="text-sm">+10.000 famílias</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-gradient-to-b from-blue-50/50 to-background">
        {/* Mobile logo */}
        <Link to="/" className="lg:hidden mb-8">
          <img src="/logo.png" alt="Medic Benefícios" className="h-12 w-auto" />
        </Link>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Área do Cliente</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Faça seu login
            </h1>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>

          {/* Google login button */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all mb-6"
            onClick={handleGoogleLogin}
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuar com Google
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-b from-blue-50/50 to-background text-muted-foreground">
                ou continue com email
              </span>
            </div>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <Link 
                  to="/esqueci-senha" 
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-12 pr-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="rounded"
              />
              <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Lembrar de mim
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              Entrar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Sign up link */}
          <p className="text-center mt-8 text-muted-foreground">
            Não tem uma conta?{" "}
            <Link 
              to="/cadastro" 
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Cadastre-se grátis
            </Link>
          </p>

          {/* Back to home */}
          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
