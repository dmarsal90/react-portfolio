import { useState } from "react";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import TrackVisibility from '../components/TrackVisibility';
import { useI18n } from "../i18n";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const initialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export const Contact = () => {
  const { t } = useI18n();
  const [details, setDetails] = useState(initialDetails);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => setDetails({ ...details, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    if (form.get("botcheck")) return; // honeypot filled in: a bot
    setSending(true);
    setStatus(null);
    try {
      if (!ACCESS_KEY) throw new Error("VITE_WEB3FORMS_KEY is not set");
      const body = new FormData();
      body.append("access_key", ACCESS_KEY);
      body.append("subject", "Portfolio contact form");
      body.append("name", `${details.firstName} ${details.lastName}`.trim());
      body.append("email", details.email);
      body.append("phone", details.phone);
      body.append("message", details.message);
      const response = await fetch(ENDPOINT, { method: "POST", body });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message ?? `HTTP ${response.status}`);
      setDetails(initialDetails);
      setStatus({ ok: true, message: t.contact.success });
    } catch (error) {
      console.error(error);
      setStatus({ ok: false, message: t.contact.error });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-card ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2>{t.contact.title}</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" name="firstName" aria-label={t.contact.firstName} placeholder={t.contact.firstName} autoComplete="given-name" required maxLength={80} value={details.firstName} onChange={update('firstName')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" name="lastName" aria-label={t.contact.lastName} placeholder={t.contact.lastName} autoComplete="family-name" required maxLength={80} value={details.lastName} onChange={update('lastName')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" name="email" aria-label={t.contact.email} placeholder={t.contact.email} autoComplete="email" required maxLength={120} value={details.email} onChange={update('email')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" name="phone" aria-label={t.contact.phone} placeholder={t.contact.phone} autoComplete="tel" maxLength={30} value={details.phone} onChange={update('phone')} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" name="message" aria-label={t.contact.message} placeholder={t.contact.message} required maxLength={2000} value={details.message} onChange={update('message')}></textarea>
                        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
                        <button type="submit" className="btn-solid" disabled={sending}><span>{sending ? t.contact.sending : t.contact.send}</span></button>
                      </Col>
                    </Row>
                  </form>
                  <p className="contact-note">
                    {t.contact.orEmail} <a href="mailto:davidmarsalivars@gmail.com">davidmarsalivars@gmail.com</a>.<br />
                    {t.contact.privacy}
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-center" className="position-fixed p-3 contact-toast-wrap">
        <Toast show={!!status} onClose={() => setStatus(null)} delay={6000} autohide className={`contact-toast ${status?.ok ? "is-ok" : "is-error"}`}>
          <Toast.Body className="d-flex align-items-start gap-3">
            <span className="flex-grow-1">{status?.message}</span>
            <button type="button" className="btn-close btn-close-white" aria-label={t.contact.close} onClick={() => setStatus(null)} />
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
};
