import colorSharp from "../img/color-sharp.png";

const groups = [
  { title: "Languages", items: ["PHP", "JavaScript", "Java", "SQL"] },
  { title: "Frameworks and libraries", items: ["Laravel", "Symfony", "CakePHP", "Yii", "Vue.js", "React", "jQuery", "WordPress", "Bootstrap", "Materialize", "Material UI"] },
  { title: "Tools and practices", items: ["Git", "MySQL", "REST API", "SOAP", "SSO", "SOLID", "Sass", "Less", "Scrum"] },
];

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div className="skill-bx">
        <h2>Skills</h2>
        <p>The technologies I use day to day.</p>
        {groups.map(({ title, items }) => (
          <div key={title} className="skill-group">
            <h3>{title}</h3>
            <ul className="chips justify-content-center">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="" />
  </section>
);
