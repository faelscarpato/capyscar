/**
 * Blog Section Component
 * Neo-Brutalism Digital Design: Card-based layout with tags
 */

import { useState, type KeyboardEvent } from "react";

import { articles } from "@/data/articles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const visiblePosts = articles.slice(0, visibleCount);
  const canLoadMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, articles.length)
    );
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

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
          {visiblePosts.map((post, index) => (
            <Dialog key={post.id}>
              <DialogTrigger asChild>
                <article
                  className="brutal-border brutal-shadow bg-card p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-150 cursor-pointer"
                  style={{
                    transform:
                      index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={handleCardKeyDown}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Post number and date */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="text-6xl font-black text-accent leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <time className="text-sm font-bold">
                          {new Date(post.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
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
              </DialogTrigger>

              <DialogContent className="brutal-border brutal-shadow bg-card text-foreground border-0 rounded-none p-0 sm:max-w-3xl max-h-[85vh] overflow-hidden">
                <div className="max-h-[85vh] overflow-y-auto p-6 space-y-6">
                  <DialogHeader className="text-left space-y-3">
                    <DialogTitle className="text-3xl font-black text-white font-display">
                      {post.title}
                    </DialogTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold">
                      <Calendar className="h-4 w-4" />
                      <time>
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <DialogDescription className="text-muted-foreground text-base">
                      {post.summary}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                    {post.content}
                  </div>

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
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          {/* Botao "Carregar mais..." para exibir mais artigos da lista */}
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={!canLoadMore}
            className="inline-block brutal-border brutal-shadow bg-secondary p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-2xl font-black text-accent">
              CARREGAR MAIS...
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
