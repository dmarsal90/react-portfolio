import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, stack, links, image }) => (
  <Col xs={12} lg={6}>
    <article className="proj-card">
      {image
        ? <img src={image} alt={`${title} screenshot`} loading="lazy" />
        : <div className="proj-placeholder" aria-hidden="true"><span>{title}</span></div>}
      <div className="proj-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="chips">
          {stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="proj-links">
          {links.map(({ label, url }) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
      </div>
    </article>
  </Col>
);
