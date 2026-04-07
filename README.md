# 🟣 Joana Favaretto — Portfólio

> Portfólio pessoal de Joana Favaretto — Desenvolvedora Full Stack com foco em Frontend e UX, e Professora de Informática e Programação.

🔗 **Deploy:** [jofavaretto.github.io/joana-portfolio](https://jofavaretto.github.io/joana-portfolio)

---

## ✨ Sobre o projeto

Portfolio desenvolvido em **React + TypeScript + Vite**, com fundo animado de circuito IA, tema escuro refinado e design responsivo. Construído para apresentar projetos de desenvolvimento e atuação como professora de forma clara, moderna e impactante.

---

## 🎨 Design System

### Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0d1128` | Fundo da página |
| `--surface` | `#161b38` | Cards e superfícies |
| `--surface-2` | `#1c2140` | Superfícies secundárias |
| `--surface-3` | `#232849` | Hover e destaques suaves |
| `--purple` | `#8b5cf6` | Cor primária / ações |
| `--purple-light` | `#c4b5fd` | Textos e ícones roxos |
| `--green` | `#10b981` | Status ativo / disponível |
| `--green-light` | `#6ee7b7` | Chips e labels verdes |
| `--blue` | `#93c5fd` | Gradiente de nome / accent |
| `--text` | `#f2f4ff` | Texto principal |
| `--text-muted` | `#c2cbec` | Texto secundário |

### Tipografia

| Fonte | Uso |
|---|---|
| **Plus Jakarta Sans** | Títulos, nome, cards |
| **JetBrains Mono** | Código, labels, chips, logo |

### Componentes principais

- **AICircuitBackground** — canvas animado com trilhos, nós e pulsos de dados
- **ProjectModal** — modal com galeria de imagens, destaques e links
- **Role chips** — tags coloridas (roxo, azul, verde) para identificar papéis
- **Highlight cards** — mini cards com ícone + texto no hero
- **Subject cards** — cards de disciplinas na seção Professora

---

## 🗂️ Estrutura do projeto

```
joana-portfolio/
├── public/
│   ├── profile.jpg                  # Foto de perfil
│   ├── icone.ico                    # Favicon
│   └── projects/
│       ├── gestao-quadras/          # Prints do sistema Winner
│       │   ├── 1-reservas-dia.png
│       │   ├── 2-agenda-calendario.png
│       │   ├── 3-formulario-reserva.png
│       │   └── 4-painel-pagamentos.png
│       ├── my-bands/
│       ├── mix-saude/
│       └── ...
├── src/
│   ├── components/
│   │   ├── AICircuitBackground.tsx  # Fundo animado canvas
│   │   └── ProjectModal.tsx         # Modal de projeto
│   ├── data/
│   │   └── projects.ts              # Lista de projetos
│   ├── App.tsx                      # Componente principal
│   ├── App.css                      # Estilos globais
│   └── main.tsx                     # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 📑 Seções

| Seção | Descrição |
|---|---|
| **Hero** | Foto, nome, chips de papel, bio, highlights e CTAs |
| **Projetos** | Grid de cards com modal detalhado e galeria de imagens |
| **Professora** | Banner institucional, disciplinas e stats |
| **Sobre** | Texto profissional e stack de ferramentas |
| **Contato** | Links para GitHub, LinkedIn e e-mail |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jofavaretto/joana-portfolio.git

# Acesse a pasta
cd joana-portfolio

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 📦 Build e deploy

### Build de produção

```bash
npm run build
```

Os arquivos gerados ficam em `/dist`.

---

## 🌐 Deploy no GitHub Pages

### 1. Instale o gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Configure o vite.config.ts

Verifique se o `base` está definido com o nome do seu repositório:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/joana-portfolio/',
})
```

### 3. Adicione os scripts no package.json

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Faça o deploy

```bash
npm run deploy
```

Isso vai buildar o projeto e publicar na branch `gh-pages` automaticamente.

### 5. Configure o GitHub Pages

No repositório do GitHub:
- Vá em **Settings → Pages**
- Em **Source**, selecione a branch **gh-pages**
- Clique em **Save**

Após alguns minutos, o site estará disponível em:
`https://jofavaretto.github.io/joana-portfolio`

---

## 🔄 Fluxo para atualizar o site

Sempre que fizer alterações e quiser publicar:

```bash
# 1. Adiciona os arquivos modificados
git add .

# 2. Faz o commit com uma mensagem descritiva
git commit -m "feat: descrição do que foi alterado"

# 3. Envia para o GitHub
git push origin main

# 4. Faz o deploy para o GitHub Pages
npm run deploy
```

> 💡 O `npm run deploy` já roda o build automaticamente antes de publicar.

---

## ➕ Como adicionar um novo projeto

Abra `src/data/projects.ts` e adicione um novo objeto no array `projects`:

```ts
{
  title: "Nome do Projeto",
  description: "Descrição curta para o card.",
  details: "Descrição longa para o modal.",
  highlights: [
    "Funcionalidade 1",
    "Funcionalidade 2",
  ],
  repoUrl: "https://github.com/jofavaretto/nome-repo",
  liveUrl: "https://link-do-deploy.com", // opcional
  images: [
    "projects/nome-projeto/1.png",
    "projects/nome-projeto/2.png",
  ],
  category: "dev",
},
```

Coloque as imagens em `public/projects/nome-projeto/`.

---

## ➕ Como adicionar uma nova disciplina

Abra `src/App.tsx` e localize o array `teachingSubjects`. Descomente o bloco de exemplo e preencha:

```ts
{
  icon: "science",        // ícone do Material Symbols
  title: "Sua Disciplina",
  description: "Descrição da disciplina.",
  level: "Nível de ensino",
},
```

---

## 🛠️ Tech Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI |
| TypeScript | 5.9 | Tipagem |
| Vite | 7 | Bundler |
| CSS Modules | — | Estilos |
| Google Fonts | — | Plus Jakarta Sans + JetBrains Mono |
| Material Symbols | — | Ícones |
| GitHub Pages | — | Deploy |

---

## 📬 Contato

- **GitHub:** [github.com/jofavaretto](https://github.com/jofavaretto)
- **LinkedIn:** [linkedin.com/in/joanafavaretto](https://www.linkedin.com/in/joanafavaretto/)
- **E-mail:** joanafavaretto180@gmail.com

---

<p align="center">Feito com 💜 por Joana Favaretto</p>