import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, stack, links }) => (
  <Col xs={12} md={6}>
    <article className="proj-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="proj-stack">
        {stack.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      <div className="proj-links">
        {links.map(({ label, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
        ))}
      </div>
    </article>
  </Col>
);
