import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "../components/TrackVisibility";
import { useI18n } from "../i18n";

export const Hero = () => {
  const { t, locale } = useI18n();
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={9} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{t.hero.tag}</span>
                  <h1>{t.hero.title}</h1>
                  <p>{t.hero.text}</p>
                  <div className="hero-actions">
                    <a className="connect-btn" href="#projects">{t.hero.viewProjects} <ArrowRightCircle size={25} aria-hidden="true" /></a>
                    <a className="hero-link" href="#connect">{t.hero.contact}</a>
                    <a className="hero-link" href={`/David_Marsal_Ivars_CV_${locale.toUpperCase()}.pdf`} download>{t.footer.cv}</a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
