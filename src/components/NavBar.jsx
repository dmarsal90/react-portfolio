import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/svg.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/iconmonstr-github-1.svg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "../i18n";

const links = ["home", "projects", "experience", "skills", "about"];

export const NavBar = () => {
  const { t, locale } = useI18n();
  const navRef = useRef(null);
  const [bar, setBar] = useState(null);
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

  // Slide an underline under the active link; re-measure when the language or the layout changes the link widths.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const el = nav.querySelector(".active");
      if (!el) return setBar((b) => b && { ...b, hidden: true });
      const pad = parseFloat(getComputedStyle(el).paddingLeft);
      setBar({ x: el.offsetLeft + pad, w: el.offsetWidth - 2 * pad });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, [activeLink, locale]);

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
          <Nav ref={navRef} className="ms-auto">
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
            {bar && <span className="nav-indicator" aria-hidden="true" style={{ transform: `translateX(${bar.x}px)`, width: bar.w, opacity: bar.hidden ? 0 : 1 }} />}
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
