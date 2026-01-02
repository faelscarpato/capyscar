/**
 * Skills Matrix Component - Ultra-Compact Neo-Brutalism
 * Otimizado para densidade de informação e impacto visual.
 */

import { useMemo } from "react";

export default function SkillsMatrix() {
  // Dados integrados conforme solicitado para substituir os antigos
  const skillsData = [
    { name: "Adobe Photoshop", proficiency: 85, category: "Designer Gráfico" },
    { name: "Adobe Illustrator", proficiency: 70, category: "Designer Gráfico" },
    { name: "Adobe Photoshop Lightroom", proficiency: 65, category: "Designer Gráfico" },
    { name: "CorelDraw", proficiency: 65, category: "Designer Gráfico" },
    { name: "HTML", proficiency: 85, category: "Desenvolvimento Web" },
    { name: "CSS", proficiency: 70, category: "Desenvolvimento Web" },
    { name: "JAVASCRIPT", proficiency: 55, category: "Desenvolvimento Web" },
    { name: "PHP", proficiency: 15, category: "Desenvolvimento Web" },
  ];

  const skillsByCategory = useMemo(() => {
    const grouped = {};
    skillsData.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    return grouped;
  }, []);

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section title - Reduzido para não dominar a viewport */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
              Habilidades
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl font-medium">
            Design de alta performance e código limpo. A síntese entre estética e funcionalidade.
          </p>
        </div>

        {/* Skills grid - Layout mais denso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="brutal-border brutal-shadow bg-card p-5"
              style={{
                transform: categoryIndex % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.3deg)'
              }}
            >
              {/* Category title - Compacto */}
              <h3 className="text-xl font-black text-accent mb-4 font-display border-b-2 border-accent pb-1 inline-block">
                {category}
              </h3>
              
              {/* Skills list - Espaçamento reduzido */}
              <div className="space-y-4">
                {skillsByCategory[category].map((skill) => (
                  <div key={skill.name} className="group">
                    {/* Skill name and proficiency */}
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-bold text-white text-sm uppercase tracking-wider">
                        {skill.name}
                      </span>
                      <span className="text-lg font-black text-accent leading-none">
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    {/* Progress bar - Slimmer & Sharper */}
                    <div className="relative h-2 bg-secondary border border-white/20 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-accent transition-all duration-700 ease-out group-hover:bg-white"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element - Miniaturizado para equilíbrio */}
        <div className="mt-12 flex justify-center">
          <div className="brutal-border-accent bg-transparent px-8 py-3 flex items-center justify-center hover:bg-accent hover:text-black transition-colors cursor-default">
            <span className="text-xl font-black uppercase italic">
              {skillsData.length} Competências Ativas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
