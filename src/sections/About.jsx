import { Container } from "react-bootstrap";
import TrackVisibility from "../components/TrackVisibility";
import { useI18n } from "../i18n";

const education = [
  { date: "2014 – 2019", degree: "engineering", place: "Universidad Ignacio Agramonte" },
  { date: "2020 – 2021", degree: "crypto", place: "UCI" },
];

export const About = () => {
  const { t } = useI18n();
  const { about } = t;
  return (
    <section className="about" id="about">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={`skill-bx ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
              <h2>{about.title}</h2>
              <p>{about.text}</p>
              <div className="row text-start">
                <div className="col-12 col-lg-6">
                  <h3 className="about-title">{about.education}</h3>
                  <ol className="timeline">
                    {education.map(({ date, degree, place }) => (
                      <li key={degree} className="timeline-item">
                        <time>{date}</time>
                        <h3>{about.degrees[degree]}</h3>
                        <h4>{place}</h4>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="col-12 col-lg-6">
                  <h3 className="about-title">{about.certifications}</h3>
                  <ul className="about-list">{about.certs.map((c) => <li key={c}>{c}</li>)}</ul>
                  <h3 className="about-title">{about.languages}</h3>
                  <ul className="about-list">{about.spoken.map((l) => <li key={l}>{l}</li>)}</ul>
                </div>
              </div>
            </div>}
        </TrackVisibility>
      </Container>
    </section>
  );
};
