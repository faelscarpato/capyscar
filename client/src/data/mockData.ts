/**
 * Mock data for portfolio content
 * Neo-Brutalism Digital Design
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "CapyUniverse",
    description: "Plataforma experimental que reúne múltiplas ferramentas baseadas em IA em uma interface única, explorando design, modularidade e experiência do usuário.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs", "Design System"], 
    demoUrl: "https://capyuniverse.pages.dev/",
    githubUrl: "https://github.com/faelscarpato/capyuniverse"
  },
  {
    id: "2",
    name: "CapyUNI - IDE",
    description: "Ambiente de desenvolvimento web com IA e persistência local, Editor de código leve e moderno no navegador, com suporte a edição persistente (IndexedDB), integração com Monaco Editor e potencial para suporte de IA.",
    technologies: ["IndexedDB", "React", "TypeScript", "Monaco Editor", "xterm.js"],
    demoUrl: "https://capyuniv2.pages.dev/",
    githubUrl: "https://github.com/faelscarpato/capyuniv2"
  },
  {
    id: "3",
    name: "Buscaki",
    description: "Catálogo de empresas com pesquisa e filtros - Site estático que exibe lista de empresas, com interface de pesquisa e exibição de detalhes. Projeto focado em manipulação de dados locais e interface dinâmica cliente-lado",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://faelscarpato.github.io/Buscaki/",
    githubUrl: "https://github.com/faelscarpato/Buscaki"
  },
  {
    id: "4",
    name: "Genios",
    description: "Protótipo para explorar experiências de IA,conversando em liguagem natural com genios do passodo.",
    technologies: ["React", "TypeScript", "Vite"],
    demoUrl: "https://demo.example.com/weather",
    githubUrl: "https://github.com/rafael-scarpato/weather-dashboard"
  },
  {
    id: "5",
    name: "CapyContrato Elite",
    description: "Aplicação que gera contratos personalizados utilizando a API Gemini. Permite, compor cláusulas, alterar o tom da linguagem e visualizar o contrato antes de exportar",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "localStorage"],
    demoUrl: "https://demo.example.com/ai-content",
    githubUrl: "https://github.com/rafael-scarpato/ai-generator"
  },
  {
   id: "6",
  name: "ReGift",
  description: "Plataforma web para troca e doação de itens que você não usa mais, com foco em praticidade e proximidade. O usuário cria perfil (nome, WhatsApp e raio de busca), publica itens com foto, título e descrição, e navega por um feed tipo swipe mostrando itens próximos com base na geolocalização. Ao curtir, o sistema cria o match e libera o contato direto via WhatsApp para combinar a retirada. Inclui autenticação, upload de imagens e listagem de itens/matches em tempo real via Supabase.",
  technologies: ["Next.js (App Router)","React","TypeScript","TailwindCSS","Supabase (Auth + Postgres + Storage)","PostGIS / Geolocalização"],
  demoUrl: "https://regift.pages.dev/",
  githubUrl: "https://github.com/faelscarpato/regift"
  },
  {
      id: "7",
  name: "CapyContrato - Elite",
  description:"CapyChart é um webapp do ecossistema CapyUniverse focado em gerar e visualizar gráficos de forma rápida e bonita. A interface permite inserir dados, escolher tipos de gráfico e visualizar o resultado em tempo real, com layout responsivo e visual ‘capy-style’. O projeto vem estruturado como app moderno em React + Vite, pronto para rodar localmente e evoluir para integrações com Supabase/IA dentro do hub do CapyUniverse.",
  technologies: ["React","TypeScript","TailwindCSS","Vite","Gemini AP","IndexedDB"],
  githubUrl: "https://github.com/faelscarpato/capychart"
  },
   {
      id: "8",
  name: "DaVinci",
  description:"Assistente criativo que cria aplicações ou códigos com base em um prompt textual, permitindo escolher modos (“app”, “davinci”, “fusion”) e anexar arquivos para melhorar o contexto",
  technologies: ["React","TypeScript","TailwindCSS","Vite","Gemini AP","IndexedDB"],
    demoUrl: "https://davinci-82s.pages.dev/",
   githubUrl: "https://github.com/faelscarpato/DaVinci"
  },
   {
      id: "9",
  name: "FullSearchAI",
 description:"Assistente de pesquisa que utiliza Gemini para sintetizar informações de artigos e fontes online, permitindo ajustar complexidade, formato de resposta e idioma",
  technologies: ["React","TypeScript","TailwindCSS","Vite","Gemini AP","IndexedDB"],
       demoUrl: "https://fullsearchai.pages.dev/",
     githubUrl: "https://github.com/faelscarpato/fullsearchai"
  },
 {
  "id": "10",
  "name": "Cardápio - LandPage de Lanchonete",
  "description": "LandPage de lanchonete com cardápio interativo e funcionalidade para envio automático do pedido via WhatsApp",
  "technologies": [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "demoUrl": "https://faelscarpato.github.io/cardapio/",
  "githubUrl": "https://github.com/faelscarpato/cardapio"
}
  ];

export const skills: Skill[] = [
  // Linguagens
  { name: "JavaScript", category: "Linguagens", proficiency: 95 },
  { name: "TypeScript", category: "Linguagens", proficiency: 90 },
  { name: "Python", category: "Linguagens", proficiency: 85 },
  { name: "Go", category: "Linguagens", proficiency: 70 },
  { name: "SQL", category: "Linguagens", proficiency: 88 },
  
  // Frameworks Front-end
  { name: "React", category: "Front-end", proficiency: 95 },
  { name: "Next.js", category: "Front-end", proficiency: 90 },
  { name: "Vue.js", category: "Front-end", proficiency: 80 },
  { name: "TailwindCSS", category: "Front-end", proficiency: 92 },
  { name: "Three.js", category: "Front-end", proficiency: 75 },
  
  // Frameworks Back-end
  { name: "Node.js", category: "Back-end", proficiency: 93 },
  { name: "Express", category: "Back-end", proficiency: 90 },
  { name: "FastAPI", category: "Back-end", proficiency: 82 },
  { name: "GraphQL", category: "Back-end", proficiency: 85 },
  { name: "tRPC", category: "Back-end", proficiency: 88 },
  
  // Bancos de Dados
  { name: "PostgreSQL", category: "Bancos de Dados", proficiency: 90 },
  { name: "MongoDB", category: "Bancos de Dados", proficiency: 85 },
  { name: "Redis", category: "Bancos de Dados", proficiency: 80 },
  { name: "Prisma", category: "Bancos de Dados", proficiency: 88 },
  
  // DevOps & Ferramentas
  { name: "Docker", category: "DevOps", proficiency: 85 },
  { name: "AWS", category: "DevOps", proficiency: 78 },
  { name: "Git", category: "DevOps", proficiency: 95 },
  { name: "CI/CD", category: "DevOps", proficiency: 82 },
  { name: "Kubernetes", category: "DevOps", proficiency: 70 },
  
  // Testes
  { name: "Jest", category: "Testes", proficiency: 88 },
  { name: "Vitest", category: "Testes", proficiency: 85 },
  { name: "Playwright", category: "Testes", proficiency: 80 },
  { name: "Testing Library", category: "Testes", proficiency: 90 }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Construindo Aplicações Escaláveis com Microserviços",
    date: "2024-12-15",
    tags: ["Arquitetura", "Microserviços", "Node.js", "Docker"],
    summary: "Explorando padrões de design e melhores práticas para construir sistemas distribuídos resilientes e escaláveis usando arquitetura de microserviços."
  },
  {
    id: "2",
    title: "WebGL e Three.js: Criando Experiências 3D na Web",
    date: "2024-11-28",
    tags: ["WebGL", "Three.js", "JavaScript", "Performance"],
    summary: "Um guia completo sobre como integrar gráficos 3D em aplicações web modernas, otimizando performance e criando experiências interativas imersivas."
  },
  {
    id: "3",
    title: "Type Safety End-to-End com tRPC",
    date: "2024-11-10",
    tags: ["TypeScript", "tRPC", "Full-Stack", "API"],
    summary: "Como tRPC revoluciona o desenvolvimento full-stack TypeScript ao eliminar a necessidade de validação manual de tipos entre cliente e servidor."
  },
  {
    id: "4",
    title: "Otimização de Performance em React: Técnicas Avançadas",
    date: "2024-10-22",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    summary: "Técnicas avançadas de otimização incluindo memoização, code splitting, lazy loading e estratégias de renderização para aplicações React de alta performance."
  },
  {
    id: "5",
    title: "Implementando CI/CD com GitHub Actions",
    date: "2024-10-05",
    tags: ["DevOps", "CI/CD", "GitHub", "Automation"],
    summary: "Guia prático para configurar pipelines de integração e entrega contínua usando GitHub Actions, desde testes automatizados até deploy em produção."
  }
];
