/**
 * Contact Footer Component
 * Neo-Brutalism Digital Design: Form with validation and social links
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { useNotification } from "@/contexts/NotificationContext";

export default function ContactFooter() {
  const { showSuccess, showError } = useNotification();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = { name: "", email: "", message: "" };
    let hasErrors = false;
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      hasErrors = true;
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
      hasErrors = true;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
      hasErrors = true;
    }
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      // Success - in a real app, send to backend
      showSuccess(
        "Mensagem Enviada!",
        "Obrigado pelo contato. Responderei em breve."
      );
      setFormData({ name: "", email: "", message: "" });
    } else {
      showError(
        "Erro no Formulário",
        "Por favor, corrija os campos destacados."
      );
    }
  };
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/faelscarpato",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/faelscarpato",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "https://instagram/rafaelscarpato",
      icon: Instagram
    }
  ];
  
  return (
    <footer id="contact" className="py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-4 mb-8">
              <h2 className="text-5xl md:text-6xl font-black text-black">
                CONTATO
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8">
              Interessado em trabalhar juntos? Entre em contato através do formulário 
              ou pelas redes sociais.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                  Nome *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="brutal-border bg-background text-white font-bold h-12"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="text-destructive text-sm font-bold mt-2">{errors.name}</p>
                )}
              </div>
              
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="brutal-border bg-background text-white font-bold h-12"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm font-bold mt-2">{errors.email}</p>
                )}
              </div>
              
              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="brutal-border bg-background text-white font-bold min-h-32 resize-none"
                  placeholder="Sua mensagem..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm font-bold mt-2">{errors.message}</p>
                )}
              </div>
              
              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                className="brutal-border brutal-shadow-sm bg-accent hover:bg-accent/90 text-black font-bold text-lg px-8 py-6 w-full transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Social links and resume */}
          <div className="space-y-8">
            {/* Resume download */}
            <div className="brutal-border brutal-shadow bg-card p-8">
              <h3 className="text-3xl font-black text-accent mb-4 font-display">
                CURRÍCULO
              </h3>
              <p className="text-muted-foreground mb-6">
                Baixe meu currículo completo em PDF para mais detalhes sobre minha 
                experiência e formação.
              </p>
              <Button
                asChild
                size="lg"
                className="brutal-border bg-accent hover:bg-accent/90 text-black font-bold text-lg px-8 py-6 w-full"
              >
                <a 
                  href="/curriculo-rafael-scarpato.pdf" 
                  download
                  aria-label="Baixar currículo de Rafael Scarpato"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Currículo
                </a>
              </Button>
            </div>
            
            {/* Social links */}
            <div className="brutal-border brutal-shadow bg-card p-8">
              <h3 className="text-3xl font-black text-accent mb-6 font-display">
                REDES SOCIAIS
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 brutal-border bg-secondary p-4 hover:bg-accent hover:text-black transition-all duration-150 group"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="font-bold text-lg">{social.name}</span>
                      <span className="ml-auto text-2xl group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t-4 border-white text-center">
          <p className="text-muted-foreground font-bold">
            © {new Date().getFullYear()} Rafael Scarpato. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
