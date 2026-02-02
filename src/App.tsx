import "./styles.css";
import { projects } from "./data/projects";
import AICircuitBackground from "./components/AICircuitBackground";




function Badge({ text }: { text: string }) {
  return <span className="badge">{text}</span>;
}

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

  return (
    <div className="page">
  <AICircuitBackground className="bgCanvas" />

  {/* resto do seu site */}

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
              <p className="heroLead">
                Front-End React com foco em componentização, UI consistente e integração com APIs.
                Entrego com organização, refino e atenção à experiência do usuário.
              </p>

            </p>

            <div className="heroActions">
              <a className="btn primary" href="#projetos">
                Ver projetos
              </a>
              <a className="btn ghost" href="#contato">
                Contato
              </a>
            </div>

            <div className="heroBadges">
              <Badge text="React" />
              <Badge text="TypeScript" />
              <Badge text="APIs REST/JSON" />
              <Badge text="Git/GitHub" />
              <Badge text="Componentização" />
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
              <div className="miniTitle"> Sobre Mim</div>
              <ul className="miniList">
                <li>Olá, me chamo Joana Favaretto, e esse é meu portfólio profissional. </li>
                <li>Aqui você encontrará projetos desenvolvidos com React, TypeScript e APIs REST/JSON.</li>
                <li>Além de práticas pedagógicas de ensino aliadas ao desenvolvimento de software.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* ESPECIALIDADES */}
        <section className="section">
          <SectionTitle
            eyebrow="O que eu faço"
            title="Especialidades"
            
          />

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
              <p>
                Consumo REST/JSON (fetch/axios), estados de loading/erro e UX previsível.
              </p>
            </article>

            <article className="serviceCard">
              <div className="serviceIcon"></div>
              <h3>Refino e performance</h3>
              <p>
                Correção de bugs, melhorias incrementais e noções de acessibilidade e desempenho.
              </p>
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
          <SectionTitle
            eyebrow="Sobre"
            title="Como eu trabalho"
            
          />

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
                Experiência ensinando e conduzindo projetos me deu clareza, comunicação, trabalho em equipe, empatia e principalmente
                hábito de evoluir com feedback. Adoro aprender e resolver problemas de forma criativa e inovadora.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionTitle
            eyebrow="Stack"
            title="Skills"
      
          />

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
      />

  <div className="projectsGrid">
    {projects.map((p) => (
      <article key={p.title} className="card projectCard fx-card">
        <div className="projectHeader">
          <h3 className="fx-title">{p.title}</h3>

          <div className="stackRow">
            {p.stack.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="muted">{p.description}</p>

        <ul className="bullets">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="projectLinks fx-links">
          <a className="btn" href={p.repoUrl} target="_blank" rel="noreferrer">
            Repositório
          </a>

          {p.liveUrl ? (
            <a className="btn primary" href={p.liveUrl} target="_blank" rel="noreferrer">
              Ver online
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
          <SectionTitle
            eyebrow="Experiência"
            title="Práticas Pedagógicas"
                      />

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
                <li>Rubricas: critérios objetivos (UI, código, organização, entrega);</li>
                <li>Checkpoints por sprint para revisão e melhoria;</li>
                <li>Autoavaliação e reflexão técnica;</li>
                <li>Apresentações de projetos e evolução técnica para auxiliar na comunicação.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Didática aplicada a desenvolvimento</h3>
              <ul className="bullets">
                <li>Explicação por camadas: base, prática guiada e desafios.</li>
                <li>Foco em leitura de código, debug e boas práticas.</li>
                <li>Contexto real: requisitos, usuários, produto, setores da indústria.</li>
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
          <SectionTitle
            eyebrow="Contato"
            title="Vamos conversar"
          
          />

          <div className="card">
            <p style={{ marginTop: 0 }}>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:joanafavaretto180@gmail.com">joanafavaretto180@gmail.com</a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/jofavaretto" target="_blank" rel="noreferrer">
                github.com/jofavaretto
              </a>
            </p>

            <p style={{ marginBottom: 0 }}>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/jofavaretto"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jofavaretto
              </a>
            </p>
            <p style={{ marginBottom  : 0 }}>
              <strong>Whastapp:</strong>{""}
              <a href="https://wa.me/554991824099" target="_blank" rel="noreferrer">WhatsApp</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {year} Joana Favaretto</span>
        <span className="muted">Portfólio em React publicado no GitHub Pages</span>
      </footer>
    </div>
  );
}
