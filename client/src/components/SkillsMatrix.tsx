/**
 * Skills Matrix Component
 * Neo-Brutalism Digital Design: Bold progress indicators
 */

import { skills } from "@/data/mockData";
import { useMemo } from "react";

export default function SkillsMatrix() {
  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const grouped: Record<string, typeof skills> = {};
    
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    
    return grouped;
  }, []);
  
  const categories = Object.keys(skillsByCategory);
  
  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container">
        {/* Section title */}
        <div className="mb-16">
          <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-4 mb-6">
            <h2 className="text-5xl md:text-7xl font-black text-black">
              HABILIDADES
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experiência técnica em desenvolvimento full-stack, desde front-end moderno 
            até infraestrutura e DevOps.
          </p>
        </div>
        
        {/* Skills grid by category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="brutal-border brutal-shadow bg-card p-8"
              style={{
                transform: categoryIndex % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
              }}
            >
              {/* Category title */}
              <h3 className="text-3xl font-black text-accent mb-6 font-display">
                {category}
              </h3>
              
              {/* Skills list */}
              <div className="space-y-6">
                {skillsByCategory[category].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    {/* Skill name and proficiency number */}
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-lg">
                        {skill.name}
                      </span>
                      <span className="text-2xl font-black text-accent">
                        {skill.proficiency}
                      </span>
                    </div>
                    
                    {/* Progress bar - brutal style */}
                    <div className="relative h-3 bg-secondary border-2 border-white">
                      <div
                        className="absolute inset-y-0 left-0 bg-accent transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="brutal-border-accent bg-transparent w-64 h-24 flex items-center justify-center">
            <span className="text-4xl font-black text-accent">
              {skills.length}+ SKILLS
            </span>
          </div>
        </div>
      </div>
    </section>
 <section class="skill">

          <h3 class="h3 skills-title">Designer Gráfico</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Adobe Photoshop</h5>
                <data value="85">85%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 85%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Adobe Illustrator</h5>
                <data value="70">70%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 70%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Adobe Photoshop Lightroom</h5>
                <data value="65">65%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 65%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">CorelDraw</h5>
                <data value="65">65%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 65%;"></div>
              </div>

            </li>

          </ul>

        </section>
        <br>

        <section class="skill">

          <h3 class="h3 skills-title">Desenvolvimento Web</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">HTML</h5>
                <data value="85">85%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 85%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">CSS</h5>
                <data value="70">70%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 70%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">JAVASCRIPT</h5>
                <data value="55">55%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 55%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">PHP</h5>
                <data value="15">15%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 15%;"></div>
              </div>

            </li>

          </ul>

        </section>
    
  );
}
