/**
 * Projects Grid Component
 * Neo-Brutalism Digital Design: Hard shadows, bold borders
 */

import { projects } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        {/* Section title */}
        <div className="mb-16">
          <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-4 mb-6">
            <h2 className="text-5xl md:text-7xl font-black text-black">
              PROJETOS
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Seleção de projetos que demonstram minhas habilidades em desenvolvimento 
            full-stack, desde aplicações web até sistemas complexos.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="brutal-border brutal-shadow bg-card p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-150"
              style={{
                transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
              }}
            >
              {/* Project number */}
              <div className="text-6xl font-black text-accent mb-4 leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Project name */}
              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                {project.name}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-bold px-3 py-1 bg-secondary text-white border-2 border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  className="brutal-border bg-accent hover:bg-accent/90 text-black font-bold flex-1"
                >
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Ver demonstração de ${project.name}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="brutal-border bg-transparent hover:bg-white hover:text-black text-white font-bold flex-1"
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.name} no GitHub`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
