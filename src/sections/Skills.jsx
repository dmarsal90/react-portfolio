import { Container } from "react-bootstrap";
import TrackVisibility from "../components/TrackVisibility";
import colorSharp from "../assets/img/color-sharp.webp";
import { skills } from "../data/skills";
import { useI18n } from "../i18n";

export const Skills = () => {
  const { t } = useI18n();
  return (
    <section className="skill" id="skills">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`skill-bx ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
              <h2>{t.skills.title}</h2>
              <p>{t.skills.subtitle}</p>
              {skills.map(({ key, items }) => (
                <div key={key} className="skill-group">
                  <h3>{t.skills.groups[key]}</h3>
                  <ul className="chips justify-content-center">
                    {(items ?? t.skills[key]).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>}
        </TrackVisibility>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" width="543" height="744" loading="lazy" decoding="async" />
    </section>
  );
};
