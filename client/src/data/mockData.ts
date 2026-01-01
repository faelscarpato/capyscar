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
    name: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/rafael-scarpato/ecommerce"
  },
  {
    id: "2",
    name: "Real-Time Chat Application",
    description: "Aplicação de chat em tempo real com suporte a salas, mensagens privadas e notificações",
    technologies: ["TypeScript", "Socket.io", "Express", "MongoDB", "React"],
    demoUrl: "https://demo.example.com/chat",
    githubUrl: "https://github.com/rafael-scarpato/chat-app"
  },
  {
    id: "3",
    name: "Task Management System",
    description: "Sistema de gerenciamento de tarefas com quadros Kanban, colaboração em equipe e relatórios",
    technologies: ["Next.js", "Prisma", "tRPC", "TailwindCSS", "Vercel"],
    demoUrl: "https://demo.example.com/tasks",
    githubUrl: "https://github.com/rafael-scarpato/task-manager"
  },
  {
    id: "4",
    name: "Weather Dashboard",
    description: "Dashboard meteorológico com previsões, mapas interativos e alertas personalizados",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Mapbox", "Firebase"],
    demoUrl: "https://demo.example.com/weather",
    githubUrl: "https://github.com/rafael-scarpato/weather-dashboard"
  },
  {
    id: "5",
    name: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo usando IA com templates customizáveis e exportação",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    demoUrl: "https://demo.example.com/ai-content",
    githubUrl: "https://github.com/rafael-scarpato/ai-generator"
  },
  {
    id: "6",
    name: "Fitness Tracking App",
    description: "Aplicativo de rastreamento de exercícios com gráficos de progresso e planos de treino",
    technologies: ["React Native", "GraphQL", "Apollo", "PostgreSQL", "AWS"],
    demoUrl: "https://demo.example.com/fitness",
    githubUrl: "https://github.com/rafael-scarpato/fitness-tracker"
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
