# Portfolio Rafael Scarpato

Site de portfólio moderno e responsivo para desenvolvedor full-stack, construído com React, Vite, TailwindCSS e Three.js.

<img width="1366" height="617" alt="image" src="https://github.com/user-attachments/assets/f2184734-61e4-4f49-8d15-cdc767d40d52" />

---
## 🎨 Design

Este projeto utiliza o estilo **Neo-Brutalismo Digital**, caracterizado por:

- Tipografia ousada com hierarquia extrema (Space Grotesk + IBM Plex Mono)
- Bordas grossas e sombras duras para profundidade física
- Paleta monocromática (preto, cinza ardósia, branco) com acento verde limão elétrico
- Layout assimétrico com elementos sobrepostos e rotacionados
- Animações WebGL minimalistas com geometrias wireframe

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TailwindCSS 4** - Framework CSS utilitário
- **Three.js** - Animações WebGL 3D
- **@react-three/fiber** - React renderer para Three.js
- **shadcn/ui** - Componentes UI reutilizáveis
- **TypeScript** - Type safety

## 📁 Estrutura do Projeto

```
client/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Hero.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── SkillsMatrix.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactFooter.tsx
│   │   ├── Navigation.tsx
│   │   └── WebGLBackground.tsx
│   ├── data/
│   │   └── mockData.ts  # Dados mock (projetos, habilidades, posts)
│   ├── pages/
│   │   └── Home.tsx     # Página principal
│   ├── App.tsx          # Configuração de rotas
│   └── index.css        # Estilos globais e tema
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Criar build otimizado
pnpm build

# Preview do build
pnpm preview
```

## 📄 Seções do Site

### 1. Hero Section
- Nome em destaque com tipografia ousada
- Subtítulo e descrição profissional
- Badges de tecnologias principais
- Botões CTA para projetos e GitHub
- Background WebGL interativo

### 2. Projetos
- Grade de 6 projetos com cards brutais
- Cada projeto inclui:
  - Nome e descrição
  - Lista de tecnologias
  - Links para demo e repositório GitHub

### 3. Habilidades
- Matriz de habilidades organizadas por categoria:
  - Linguagens
  - Front-end
  - Back-end
  - Bancos de Dados
  - DevOps
  - Testes
- Indicadores de proficiência com barras de progresso

### 4. Blog/Artigos
- Lista de posts técnicos
- Cada artigo com:
  - Título e data
  - Tags de tecnologia
  - Resumo do conteúdo

### 5. Contato
- Formulário de contato com validação
- Links para redes sociais (GitHub, LinkedIn, Twitter)
- Botão para download de currículo

## 🎯 Funcionalidades

- ✅ Single Page Application (SPA)
- ✅ Navegação por scroll suave
- ✅ Navegação fixa com indicador de seção ativa
- ✅ Animações WebGL interativas (reagem ao mouse e scroll)
- ✅ Design totalmente responsivo (mobile-first)
- ✅ Validação de formulário
- ✅ Acessibilidade (tags semânticas, aria-labels)
- ✅ Performance otimizada

## 🎨 Customização

### Dados do Portfólio

Edite o arquivo `client/src/data/mockData.ts` para personalizar:

- Lista de projetos
- Habilidades e níveis de proficiência
- Posts do blog

### Cores e Tema

Edite `client/src/index.css` para ajustar:

- Paleta de cores (variáveis CSS)
- Tipografia
- Espaçamentos
- Bordas e sombras

### Componentes

Todos os componentes estão em `client/src/components/` e podem ser editados individualmente.

## 📝 Notas de Desenvolvimento

- **Dados Mock**: Todos os dados são estáticos no momento. Para integrar com backend/CMS, substitua as importações de `mockData.ts` por chamadas de API.

- **Formulário de Contato**: Atualmente apenas valida e exibe toast. Para funcionalidade real, adicione integração com serviço de e-mail ou backend.

- **Links Placeholder**: URLs de projetos e redes sociais são placeholders. Substitua pelos links reais.

- **Currículo**: Adicione o arquivo PDF em `client/public/curriculo-rafael-scarpato.pdf`

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como base para seu próprio portfólio.

## 👤 Autor

**Rafael Scarpato**
- GitHub: [@rafael-scarpato](https://github.com/rafael-scarpato)
- LinkedIn: [rafael-scarpato](https://linkedin.com/in/rafael-scarpato)

---

Desenvolvido com ❤️ usando React, Vite e TailwindCSS
