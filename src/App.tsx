import "./styles.css";
import { useState } from "react";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";
import AICircuitBackground from "./components/AICircuitBackground";
import ProjectModal from "./components/ProjectModal";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="sectionHeader">
      <div>
        <p className="sectionEyebrow">{eyebrow}</p>
        <h2 className="sectionTitleAlt">{title}</h2>
      </div>
      {subtitle ? <p className="sectionDesc">{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="page">
      <AICircuitBackground className="bgCanvas" />

      <header className="header">
        <a className="brand" href="#top">
          Joana Favaretto<span className="brandDot">.</span>
        </a>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#pedagogia">Práticas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="top" className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroText">
            <p className="kicker">Front-End React • UI • APIs</p>

            <h1 className="heroTitle">Joana Favaretto</h1>
            <p className="heroSubtitle">Portfólio Profissional</p>

            <p className="heroLead">
              Front-End React com foco em componentização, UI consistente e integração com APIs.
              Entrego com organização, refino e atenção à experiência do usuário.
            </p>

            <div className="heroActions">
              <a className="btn primary" href="#projetos">
                Ver projetos
              </a>
              <a className="btn primary" href="#contato">
                Contato
              </a>
            </div>
          </div>

          <aside className="heroMedia">
            <div className="photoFrame">
              <img
                className="heroPhoto"
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Foto da Joana Favaretto"
              />
              <div className="photoGlow" aria-hidden="true" />
            </div>

            <div className="miniCard">
              <div className="miniTitle">Sobre Mim</div>
              <ul className="miniList">
                <li>Projetos em React e TypeScript</li>
                <li>Integração com APIs REST/JSON</li>
                <li>Práticas pedagógicas aplicadas a software</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* ESPECIALIDADES */}
        <section className="section">
          <SectionTitle eyebrow="O que eu faço" title="Especialidades" />

          <div className="servicesGrid">
            <article className="serviceCard">
              <div className="serviceIcon">{"</>"}</div>
              <h3>Componentização em React</h3>
              <p>
                Componentes reutilizáveis, padronização visual e organização para manutenção fácil.
              </p>
            </article>

            <article className="serviceCard">
              <div className="serviceIcon">{"{ }"}</div>
              <h3>Integração com APIs</h3>
              <p>Consumo REST/JSON (fetch/axios), estados de loading/erro e UX previsível.</p>
            </article>

            <article className="serviceCard">
              <div className="serviceIcon">
                <span className="material-symbols-rounded" aria-hidden="true">
                  speed
                </span>
              </div>
              <h3>Refino e performance</h3>
              <p>Correção de bugs, melhorias incrementais e noções de acessibilidade e desempenho.</p>
            </article>

            <article className="serviceCard">
              <div className="serviceIcon">⇄</div>
              <h3>Entrega iterativa</h3>
              <p>
                Evolução com feedback e alinhamento com produto/design, focando valor para o usuário.
              </p>
            </article>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <SectionTitle eyebrow="Sobre" title="Como eu trabalho" />

          <div className="grid2">
            <div className="card">
              <h3>Meu foco</h3>
              <p className="muted">
                Interfaces em React com consistência visual, componentização e integração com APIs.
                Gosto de código limpo, padronizado e sustentável.
              </p>
            </div>

            <div className="card">
              <h3>Meu diferencial</h3>
              <p className="muted">
                Experiência ensinando e conduzindo projetos me deu clareza, comunicação, trabalho em
                equipe, empatia e principalmente hábito de evoluir com feedback. Adoro aprender e
                resolver problemas de forma criativa e inovadora.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionTitle eyebrow="Stack" title="Skills" />

          <div className="card">
            <div className="pillGrid">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "HTML/CSS",
                "Consumo de API (REST/JSON)",
                "Git/GitHub (branches/PR)",
                "Componentização",
                "Responsividade",
                "Adaptabilidade",
                "UI/UX básico",
                "Comunicação",
                "Organização",
                "Evolução iterativa",
                "Resolução de problemas",
                "Aprendizado contínuo",
                "Criatividade",
                "Trabalho em equipe",
                "Autonomia",
              ].map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="section">
          <SectionTitle
            eyebrow="Portfólio"
            title="Projetos"
            subtitle="Clique em um projeto para ver detalhes, imagens e links."
          />

          <div className="projectsGrid">
            {projects.map((p) => (
              <article
                key={p.title}
                className="card projectCard fx-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelected(p)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
              >
                <div className="projectHeader">
                  <h3 className="fx-title">{p.title}</h3>
                </div>

                <p className="muted">{p.description}</p>

                <ul className="bullets bulletsSmall">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="projectLinks fx-links">
                  <button
                    className="btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(p);
                    }}
                    type="button"
                  >
                    <span className="material-symbols-rounded" aria-hidden="true">
                      info
                    </span>
                    <span>Detalhes</span>
                  </button>

                  <a
                    className="btn"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-rounded" aria-hidden="true">
                      code
                    </span>
                    <span>Repositório</span>
                  </a>

                  {p.liveUrl ? (
                    <a
                      className="btn"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-rounded" aria-hidden="true">
                        open_in_new
                      </span>
                      <span>Online</span>
                    </a>
                  ) : (
                    <span className="muted small">Deploy em breve</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRÁTICAS */}
        <section id="pedagogia" className="section">
          <SectionTitle eyebrow="Experiência" title="Práticas Pedagógicas" />

          <div className="projectsGrid">
            <article className="card">
              <h3>Metodologias Ativas e Projetos</h3>
              <ul className="bullets">
                <li>Aprendizagem baseada em projetos reais</li>
                <li>Feedback contínuo e ciclos iterativos</li>
                <li>Portfólio (GitHub) como evidência de evolução</li>
                <li>Desafios práticos com feedback contínuo</li>
              </ul>
            </article>

            <article className="card">
              <h3>Avaliação formativa</h3>
              <ul className="bullets">
                <li>Rubricas: critérios objetivos (UI, código, organização, entrega)</li>
                <li>Checkpoints por sprint para revisão e melhoria</li>
                <li>Autoavaliação e reflexão técnica</li>
                <li>Apresentações de projetos e evolução técnica para auxiliar na comunicação</li>
              </ul>
            </article>

            <article className="card">
              <h3>Didática aplicada a desenvolvimento</h3>
              <ul className="bullets">
                <li>Explicação por camadas: base, prática guiada e desafios</li>
                <li>Foco em leitura de código, debug e boas práticas</li>
                <li>Contexto real: requisitos, usuários, produto, setores da indústria</li>
              </ul>
            </article>

            <article className="card">
              <h3>Organização e ferramentas</h3>
              <ul className="bullets">
                <li>Sprints e entregas iterativas</li>
                <li>Git/GitHub: commits, branches e PR como rotina</li>
                <li>Documentação enxuta: README, checklist e padrões</li>
              </ul>
            </article>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="section">
          <SectionTitle eyebrow="Contato" title="Vamos conversar" />

          <div className="card">
            <div className="contactGrid">
              <a className="contactLink" href="mailto:joanafavaretto180@gmail.com">
                <span className="material-symbols-rounded" aria-hidden="true">
                  mail
                </span>
                <span>E-mail</span>
              </a>

              <a
                className="contactLink"
                href="https://github.com/jofavaretto"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  code
                </span>
                <span>GitHub</span>
              </a>

              <a
                className="contactLink"
                href="https://www.linkedin.com/in/jofavaretto"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  work
                </span>
                <span>LinkedIn</span>
              </a>

              <a
                className="contactLink"
                href="https://wa.me/554991824099"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  chat
                </span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {year} Joana Favaretto</span>
        <span className="muted">Portfólio em React publicado no GitHub Pages</span>
      </footer>
    
  
  )

      {/* MODAL */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}


        