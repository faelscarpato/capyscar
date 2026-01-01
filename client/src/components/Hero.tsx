/**
 * Hero Section Component
 * Neo-Brutalism Digital Design: Bold typography, asymmetric layout
 */

import { Button } from "@/components/ui/button";
import { Github, ArrowDown } from "lucide-react";

const techBadges = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS"
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="min-h-screen mt-24 flex items-center relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main content - asymmetric positioning */}
          <div className="lg:col-span-8 space-y-8">
            {/* Name with brutal styling */}
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tight">
                RAFAEL
                <br />
                SCARPATO
              </h1>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent -z-10" />
            </div>
            
            {/* Subtitle with border */}
            <div className="inline-block brutal-border brutal-shadow bg-card p-6">
              <p className="text-2xl md:text-3xl font-bold text-white font-display">
                Desenvolvedor Full-Stack
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Construindo aplicações web modernas e escaláveis com foco em performance, 
              experiência do usuário e código limpo. Especializado em React, Node.js e 
              arquiteturas full-stack.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="brutal-border brutal-shadow-sm bg-accent hover:bg-accent/90 text-black font-bold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="brutal-border bg-transparent hover:bg-white hover:text-black text-white font-bold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1"
              >
                <a 
                  href="https://github.com/faelscarpato" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub de Rafael Scarpato"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          
          {/* Tech badges - positioned asymmetrically */}
          <div className="lg:col-span-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {techBadges.map((tech, index) => (
                <div
                  key={tech}
                  className="brutal-border bg-card p-4 text-center hover:bg-accent hover:text-black transition-all duration-150 cursor-default"
                  style={{
                    transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
                  }}
                >
                  <span className="font-bold text-sm md:text-base">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-20 right-10 w-40 h-40 brutal-border-accent bg-transparent hidden lg:block" 
           style={{ transform: 'rotate(15deg)' }} />
    </section>
  );
}
