import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/svg.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/iconmonstr-github-1.svg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "../i18n";

const links = ["home", "projects", "experience", "skills", "about"];

export const NavBar = () => {
  const { t } = useI18n();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that crosses the middle of the viewport while scrolling.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActiveLink(hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    [...links, "connect"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="xl" collapseOnSelect className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="David Marsal" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={t.nav.menu}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((id) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={activeLink === id ? "active navbar-link" : "navbar-link"}
                aria-current={activeLink === id ? "true" : undefined}
              >
                {t.nav[id]}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/davidmarsalivars/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/dmarsal90" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <LanguageSwitcher />
            <a className="vvd" href="#connect">
              <span>{t.nav.connect}</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
