import { Modal } from "react-bootstrap";
import { useI18n } from "../i18n";

export const CaseStudy = ({ project: { key, gallery = [] }, show, onHide }) => {
  const { t } = useI18n();
  const text = t.projects.items[key];

  return (
    <Modal show={show} onHide={onHide} size="xl" centered scrollable contentClassName="case-modal" aria-labelledby={`case-${key}`}>
      <Modal.Header closeButton closeVariant="white" closeLabel={t.projects.close}>
        <Modal.Title as="h3" id={`case-${key}`}>{t.projects.caseStudy}: {text.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="case-study-text">
          <div>
            <h4>{t.projects.problem}</h4>
            <p>{text.problem}</p>
            <h4>{t.projects.solution}</h4>
            <p>{text.solution}</p>
          </div>
          <div>
            <h4>{t.projects.decisions}</h4>
            <ul>
              {text.decisions.map((decision) => <li key={decision}>{decision}</li>)}
            </ul>
          </div>
        </div>
        {gallery.length > 0 && (
          <div className="case-study-gallery">
            {gallery.map((src, i) => (
              <figure key={src}>
                <img src={src} alt={text.shots[i]} width="1280" height="800" loading="lazy" />
                <figcaption>{text.shots[i]}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
