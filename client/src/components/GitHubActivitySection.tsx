"use client";

/**
 * Seção animada “GitHub Activity”
 * - Mantém visual neo-brutal + neon
 * - Marquee/ticker suave com pause no hover/focus
 * - Lista “Últimas edições” + “Repos extras”
 */

import { useMemo } from "react";
import { ExternalLink, GitCommitHorizontal, Star } from "lucide-react";
import { useGitHubActivity } from "./useGitHubActivity";

type Props = {
  username?: string; // fallback se quiser trocar no futuro
  excludeRepoNames?: string[]; // repos que já estão na grade 01-09
  limitRecent?: number; // quantos “recentes” destacar
  limitExtras?: number; // quantos “extras” mostrar no ticker
};

export default function GitHubActivitySection({
  username = "faelscarpato",
  excludeRepoNames = [],
  limitRecent = 6,
  limitExtras = 18
}: Props) {
  const { data, loading, error } = useGitHubActivity({ username });

  const { recent, extras } = useMemo(() => {
    const repos = data?.repos ?? [];
    const exclude = new Set(excludeRepoNames.map((n) => n.toLowerCase()));

    const sorted = [...repos].sort((a, b) => {
      const da = new Date(a.pushed_at || a.updated_at).getTime();
      const db = new Date(b.pushed_at || b.updated_at).getTime();
      return db - da;
    });

    const recentSlice = sorted.slice(0, limitRecent);

    const extrasSlice = sorted
      .filter((r) => !exclude.has(r.name.toLowerCase()))
      .slice(0, limitExtras);

    return { recent: recentSlice, extras: extrasSlice };
  }, [data, excludeRepoNames, limitRecent, limitExtras]);

  return (
    <section
      aria-label="Atividade do GitHub"
      className="brutal-border-accent bg-card/30 brutal-shadow-sm p-6 md:p-8 mt-10"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-black text-accent tracking-tight">
            Atividade recente no GitHub
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Últimas edições e repositórios extras além dos projetos em destaque.
          </p>
        </div>

        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-bold hover:opacity-90 transition-opacity"
        >
          Ver todos
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* STATES */}
      {loading && (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="brutal-border bg-card p-4 animate-pulse"
              >
                <div className="h-5 w-2/3 bg-white/10 mb-3" />
                <div className="h-4 w-full bg-white/5 mb-2" />
                <div className="h-4 w-5/6 bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="mt-6 brutal-border bg-card p-4">
          <p className="text-sm text-muted-foreground">
            Não foi possível carregar a atividade do GitHub agora. Tente novamente mais tarde.
          </p>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* RECENTES (cards) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {recent.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  brutal-border bg-card p-4
                  hover:bg-accent hover:text-black transition-all duration-150
                  group
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-black text-base md:text-lg truncate">
                      {repo.name}
                    </p>
                    <p className="text-xs md:text-sm opacity-80 line-clamp-2 mt-1">
                      {repo.description || "Sem descrição."}
                    </p>
                  </div>

                  <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 shrink-0" />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  {repo.language && (
                    <span className="brutal-border bg-black/40 px-2 py-1">
                      {repo.language}
                    </span>
                  )}

                  <span className="brutal-border bg-black/40 px-2 py-1 inline-flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>

                  <span className="brutal-border bg-black/40 px-2 py-1 inline-flex items-center gap-1">
                    <GitCommitHorizontal className="h-3 w-3" />
                    {repo.relative_updated}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* TICKER (extras) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <p className="font-black text-accent">Repos extras (ticker)</p>
              <p className="text-xs text-muted-foreground">
                Pausa ao passar o mouse / focar
              </p>
            </div>

            <div
              className="
                gh-marquee brutal-border bg-black/30
                overflow-hidden
                focus-within:outline-none
              "
              tabIndex={0}
            >
              <div className="gh-marquee__track">
                {[...extras, ...extras].map((repo, idx) => (
                  <a
                    key={`${repo.id}-${idx}`}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      gh-marquee__item
                      brutal-border bg-card
                      hover:bg-accent hover:text-black transition-all duration-150
                      focus:outline-none focus:ring-2 focus:ring-accent
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-black truncate">{repo.name}</span>
                      <span className="text-[11px] opacity-80 shrink-0">
                        {repo.relative_updated}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] opacity-90">
                      {repo.language && (
                        <span className="brutal-border bg-black/40 px-2 py-1">
                          {repo.language}
                        </span>
                      )}
                      <span className="brutal-border bg-black/40 px-2 py-1">
                        ★ {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
