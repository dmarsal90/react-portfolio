import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/svg.svg";
import { Github, Linkedin, Envelope, FileEarmarkArrowDown } from "react-bootstrap-icons";
import { useI18n } from "../i18n";

export const Footer = () => {
  const { t, locale } = useI18n();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="David Marsal" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <nav aria-label={t.footer.links} className="footer-links">
              <a href="https://github.com/dmarsal90" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/davidmarsalivars/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin aria-hidden="true" /></a>
              <a href="mailto:davidmarsalivars@gmail.com" aria-label="Email" title="Email"><Envelope aria-hidden="true" /></a>
              <a href={`/David_Marsal_Ivars_CV_${locale.toUpperCase()}.pdf`} download aria-label={t.footer.cv} title={t.footer.cv}><FileEarmarkArrowDown aria-hidden="true" /></a>
            </nav>
            <p>© {new Date().getFullYear()}. {t.footer.rights}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
