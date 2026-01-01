/**
 * Home Page - Portfolio Rafael Scarpato
 * Neo-Brutalism Digital Design
 * Single Page Application with smooth scroll navigation
 */

import WebGLBackground from "@/components/WebGLBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsMatrix from "@/components/SkillsMatrix";
import BlogSection from "@/components/BlogSection";
import ContactFooter from "@/components/ContactFooter";
import NotificationDemo from "@/components/NotificationDemo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* WebGL animated background */}
      <WebGLBackground />
      
      {/* Fixed navigation */}
      <Navigation />
      
      {/* Main content sections */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <ProjectsGrid />
        <SkillsMatrix />
        <BlogSection />
        <section id="notifications">
          <NotificationDemo />
        </section>
        <ContactFooter />
      </main>
    </div>
  );
}
