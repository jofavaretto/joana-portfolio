import { useState, useEffect, useRef } from "react";
import AICircuitBackground from "./components/AICircuitBackground";
import ProjectModal from "./components/ProjectModal";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";
import "./App.css";

const teachingSubjects = [
  {
    icon: "laptop_mac",
    title: "Informática",
    description:
      "Ferramentas digitais, lógica de programação e aplicações práticas de tecnologia no cotidiano.",
    level: "Básico/Intermediário",
  },
  {
    icon: "terminal",
    title: "Programação",
    description:
      "Raciocínio lógico, resolução de problemas e aplicação da programação em contextos reais.",
    level: "Ensino Técnico",
  },
  // ── Adicione mais disciplinas aqui ──────────────────────────────────────
  // {
  //   icon: "science",
  //   title: "Sua Disciplina",
  //   description: "Descrição da disciplina.",
  //   level: "Nível de ensino",
  // },
];

type Tab = "dev" | "teaching" | "about" | "contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dev");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navItems: { id: Tab; label: string; icon: string }[] = [
    { id: "dev", label: "Projetos", icon: "code" },
    { id: "teaching", label: "Professora", icon: "school" },
    { id: "about", label: "Sobre", icon: "person" },
    { id: "contact", label: "Contato", icon: "mail" },
  ];

  return (
    <div className="app">
      <AICircuitBackground className="bg-canvas" />
      <div className="grain" aria-hidden="true" />
      <div className="glow glow-purple" aria-hidden="true" />
      <div className="glow glow-green" aria-hidden="true" />

      {/* ══ NAVBAR ══ */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">JF</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="nav-links">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                className={`nav-btn ${activeTab === n.id ? "active" : ""}`}
                onClick={() => { setActiveTab(n.id); setMenuOpen(false); }}
              >
                <span className="material-symbols-rounded nav-icon">{n.icon}</span>
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            <span className="material-symbols-rounded">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((n) => (
              <button
                key={n.id}
                className={`mobile-nav-btn ${activeTab === n.id ? "active" : ""}`}
                onClick={() => { setActiveTab(n.id); setMenuOpen(false); }}
              >
                <span className="material-symbols-rounded">{n.icon}</span>
                {n.label}
              </button>
            ))}

          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-photo-col">
            <div className="hero-photo-wrap">
              <div className="hero-photo-ring" />
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Joana Favaretto" className="hero-photo" />

            </div>
            <p className="hero-eyebrow">
              <span className="dot dot-green" />
              Disponível para projetos e ideias
            </p>
          </div>

          <div className="hero-text">
            <h1 className="hero-name">
              <span className="hero-name-first">Joana</span>
              <span className="hero-name-accent">Favaretto</span>
            </h1>
            <div className="hero-roles">
              <span className="role-chip role-chip--purple">
                <span className="material-symbols-rounded">devices</span>
                Full Stack
              </span>
              <span className="role-chip role-chip--blue">
                <span className="material-symbols-rounded">brush</span>
                UX / Frontend
              </span>
              <span className="role-chip role-chip--green">
                <span className="material-symbols-rounded">school</span>
                Professora
              </span>
            </div>
            <p className="hero-bio">Desenvolvedora Full Stack com foco em frontend e experiência do usuário — criando <span className="bio-highlight bio-highlight--purple">interfaces que encantam e convertem</span>, do banco de dados ao pixel final, com <span className="bio-highlight bio-highlight--green">UX centrado em pessoas reais</span>.</p>
            <div className="hero-cta">
              <button className="cta-primary" onClick={() => {
                setActiveTab("dev");
                setTimeout(() => document.querySelector(".main-content")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}>
                <span className="material-symbols-rounded">folder_open</span>
                Ver projetos
              </button>
              <button className="cta-secondary" onClick={() => {
                setActiveTab("contact");
                setTimeout(() => document.querySelector(".main-content")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}>
                <span className="material-symbols-rounded">mail</span>
                Contato
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span className="material-symbols-rounded scroll-icon">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ══ MAIN ══ */}
      <main className="main-content">

        {/* PROJETOS */}
        {activeTab === "dev" && (
          <section className="section fade-in">
            <div className="section-header">
              <h2 className="section-title"><span className="title-accent">//</span> Projetos</h2>
              <p className="section-sub">Aplicações reais — do código à experiência do usuário.</p>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className={`project-card ${i < 2 ? "project-card--featured" : ""}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onClick={() => setSelectedProject(p)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(p)}
                  role="button"
                  aria-label={`Abrir projeto ${p.title}`}
                >
                  {i < 2 && (
                    <span className="featured-badge">
                      <span className="material-symbols-rounded">star</span>
                      Destaque
                    </span>
                  )}
                  <div className="card-top">
                    <span className="material-symbols-rounded card-icon">
                      {i === 0 ? "rocket_launch" : i === 1 ? "sports_tennis" : "folder_code"}
                    </span>
                    <span className="card-arrow material-symbols-rounded">arrow_outward</span>
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-footer">
                    {(p.tags ?? ["React", "TypeScript"]).map((tag) => (
                      <span key={tag} className="card-tag" data-tech={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* PROFESSORA */}
        {activeTab === "teaching" && (
          <section className="section fade-in">
            <div className="section-header">
              <h2 className="section-title"><span className="title-accent">//</span> Professora</h2>
              <p className="section-sub">Formando pessoas com tecnologia, prática e visão de futuro.</p>
            </div>

            <div className="teaching-banner">
              <div className="teaching-banner-icon">
                <span className="material-symbols-rounded">school</span>
              </div>
              <div>
                <h3 className="teaching-banner-title">Educação que transforma</h3>
                <p className="teaching-banner-text">
                  Atuo como professora conectando o conteúdo curricular à realidade tecnológica e ao mercado de trabalho.
                  Metodologia ativa, projetos práticos e aprendizado que vai além da apostila.
                </p>
              </div>
            </div>

            <h3 className="subjects-heading">
              <span className="material-symbols-rounded">menu_book</span>
              Disciplinas que ministro
            </h3>

            <div className="subjects-grid">
              {teachingSubjects.map((s) => (
                <div className="subject-card" key={s.title}>
                  <div className="subject-icon-wrap">
                    <span className="material-symbols-rounded subject-icon">{s.icon}</span>
                  </div>
                  <div>
                    <h4 className="subject-title">{s.title}</h4>
                    <span className="subject-level">{s.level}</span>
                    <p className="subject-desc">{s.description}</p>
                  </div>
                </div>
              ))}
              <div className="subject-card subject-card--soon">
                <div className="subject-icon-wrap subject-icon-wrap--soon">
                  <span className="material-symbols-rounded subject-icon">add_circle</span>
                </div>
                <div>
                  <h4 className="subject-title">+ Em breve</h4>
                  <span className="subject-level">Adicionando mais disciplinas...</span>
                  <p className="subject-desc">Novas disciplinas serão incluídas conforme a atuação for expandindo.</p>
                </div>
              </div>
            </div>

            <div className="teaching-stats">
              <div className="stat-item">
                <span className="stat-number">+</span>
                <span className="stat-label">Alunos formados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Disciplinas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicação</span>
              </div>
            </div>
          </section>
        )}

        {/* SOBRE */}
        {activeTab === "about" && (
          <section className="section fade-in">
            <div className="section-header">
              <h2 className="section-title"><span className="title-accent">//</span> Sobre mim</h2>
            </div>
            <div className="about-grid">
              <div className="about-text-block">
                <p className="about-text">
                  Sou <strong>Joana Favaretto</strong> — desenvolvedora Full Stack com alma de frontend.
                  Me importo profundamente com a experiência do usuário: cada detalhe de interface,
                  cada interação e cada pixel conta.
                </p>
                <p className="about-text">
                  Construo do backend ao frontend, mas é na camada visual e na usabilidade que
                  coloco minha energia — acredito que tecnologia boa é aquela que as pessoas
                  conseguem usar sem nem perceber o esforço por trás.
                </p>
                <p className="about-text">
                  Também atuo como professora, levando esse mesmo olhar prático e humano
                  para dentro da sala de aula.
                </p>
              </div>
              <div className="skills-block">
                <h3 className="skills-heading">Stack & Ferramentas</h3>
                <div className="skills-list">
                  {["React","TypeScript","JavaScript","HTML5","CSS3","Node.js","Git","Vite","UX/UI","Figma"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTATO */}
        {activeTab === "contact" && (
          <section className="section fade-in">
            <div className="section-header">
              <h2 className="section-title"><span className="title-accent">//</span> Contato</h2>
              <p className="section-sub">Vamos conversar sobre projetos, parcerias ou oportunidades.</p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href="https://github.com/jofavaretto" target="_blank" rel="noreferrer">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-title">GitHub</div>
                  <div className="contact-card-sub">@jofavaretto</div>
                </div>
                <span className="material-symbols-rounded contact-arrow">arrow_outward</span>
              </a>

              <a className="contact-card" href="https://www.linkedin.com/in/joanafavaretto/" target="_blank" rel="noreferrer">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <div>
                  <div className="contact-card-title">LinkedIn</div>
                  <div className="contact-card-sub">Joana Favaretto</div>
                </div>
                <span className="material-symbols-rounded contact-arrow">arrow_outward</span>
              </a>

              <a className="contact-card" href="mailto:joanafavaretto180@gmail.com">
                <span className="contact-card-icon">
                  <span className="material-symbols-rounded" style={{ fontSize: 28 }}>mail</span>
                </span>
                <div>
                  <div className="contact-card-title">E-mail</div>
                  <div className="contact-card-sub">joanafavaretto180@gmail.com</div>
                </div>
                <span className="material-symbols-rounded contact-arrow">arrow_outward</span>
              </a>
            </div>
          </section>
        )}
      </main>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <span className="footer-logo">
          <span className="logo-bracket">&lt;</span>JF<span className="logo-bracket">/&gt;</span>
        </span>

        <span className="footer-copy">Feito com React · {new Date().getFullYear()}</span>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}