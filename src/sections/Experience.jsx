import { Container } from "react-bootstrap";
import TrackVisibility from "../components/TrackVisibility";
import { experience } from "../data/experience";
import { useI18n } from "../i18n";

const formatMonth = (ym, locale) =>
  new Date(`${ym}-01T00:00:00`).toLocaleDateString(locale, { month: "short", year: "numeric" });

export const Experience = () => {
  const { t, locale } = useI18n();
  return (
    <section className="experience about" id="experience">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`skill-bx ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
              <h2>{t.experience.title}</h2>
              <ol className="timeline timeline-wide text-start">
                {experience.map(({ key, company, start, end }) => {
                  const item = t.experience.items[key];
                  return (
                    <li key={key} className="timeline-item">
                      <time>{formatMonth(start, locale)} – {end ? formatMonth(end, locale) : t.experience.present}</time>
                      <h3>{item.role}</h3>
                      <h4>{company ?? item.place}</h4>
                      <p>{item.text}</p>
                    </li>
                  );
                })}
              </ol>
            </div>}
        </TrackVisibility>
      </Container>
    </section>
  );
};
