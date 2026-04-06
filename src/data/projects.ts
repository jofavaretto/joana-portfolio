export type Project = {
  title: string;
  description: string;
  details: string;
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  images?: string[];
  category?: "dev" | "teaching";
};

export const projects: Project[] = [
  {
    title: "Empreende SC",
    description:
      "Plataforma de apoio ao empreendedorismo catarinense, conectando empreendedores a recursos, mentorias e oportunidades de crescimento.",
    details:
      "Projeto desenvolvido com foco em facilitar o acesso de empreendedores de Santa Catarina a recursos, mentorias e redes de apoio. Interface clara e objetiva para conectar pessoas ao ecossistema empreendedor do estado.",
    highlights: [
      "Plataforma de conexão para empreendedores SC",
      "Interface focada em usabilidade e clareza",
      "Integração com recursos e mentorias locais",
    ],
    repoUrl: "https://github.com/jofavaretto/empreendesc",
    liveUrl: "",
    images: [],
    category: "dev",
  },
  {
    title: "Gestão de Quadras",
    description:
      "Sistema de gerenciamento de reservas e controle de quadras esportivas com foco em praticidade e organização.",
    details:
      "Sistema completo para gestão de quadras esportivas: agendamento de horários, controle de reservas, visualização de disponibilidade e gestão de clientes. Desenvolvido para otimizar o dia a dia de estabelecimentos esportivos.",
    highlights: [
      "Agendamento e controle de reservas",
      "Visualização de disponibilidade em tempo real",
      "Gestão de clientes e histórico",
    ],
    repoUrl: "https://github.com/jofavaretto/winner-sistema",
    liveUrl: "",
    images: [],
    category: "dev",
  },
  {
    title: "My Bands (BandasJeff)",
    description:
      "Interface em React focada em componentização e consistência visual, organizada para evoluir por telas e componentes.",
    details:
      "Projeto com foco em UI consistente e componentes reutilizáveis. Estruturei telas e componentes para facilitar evolução incremental, manutenção e refino da experiência do usuário.",
    highlights: [
      "Componentes reutilizáveis e UI consistente",
      "Organização por telas e componentes",
      "Refino de interface e evolução incremental",
    ],
    repoUrl: "https://github.com/jofavaretto/my-bands",
    images: [
      "projects/my-bands/1.jpg",
      "projects/my-bands/2.jpg",
      "projects/my-bands/3.jpg",
    ],
    category: "dev",
  },
  {
    title: "Mix Saúde (Loja Natural)",
    description:
      "Projeto de catálogo/site com foco em layout responsivo, organização de conteúdo e melhoria contínua da interface.",
    details:
      "Catálogo com foco em apresentação clara dos produtos, seções bem definidas, responsividade e organização do conteúdo. Ideal para evoluir para filtros/categorias e integração com WhatsApp.",
    highlights: [
      "Estrutura clara de páginas e seções",
      "Ajustes de layout e consistência visual",
      "Organização do projeto para manutenção",
    ],
    repoUrl: "https://github.com/jofavaretto/MixSaude",
    images: ["projects/mix-saude/1.jpg", "projects/mix-saude/2.jpg"],
    category: "dev",
  },
  {
    title: "Meu Lembrete (em andamento)",
    description:
      "Projeto em evolução com foco em fluxo de uso, organização por funcionalidades e construção iterativa.",
    details:
      "Projeto em andamento estruturado por funcionalidades. A base foi montada para evoluir por features, com clareza e manutenção facilitada.",
    highlights: [
      "Desenvolvimento por etapas e refinamentos",
      "Base organizada para evolução por features",
      "Foco em manutenção e clareza do código",
    ],
    repoUrl: "https://github.com/jofavaretto/meu-lembrete",
    images: ["projects/meu-lembrete/1.jpg"],
    category: "dev",
  },
  {
    title: "Jogo Quiz (Segurança do Trabalho)",
    description:
      "Quiz interativo com lógica de pontuação, feedback ao usuário e interface objetiva.",
    details:
      "Quiz com fluxo de perguntas e resultado final, pontuação e feedback. Trabalhei estados e interação com o usuário para manter o uso claro e direto.",
    highlights: [
      "Fluxo interativo com estados (perguntas/resultado)",
      "Reutilização de blocos de UI",
      "Ajustes e correções por iteração",
    ],
    repoUrl: "https://github.com/jofavaretto/jogoQuiz-Seguranca-do-Trabalho",
    images: ["projects/quiz/1.jpg", "projects/quiz/2.jpg"],
    category: "dev",
  },
  {
    title: "Calculadora IMC Simples",
    description:
      "Aplicação objetiva com estado, validação básica e feedback visual do resultado.",
    details:
      "Calculadora IMC com formulário, validações e retorno visual. Projeto simples, mas bem organizado e fácil de evoluir.",
    highlights: [
      "Formulário + validação + cálculo",
      "Tratamento de estados (erro/resultado)",
      "Código simples e fácil de manter",
    ],
    repoUrl: "https://github.com/jofavaretto/CalculadoraImc",
    images: ["projects/imc/1.jpg"],
    category: "dev",
  },
  {
    title: "Simulação de Algoritmos de Ordenação",
    description:
      "Projeto focado em clareza de lógica e organização do código para visualização/estudo.",
    details:
      "Estruturei a lógica separada da UI para facilitar estudo, leitura e evolução do código. Ideal para expandir com animações e comparativos.",
    highlights: [
      "Estrutura lógica separada da interface",
      "Organização e legibilidade do código",
      "Evolução por refinamentos",
    ],
    repoUrl: "https://github.com/jofavaretto/AlgoritmosOrdenacao",
    images: ["projects/ordenacao/1.jpg", "projects/ordenacao/2.jpg"],
    category: "dev",
  },
  {
    title: "Site de Festa de Família",
    description:
      "Site com páginas e layout consistente para apresentação e navegação simples.",
    details:
      "Site com navegação simples e seções claras. Trabalhei consistência visual e organização do conteúdo para fácil manutenção.",
    highlights: [
      "Estrutura de páginas e navegação",
      "Consistência visual e organização do conteúdo",
      "Refinos de layout e experiência",
    ],
    repoUrl: "https://github.com/jofavaretto/festa-familia",
    images: ["projects/festa/1.jpg", "projects/festa/2.jpg"],
    category: "dev",
  },
];