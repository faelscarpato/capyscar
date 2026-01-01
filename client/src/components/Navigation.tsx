/**
 * Navigation Component
 * Neo-Brutalism Digital Design: Fixed navigation with smooth scroll
 */

import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "projects", label: "PROJETOS" },
  { id: "skills", label: "HABILIDADES" },
  { id: "blog", label: "ARTIGOS" },
  { id: "contact", label: "CONTATO" }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navItems.map(item => item.id);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b-4 border-white' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black text-white hover:text-accent transition-colors"
          >
            RS
          </button>
          
          {/* Navigation items */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 font-bold text-sm transition-all duration-150 ${
                    activeSection === item.id
                      ? 'brutal-border bg-accent text-black'
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden brutal-border bg-accent text-black px-4 py-2 font-bold"
            onClick={() => {
              // Toggle mobile menu - simplified for now
              const firstSection = navItems[1]; // Skip home, go to projects
              scrollToSection(firstSection.id);
            }}
          >
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}
