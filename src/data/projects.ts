export type Project = {
  title: string;
  description: string;
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "My Bands (BandasJeff)",
    description:
      "Interface em React focada em componentização e consistência visual, organizada para evoluir por telas e componentes.",
    highlights: [
      "Componentes reutilizáveis e UI consistente",
      "Organização por telas e componentes",
      "Refino de interface e evolução incremental",
    ],
    repoUrl: "https://github.com/jofavaretto/my-bands",
  },
  {
    title: "Mix Saúde (Loja Natural)",
    description:
      "Projeto de catálogo/site com foco em layout responsivo, organização de conteúdo e melhoria contínua da interface, para uma loja de produto.",
    highlights: [
      "Estrutura clara de páginas e seções",
      "Ajustes de layout e consistência visual",
      "Organização do projeto para manutenção",
    ],
    repoUrl: "https://github.com/jofavaretto/MixSaude",
  },
  {
    title: "Meu Lembrete (em andamento)",
    description:
      "Projeto em evolução com foco em fluxo de uso, organização por funcionalidades e construção iterativa.",
    highlights: [
      "Desenvolvimento por etapas e refinamentos",
      "Base organizada para evolução por features",
      "Foco em manutenção e clareza do código",
    ],
    repoUrl: "https://github.com/jofavaretto/meu-lembrete",
  },
  {
    title: "Jogo Quiz (Segurança do Trabalho)",
    description:
      "Quiz interativo com lógica de pontuação, feedback ao usuário e interface objetiva.",
    highlights: [
      "Fluxo interativo com estados (perguntas/resultado)",
      "Reutilização de blocos de UI",
      "Ajustes e correções por iteração",
    ],
    repoUrl: "https://github.com/jofavaretto/jogoQuiz-Seguranca-do-Trabalho",
  },
  {
    title: "Calculadora IMC Simples",
    description:
      "Aplicação objetiva com estado, validação básica e feedback visual do resultado.",
    highlights: [
      "Formulário + validação + cálculo",
      "Tratamento de estados (erro/resultado)",
      "Código simples e fácil de manter",
    ],
    repoUrl: "https://github.com/jofavaretto/CalculadoraImc",
  },
  {
    title: "Simulação de Algoritmos de Ordenação",
    description:
      "Projeto focado em clareza de lógica e organização do código para visualização/estudo.",
    highlights: [
      "Estrutura lógica separada da interface",
      "Organização e legibilidade do código",
      "Evolução por refinamentos",
    ],
    repoUrl: "https://github.com/jofavaretto/AlgoritmosOrdenacao",
  },
  {
    title: "Site de Festa de Família",
    description:
      "Site com páginas e layout consistente para apresentação e navegação simples.",
    highlights: [
      "Estrutura de páginas e navegação",
      "Consistência visual e organização do conteúdo",
      "Refinos de layout e experiência",
    ],
    repoUrl: "https://github.com/jofavaretto/festa-familia",
  },
];
