export type Project = {
  title: string;
  description: string;
  details: string;
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  images?: string[];
  tags?: string[];
  category?: "dev" | "teaching";
};

export const projects: Project[] = [
  {
    title: "Empreende SC",
    description:
      "Plataforma de gestão de empreendimentos catarinenses com dashboard, filtros por segmento, CRUD completo e design responsivo.",
    details:
      "Sistema desenvolvido para catalogar e gerenciar empreendimentos de Santa Catarina. Conta com dashboard de métricas (total, ativos, inativos, segmentos), listagem com busca por nome, município e empreendedor, filtros por segmento e status, formulário completo de cadastro/edição com validação, e suporte responsivo para mobile.",
    highlights: [
      "Dashboard com métricas: total, ativos, inativos e segmentos",
      "Listagem com busca e filtros por segmento e status",
      "CRUD completo de empreendimentos",
      "Formulário com nome, município, CNPJ, segmento e contato",
      "Tags coloridas por segmento (Tecnologia, Indústria, etc.)",
      "Layout responsivo — funciona em mobile e desktop",
    ],
    repoUrl: "https://github.com/jofavaretto/empreendesc",
    liveUrl: "",
    tags: ["HTML", "CSS", "JavaScript"],
    images: [
      "projects/empreende-sc/1-dashboard.png",
      "projects/empreende-sc/2-lista-empreendimentos.png",
      "projects/empreende-sc/3-busca-filtros.png",
      "projects/empreende-sc/4-editar-empreendimento.png",
      "projects/empreende-sc/5-mobile.png",
    ],
    category: "dev",
  },
  {
    title: "Gestão de Quadras",
    description:
      "Sistema completo para gestão de quadras esportivas: agenda visual, reservas fixas e avulsas, controle de pagamentos e cadastro de alunos.",
    details:
      "Sistema desenvolvido para otimizar o dia a dia de estabelecimentos esportivos. Conta com agenda mensal interativa com visualização por quadra e tipo de reserva, modal de detalhes do dia com horários livres e reservas pendentes, formulário completo para criação de reservas (data, quadra, horário, cliente, tipo e valor), além de módulos de pagamentos e mensalidades de alunos.",
    highlights: [
      "Agenda mensal com reservas por cor e quadra",
      "Modal de dia com horários livres e reservas",
      "Formulário de reserva com tipos avulso e fixo",
      "Módulo de pagamentos e mensalidades",
      "Importação de horários fixos",
      "Status de pagamento: Pago / Pendente",
      "Painel com total, pagos, pendentes e valor a receber",
      "Integração com WhatsApp por cliente",
    ],
    repoUrl: "https://github.com/jofavaretto/winner-sistema",
    liveUrl: "",
    tags: ["JavaScript", "HTML", "CSS"],
    images: [
      "projects/gestao-quadras/2-agenda-calendario.png",
      "projects/gestao-quadras/1-reservas-dia.png",
      "projects/gestao-quadras/3-formulario-reserva.png",
      "projects/gestao-quadras/4-painel-pagamentos.png",
    ],
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
    tags: ["React", "TypeScript"],
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
    tags: ["HTML", "CSS", "JavaScript"],
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
    tags: ["React", "TypeScript"],
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
    tags: ["JavaScript", "HTML", "CSS"],
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
    tags: ["JavaScript", "HTML", "CSS"],
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
    tags: ["JavaScript", "HTML"],
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
    tags: ["HTML", "CSS"],
    images: ["projects/festa/1.jpg", "projects/festa/2.jpg"],
    category: "dev",
  },
];