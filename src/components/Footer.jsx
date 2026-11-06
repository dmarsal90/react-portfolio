import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/svg.svg";
import { useI18n } from "../i18n";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="David Marsal" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <nav aria-label={t.footer.links} className="footer-links">
              <a href="https://github.com/dmarsal90" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/davidmarsalivars/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:davidmarsalivars@gmail.com">Email</a>
              <a href="/David_Marsal_Ivars_CV_EN.pdf" download>{t.footer.cv}</a>
            </nav>
            <p>© {new Date().getFullYear()} David Marsal Ivars. {t.footer.rights}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
