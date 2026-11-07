import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { CaseStudy } from "./CaseStudy";
import { useI18n } from "../i18n";

export const ProjectCard = ({ project }) => {
  const { key, stack, links, image, preRelease } = project;
  const { t } = useI18n();
  const [showCase, setShowCase] = useState(false);
  const [open, setOpen] = useState(false);
  const text = t.projects.items[key];

  return (
    <article className={`proj-card${open ? " is-open" : ""}`}>
      {image
        ? <img src={image} alt={`${text.title} ${t.projects.screenshot}`} width="1088" height="680" loading="lazy" />
        : <div className="proj-placeholder" aria-hidden="true"><span>{text.title}</span></div>}
      {preRelease && <span className="proj-badge">{t.projects.preRelease}</span>}
      <div className="proj-overlay">
        <h3>{text.title}</h3>
        <p>{text.summary}</p>
        <button type="button" className="proj-toggle" aria-expanded={open} aria-label={open ? t.projects.less : t.projects.more} onClick={() => setOpen(!open)}>
          <ChevronDown aria-hidden="true" />
        </button>
        <ul className="chips">
          {stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="proj-links">
          <button type="button" className="proj-case-btn" onClick={() => setShowCase(true)}>{t.projects.caseStudy}</button>
          {links.map(({ label, url }) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
      </div>
      <CaseStudy project={project} show={showCase} onHide={() => setShowCase(false)} />
    </article>
  );
};
