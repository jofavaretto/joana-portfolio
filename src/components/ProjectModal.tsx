import React, { useEffect, useMemo, useState } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const images = useMemo(() => project?.images ?? [], [project]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [project?.title]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((p) => Math.min(p + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIdx((p) => Math.max(p - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, images.length]);

  if (!project) return null;

  const current = images[idx];

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Detalhes do projeto">
      <div className="modalCard">
        <button className="modalClose" onClick={onClose} aria-label="Fechar">
          <span className="material-symbols-rounded" aria-hidden="true">close</span>
        </button>

        <div className="modalHeader">
          <h3 className="modalTitle">{project.title}</h3>
          <p className="modalDesc">{project.details}</p>
        </div>

        {images.length > 0 ? (
          <div className="gallery">
            <div className="galleryMain">
              <button
                className="galleryNav"
                onClick={() => setIdx((p) => Math.max(p - 1, 0))}
                disabled={idx === 0}
                aria-label="Imagem anterior"
              >
                <span className="material-symbols-rounded" aria-hidden="true">chevron_left</span>
              </button>

              <img
                className="galleryImg"
                src={`${import.meta.env.BASE_URL}${current}`}
                alt={`Imagem do projeto ${project.title}`}
              />

              <button
                className="galleryNav"
                onClick={() => setIdx((p) => Math.min(p + 1, images.length - 1))}
                disabled={idx === images.length - 1}
                aria-label="Próxima imagem"
              >
                <span className="material-symbols-rounded" aria-hidden="true">chevron_right</span>
              </button>
            </div>

            <div className="thumbRow">
              {images.map((img, i) => (
                <button
                  key={img}
                  className={`thumb ${i === idx ? "active" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Abrir imagem ${i + 1}`}
                >
                  <img src={`${import.meta.env.BASE_URL}${img}`} alt="" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="emptyGallery">
            <span className="material-symbols-rounded" aria-hidden="true">image</span>
            <p className="muted">Adicione imagens em public/projects para exibir aqui.</p>
          </div>
        )}

        <div className="modalGrid">
          <div className="modalBox">
            <div className="modalBoxTitle">Destaques</div>
            <ul className="bullets bulletsSmall">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="modalBox">
            <div className="modalBoxTitle">Links</div>
            <div className="modalLinks">
              <a className="btn" href={project.repoUrl} target="_blank" rel="noreferrer">
                <span className="material-symbols-rounded" aria-hidden="true">code</span>
                <span>Repositório</span>
              </a>

              {project.liveUrl ? (
                <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  <span className="material-symbols-rounded" aria-hidden="true">open_in_new</span>
                  <span>Ver online</span>
                </a>
              ) : (
                <span className="muted small">Deploy em breve</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <button className="modalBackdrop" onClick={onClose} aria-label="Fechar modal" />
    </div>
  );
}
