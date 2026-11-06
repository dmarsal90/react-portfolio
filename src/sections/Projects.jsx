import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import { CaseStudy } from "../components/CaseStudy";
import TrackVisibility from "../components/TrackVisibility";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import { projects } from "../data/projects";
import { useI18n } from "../i18n";

// Two cards per row; their case studies open full width right below the pair.
const pairs = Array.from({ length: Math.ceil(projects.length / 2) }, (_, i) => projects.slice(i * 2, i * 2 + 2));

export const Projects = () => {
  const { t } = useI18n();
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>{t.projects.title}</h2>
                  <p>{t.projects.subtitle}</p>
                  {pairs.map((pair) => (
                    <div key={pair[0].key} className="proj-pair">
                      <div className="proj-grid">
                        {pair.map((project) => <ProjectCard key={project.key} project={project} />)}
                      </div>
                      {pair.map((project) => <CaseStudy key={project.key} project={project} />)}
                    </div>
                  ))}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" width="466" height="744" loading="lazy" decoding="async" />
    </section>
  );
};
