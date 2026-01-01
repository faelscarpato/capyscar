/**
 * Blog Section Component
 * Neo-Brutalism Digital Design: Card-based layout with tags
 */

import { blogPosts } from "@/data/mockData";
import { Calendar } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        {/* Section title */}
        <div className="mb-16">
          <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-4 mb-6">
            <h2 className="text-5xl md:text-7xl font-black text-black">
              ARTIGOS
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Compartilhando conhecimento sobre desenvolvimento web, arquitetura de software 
            e melhores práticas de programação.
          </p>
        </div>
        
        {/* Blog posts list */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="brutal-border brutal-shadow bg-card p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-150 cursor-pointer"
              style={{
                transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Post number and date */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="text-6xl font-black text-accent leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time className="text-sm font-bold">
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                
                {/* Post content */}
                <div className="lg:col-span-10 space-y-4">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white font-display hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {post.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-3 py-1 bg-accent text-black border-2 border-black"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View all posts CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block brutal-border brutal-shadow bg-secondary p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-150 cursor-pointer">
            <span className="text-2xl font-black text-accent">
              VER TODOS OS ARTIGOS →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
