export interface Article {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "O que é Engenharia de Prompt em 2026",
    date: "2026-01-01",
    tags: ["Prompting", "IA", "JSON", "DSPy"],
    summary:
      "Em 2026, engenharia de prompt vira programação declarativa com formatos estruturados como JSON, XML e Markdown.",
    content: `Em 2026, engenharia de prompt deixou de ser "conversar bem com a IA" e tornou-se programação declarativa. Ao invés de prosa solta como "Você é um assistente gentil que...", profissionais usam formatos estruturados: JSON para dados, XML para separar seções do prompt, Markdown para hierarquia.

Por quê? Porque prompts são agora ativos críticos de código. Eles definem o comportamento de sistemas inteiros - chatbots, agentes autônomos, pipelines de análise. Um prompt mal escrito pode custar milhares de dólares em tokens desperdiçados ou gerar outputs inconsistentes que quebram integrações.

A engenharia de prompt moderna trata instruções como módulos reutilizáveis: você tem um módulo de "contexto" (dados do usuário), outro de "tarefa" (o que fazer), um de "restrições" (limites éticos e técnicos) e um de "exemplos" (few-shot). Cada módulo é testado isoladamente, versionado em Git e otimizado via algoritmos como RSIP (Recursive Self-Improvement Prompting).

Exemplo prático: ao invés de "Resuma este documento mantendo o tom profissional", você escreve um schema JSON: {"task": "summarize", "max_tokens": 300, "tone": "professional", "format": "bullet_points"}. A IA retorna exatamente no formato esperado, validável automaticamente.

Tendência 2026: ferramentas como DSPy estão automatizando a escrita de prompts - você define "o que quer" e o compilador otimiza "como pedir" para cada modelo (GPT-5, Claude 4.5, Gemini 3).`,
  },
  {
    id: "2",
    title: "Sintaxe Técnica: Por que JSON, XML e Markdown Importam",
    date: "2026-01-02",
    tags: ["JSON", "XML", "Markdown", "Prompting"],
    summary:
      "Prompts soltos são imprecisos; JSON, XML e Markdown trazem estrutura, separação e hierarquia.",
    content: `Prompts soltos são imprecisos. Quando você escreve "Liste os principais riscos do projeto", o modelo pode retornar 3 itens ou 30, em parágrafo ou bullet points. Em produção, isso quebra pipelines que esperam formato específico.

JSON resolve isso: você força a IA a retornar estrutura validável. {"risks": ["risco1", "risco2"], "severity": ["alta", "média"]}. Se o output não seguir o schema, um validador rejeita antes de chegar ao banco de dados.

XML é ideal para separar partes do prompt que não devem se misturar. <instructions>Analise este documento</instructions> <user_data>{{DOCUMENTO}}</user_data>. O modelo sabe exatamente onde começa a instrução e onde começa o dado do usuário, evitando "prompt injection" acidental.

Markdown é eficiente em tokens para conteúdo legível por humanos. Headers (# Seção Principal, ## Subseção) ajudam o modelo a manter hierarquia de importância durante geração.

Quando usar qual?

- JSON: Integração com sistemas, validação automática
- XML: Separar seções em prompts complexos (especialmente Claude e Gemini)
- Markdown: Relatórios, documentação, conteúdo para leitura humana

Consolidado 2026: OpenAI GPT-4.1 e Gemini 2.5 oferecem "strict JSON mode" - zero alucinação de campos, 100% aderência ao schema.`,
  },
  {
    id: "3",
    title: "Prompts Modulares: A Arquitetura que Escala",
    date: "2026-01-03",
    tags: ["Arquitetura", "Modularização", "Prompting", "OPRO"],
    summary:
      "Prompt monolítico vira ingovernável; modularização reduz custos e aumenta consistência entre casos de uso.",
    content: `Imagine um prompt de 2000 tokens que faz tudo: classifica, extrai dados, gera relatório e valida ética. Quando você precisa ajustar o tom do relatório, arrisca quebrar a lógica de classificação. Quando adiciona uma nova categoria, reescreve exemplos espalhados. Isso é prompt monolítico - ingovernável.

Modularização resolve: você quebra em componentes independentes. Módulo 1 classifica (30 tokens). Módulo 2 extrai (schema JSON, 50 tokens). Módulo 3 gera relatório (200 tokens). Módulo 4 valida contra constituição ética (100 tokens).

Benefícios reais (dados de produção 2025):

- Redução de 40-50% no tempo de desenvolvimento
- Aumento de 60-70% na consistência entre casos de uso
- Melhoria de 25-35% em métricas de qualidade (F1, acurácia)

Como modularizar?

- Identifique responsabilidades distintas no seu prompt gigante
- Extraia cada uma em arquivo separado (YAML, JSON ou Markdown)
- Defina contratos de interface: qual input cada módulo espera, qual output produz
- Versione no Git e teste isoladamente

Exemplo: chatbot de e-commerce usa 5 módulos reutilizáveis - "política de privacidade", "tom amigável", "FAQ produtos", "escalação para humano", "formato de resposta". Quando muda a política de devolução, atualiza apenas 1 módulo sem tocar nos outros 4.

Projeção 2026: "Engenharia de prompt manual" vira legacy. Você declara a arquitetura (quais módulos conectam) e otimizadores (DSPy, OPRO) escrevem os prompts ideais automaticamente.`,
  },
  {
    id: "4",
    title: "Few-Shot Dinâmico: Exemplos que se Adaptam ao Contexto",
    date: "2026-01-04",
    tags: ["Few-shot", "Embeddings", "Chroma", "DSPy"],
    summary:
      "Few-shot dinâmico seleciona exemplos por similaridade e melhora acurácia com menos custo de tokens.",
    content: `Few-shot tradicional usa exemplos fixos: você cola 5 exemplos no prompt sempre. Problema: se o usuário pergunta algo diferente, os exemplos viram ruído.

Few-shot dinâmico seleciona exemplos em tempo real baseado em similaridade semântica. Você mantém uma "biblioteca" de 500 exemplos excelentes (inputs e outputs validados). Quando chega uma query, o sistema:

- Calcula embedding do input do usuário
- Busca os 3-5 exemplos mais similares via cosine distance
- Injeta apenas esses no prompt

Resultado: contexto hiper-relevante com custo mínimo de tokens. Modelos apresentam 15-40% mais acurácia vs. exemplos estáticos.

Implementação básica:

- Armazene pares (input, output) em banco vetorial (Chroma, Pinecone)
- Use modelo de embedding (text-embedding-3-large da OpenAI)
- Recupere Top-3 via similarity search
- Aplique MMR (Maximal Marginal Relevance) para evitar exemplos repetitivos

Armadilha comum: depender de um único output para inferir o prompt gera "prompt hallucination" - o modelo inventa detalhes que não estavam no original. Solução: use múltiplos outputs do mesmo prompt para triangular.

Consolidado 2026: LangSmith e DSPy oferecem seletores de few-shot dinâmico prontos, com atualização automática da biblioteca baseada em feedback de produção.`,
  },
  {
    id: "5",
    title: "Auto-Prompting e RSIP: A IA que se Auto-Melhora",
    date: "2026-01-05",
    tags: ["RSIP", "Auto-Prompting", "Otimização", "IA"],
    summary:
      "RSIP critica e refina prompts em ciclos até convergir; útil quando você precisa de flexibilidade rápida.",
    content: `RSIP (Recursive Self-Improvement Prompting) é um ciclo onde a IA critica e refina seu próprio trabalho - ou seus próprios prompts - automaticamente, várias vezes, até convergir na melhor versão.

Como funciona:

- Geração: IA produz output inicial (v1)
- Crítica: IA avalia o output contra critérios de qualidade
- Refinamento: IA reescreve incorporando a crítica (v2)
- Iteração: repete até melhoria < 3% (convergência)

Exemplo prático: você pede "Resuma este artigo científico". Output v1 é genérico. A IA auto-critica: "Faltou mencionar metodologia e limitações". Output v2 adiciona essas seções. Auto-critica novamente: "Tom muito técnico, simplificar". Output v3 atinge qualidade ideal.

Quando usar RSIP vs. fine-tuning?

- RSIP: quando você tem poucos exemplos (<50) ou precisa de flexibilidade rápida
- Fine-tuning: quando tem milhares de exemplos e o comportamento é estável

Algoritmo avançado (RPEGA): usa algoritmo genético para evoluir prompts. Gera múltiplas "mutações" do prompt, testa cada uma, seleciona as melhores e cruza características. Após 3-5 gerações, atinge 92%+ de similaridade com o prompt ideal.

Tendência 2026: frameworks como DSPy integram RSIP nativo - você não escreve prompts, escreve objetivos ("maximize F1 score") e o otimizador itera automaticamente.`,
  },
  {
    id: "6",
    title: "Constitutional AI: Governança Ética Sem Burocracia",
    date: "2026-01-05",
    tags: ["Constitutional AI", "Ética", "Governança", "IA"],
    summary:
      "Princípios explícitos guiam respostas e permitem governança escalável sem regras hardcoded.",
    content: `Constitutional AI é alinhamento de modelos via princípios explícitos, não regras hardcoded. Ao invés de programar "se usuário pedir X, recuse", você define uma "constituição" - lista de valores que a IA deve respeitar - e ela auto-critica suas respostas contra esses princípios.

Exemplo de constituição curta (3 princípios):

- "Nunca exponha dados pessoais de clientes"
- "Se cliente frustrado, ofereça contato humano"
- "Responda em máximo 3 frases; se precisar mais, ofereça escalação"

Como funciona: modelo gera resposta inicial. Depois, compara com cada princípio: "Esta resposta viola algum deles?". Se sim, reescreve. Se não, retorna.

Benefícios vs. regras hardcoded:

- Escalável: adicionar novo princípio não requer re-treinar modelo
- Transparente: princípios são legíveis por humanos e auditáveis
- Flexível: mesmo princípio se adapta a contextos diferentes

Templates por tamanho:

- Curta (3-5 princípios): chatbots simples, baixo risco
- Média (10-15 princípios): agentes de ações (ex.: enviar email, agendar)
- Longa (20-30 princípios): sistemas regulados (saúde, finanças)

Consolidado 2026: Claude (Anthropic) usa Constitutional AI nativamente desde 2023. OpenAI GPT-5 e Gemini 3 adotaram princípios similares.

Tendência 2026: constituições dinâmicas que se atualizam automaticamente quando novas leis ou regulações entram em vigor.`,
  },
  {
    id: "7",
    title: "Prompting Reverso: Aprenda com as Respostas da IA",
    date: "2026-01-05",
    tags: ["Prompting Reverso", "Drift", "Auditoria", "Datasets"],
    summary:
      "Reconstrói prompts a partir de outputs para reutilizar, auditar drift e gerar datasets.",
    content: `Você gerou um output perfeito - um resumo impecável, um código bem documentado. Como reproduzir essa qualidade? Prompting reverso reconstrói o prompt que gerou aquele resultado, permitindo capturar conhecimento tácito.

Três casos de uso práticos:

1) Recuperar prompts eficazes: encontrou um texto excelente? Use prompting reverso para inferir quais instruções o geraram. Agora você tem um template reutilizável.
2) Auditar deriva (drift): seu sistema começou a recusar solicitações legítimas. Prompting reverso analisa os últimos 100 outputs, infere o "prompt efetivo" que o modelo está seguindo e compara com o autorizado. Detecta quando houve desvio não planejado.
3) Gerar datasets: colete outputs de produção com alta avaliação de usuários. Prompting reverso reconstrói os prompts. Agora você tem pares (prompt, output) para fine-tuning ou few-shot.

Métodos de reconstrução:

- One-Shot: inferir prompt de um único output (rápido, mas impreciso)
- Five-Shot: agregar múltiplos outputs para triangular (mais robusto)
- RPEGA: algoritmo genético que evolui candidatos de prompt por 3-5 gerações

Caso real 2026: agente de suporte começou a negar reembolsos válidos. Gerente não sabia por quê. Auditoria via prompting reverso identificou: instrução "minimize refunds" foi interpretada como política de recusa total. Rollback imediato para versão anterior.

Ferramentas: LangSmith, Maxim AI e Vellum oferecem dashboards de "prompt behavior" com diff visualization para detectar drift.`,
  },
  {
    id: "8",
    title: "Tool Use: Como a IA Usa Ferramentas Externas",
    date: "2026-01-05",
    tags: ["Tool Use", "Function Calling", "APIs", "Automação"],
    summary:
      "Function calling retorna JSON estruturado para executar funções externas e reduzir alucinação.",
    content: `Tool Use (ou Function Calling) é quando o modelo, ao invés de gerar texto livre, retorna JSON estruturado com nome de função e argumentos. Seu sistema executa essa função e devolve o resultado ao modelo.

Exemplo: usuário pergunta "Qual a previsão do tempo em São Paulo?". Modelo retorna {"function": "get_weather", "args": {"city": "São Paulo"}}. Sistema chama API de clima, retorna {"temp": 28, "condition": "sunny"}. Modelo reformula: "Está 28°C e ensolarado em São Paulo".

Por que não gerar texto diretamente? Porque modelos alucinam. Se você pede para ele "calcular" algo complexo, ele inventa. Tool use delega tarefas algorítmicas para código determinístico.

Boas práticas:

- Descrições ricas: explique quando usar a ferramenta e quando não usar
- Validação de schema: use Pydantic para garantir tipos corretos (int, string, enum)
- Raciocínio antes de ação: force o modelo a "pensar" antes de chamar função
- Human-in-the-loop: ferramentas críticas (ex.: reembolso > $500) exigem aprovação humana

Anti-padrão comum: modelo chama ferramenta, recebe erro, chama de novo com mesmos parâmetros (loop infinito). Correção: limite de retries e injeção do erro no contexto.

Consolidado 2026: GPT-4o e Claude 3.5 suportam chamadas paralelas - invocar 5 ferramentas simultaneamente em uma rodada, reduzindo latência.`,
  },
  {
    id: "9",
    title: "Agentes Autônomos: Planner + Executor + Crítico",
    date: "2026-01-05",
    tags: ["Agentes", "Orquestração", "Planner", "Segurança"],
    summary:
      "Arquitetura com planner, executor e juiz valida ações e mantém segurança em sistemas autônomos.",
    content: `Agentes autônomos são sistemas que planejam, executam e validam suas próprias ações sem intervenção humana constante. Arquitetura típica tem 3 papéis:

- Planner: recebe objetivo do usuário, decompõe em etapas. Ex.: "Analisar balanço da Apple" vira: 1) buscar 10-K, 2) extrair receita, 3) calcular margem, 4) gerar relatório.
- Executor: realiza cada etapa usando ferramentas (tool use). Chama APIs, roda código, consulta bancos vetoriais.
- Crítico (Judge): valida se cada saída respeita a "constituição" do sistema (princípios éticos e operacionais). Se viola, retorna ao Planner para replanejar.

Padrões arquiteturais:

- Hub-and-Spoke: orquestrador central roteia tarefas. Simples, mas gargalo em escala.
- Mesh: agentes conversam diretamente via event bus. Escalável, mas complexo de debugar.
- Event-Driven: planner de alto nível emite eventos, agentes reagem localmente. Híbrido ideal.

Segurança: human-in-the-loop para ações críticas. Ex.: agente pode rascunhar email, mas não enviar sem aprovação.

Tendência 2026: agentes com "constituições dinâmicas" que se adaptam ao contexto em tempo real, sem reprogramação.`,
  },
  {
    id: "10",
    title: "Orquestração Multimodal: Texto, Imagem, Vídeo e Áudio",
    date: "2026-01-05",
    tags: ["Multimodal", "Orquestração", "Visão", "Áudio"],
    summary:
      "Coordena fluxos multimodais com normalização de inputs e processamento paralelo por agentes especializados.",
    content: `Orquestração multimodal é coordenar fluxos onde o sistema processa múltiplas modalidades simultaneamente ou em sequência. Ex.: analisar um vídeo (frames), transcrever áudio, correlacionar com texto do usuário e gerar resposta com imagem complementar.

Fluxo típico:

- Normalização: converter inputs para formatos canônicos (resize imagem, converter áudio para 16kHz mono)
- Codificação paralela: processar cada modalidade em agente especializado (visão, fala, texto)`,
  },
];
