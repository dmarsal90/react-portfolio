import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../img/contact-img.svg";
import TrackVisibility from './TrackVisibility';

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const initialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export const Contact = () => {
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
      setStatus({ ok: true, message: "Message sent successfully." });
    } catch (error) {
      console.error(error);
      setStatus({ ok: false, message: "Something went wrong, please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="" />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" name="firstName" aria-label="First name" placeholder="First Name" autoComplete="given-name" required maxLength={80} value={details.firstName} onChange={update('firstName')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" name="lastName" aria-label="Last name" placeholder="Last Name" autoComplete="family-name" required maxLength={80} value={details.lastName} onChange={update('lastName')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" name="email" aria-label="Email address" placeholder="Email Address" autoComplete="email" required maxLength={120} value={details.email} onChange={update('email')} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" name="phone" aria-label="Phone number (optional)" placeholder="Phone No." autoComplete="tel" maxLength={30} value={details.phone} onChange={update('phone')} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" name="message" aria-label="Message" placeholder="Message" required maxLength={2000} value={details.message} onChange={update('message')}></textarea>
                        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
                        <button type="submit" disabled={sending}><span>{sending ? "Sending..." : "Send"}</span></button>
                      </Col>
                      {status &&
                        <Col>
                          <p role={status.ok ? "status" : "alert"} className={status.ok ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
