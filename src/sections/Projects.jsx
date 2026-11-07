import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import TrackVisibility from "../components/TrackVisibility";
import { projects } from "../data/projects";
import { useI18n } from "../i18n";

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
                  <div className="proj-grid">
                    {projects.map((project) => <ProjectCard key={project.key} project={project} />)}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
