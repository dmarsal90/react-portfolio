import TrackVisibility from "./TrackVisibility";

const education = [
  { date: "Sep 2014 – Jul 2019", title: "Computer Engineering", place: "Universidad Ignacio Agramonte" },
  { date: "Dec 2020 – May 2021", title: "Postgraduate in Cryptography", place: "UCI" },
];

const experience = [
  { date: "Sep 2026 – Present", title: "Web Developer", place: "MegaNet", text: "New features and maintenance of web applications with Laravel on the backend and Vue.js on the frontend." },
  { date: "Jan 2025 – Aug 2026", title: "Backend Developer", place: "Motorflash", text: "Built REST APIs for external integrations and moved legacy projects to modern platforms, improving performance and security." },
  { date: "Jun 2023 – Jan 2024", title: "Web Developer", place: "Cyberline Technologies SL", text: "REST and SOAP APIs to connect external systems, legacy migrations and SSO." },
  { date: "Mar 2023 – Present", title: "Full Stack Developer", place: "Flexvision.be", text: "SQL performance work, external API integrations, fixing critical bugs and security flaws, and modernizing legacy systems with SOLID and OOP." },
  { date: "Sep 2022 – Jan 2023", title: "Full Stack Developer", place: "Lápida Solutions", text: "Database upkeep and query tuning, critical bug fixes, async components and modular CSS with Sass and Less." },
  { date: "Aug 2021 – Dec 2023", title: "Project Manager", place: "CDAI", text: "Estimated resources and schedules, ran project plans and led the team." },
  { date: "Sep 2019 – Jul 2021", title: "Freelance Full Stack Developer", place: "Clients in Chile, Denmark, the United States and Spain", text: "Fixed bugs, finished unfinished products and migrated legacy systems, working remotely." },
];

const Timeline = ({ title, items }) => (
  <>
    <h3 className="about-title">{title}</h3>
    <ol className="timeline">
      {items.map(({ date, title, place, text }) => (
        <li key={`${date}-${title}`} className="timeline-item">
          <time>{date}</time>
          <h4>{title}</h4>
          <h5>{place}</h5>
          {text && <p>{text}</p>}
        </li>
      ))}
    </ol>
  </>
);

export const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <TrackVisibility>
        {({ isVisible }) =>
      <div className={`skill-bx ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
        <h2>About me</h2>
        <p>
          Web developer with over 7 years of experience, specialized in PHP with a full stack profile.
          I work with Laravel, Symfony, CakePHP and Yii, and with JavaScript, React and Vue. I focus on improving
          the performance of existing products, modernizing legacy systems and building new projects from scratch.
        </p>
        <div className="row text-start">
          <div className="col-12 col-lg-6">
            <Timeline title="Experience" items={experience} />
          </div>
          <div className="col-12 col-lg-6">
            <Timeline title="Education" items={education} />
            <h3 className="about-title">Certifications</h3>
            <ul className="about-list">
              <li>Laravel, MySQL and SQL, Git (TestDome, Apr 2022)</li>
              <li>PHP (TestDome, Jan 2023)</li>
              <li>EF SET English (Apr 2022)</li>
              <li>Scrum Foundation SFPC (CertiProf, Jan 2023)</li>
            </ul>
            <h3 className="about-title">Languages</h3>
            <ul className="about-list">
              <li>Spanish: native</li>
              <li>English: advanced</li>
            </ul>
          </div>
        </div>
      </div>}
      </TrackVisibility>
    </div>
  </section>
);
