import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../img/color-sharp2.png";
import TrackVisibility from './TrackVisibility';

const gh = (repo) => `https://github.com/dmarsal90/${repo}`;

const projects = [
  {
    title: "Matchly",
    description: "Open-source remote job search tool: gathers listings from public sources, scores how well each fits your CV, tracks your applications and helps you prepare interviews. Available in Spanish, English and Portuguese.",
    stack: ["Laravel 13", "Vue 3", "Tailwind 4", "Docker"],
    links: [{ label: "GitHub", url: gh("Matchly") }],
  },
  {
    title: "E-commerce",
    description: "Online store split in a REST API and a multilingual storefront (6 languages): token authentication, guest cart that survives login, and validated API responses.",
    stack: ["Laravel", "Sanctum", "Next.js", "TypeScript", "Zod"],
    links: [{ label: "API", url: gh("ecommerce-api") }, { label: "Storefront", url: gh("ecommerce-front") }],
  },
  {
    title: "ZipWarden",
    description: "Safe ZIP reading and extraction library that protects against zip slip and zip bombs. Same behaviour in two implementations, with Laravel and Symfony integrations on the PHP side.",
    stack: ["PHP", "Laravel", "Symfony", "JavaScript"],
    links: [{ label: "PHP", url: gh("zipwarden-php") }, { label: "JavaScript", url: gh("zipwarden-js") }],
  },
  {
    title: "Whistleblower",
    description: "Internal whistleblowing channel for Laravel and Symfony based on Spain's Ley 2/2023: anonymous reports with tracking codes, legal deadlines, audit trail and data retention.",
    stack: ["PHP", "Laravel", "Symfony", "PHPStan"],
    links: [{ label: "GitHub", url: gh("whistleblower") }],
  },
];

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Open-source projects I build and maintain.</p>
                <Row>
                  {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
                </Row>
              </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="" />
  </section>
);
