import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">

      {/* BACK BUTTON */}
      <button
        className="contact-back"
        onClick={() => window.history.back()}
      >
        <ArrowLeft size={18} />
        <span>BACK</span>
      </button>

      {/* TOP LABEL */}
      <div className="contact-top">
        <span>KR / 2026</span>
        <span>CONTACT</span>
      </div>

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-eyebrow">
          <span className="contact-dot"></span>
          HAVE A PROJECT IN MIND?
        </div>

        <h1>
          Let's make
          <br />
          something <em>great.</em>
        </h1>

        <p>
          Whether you have a project, an idea, or simply want to
          say hello — I'd love to hear from you.
        </p>

      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-info-block">
            <span className="contact-label">EMAIL</span>

            <a href="mailto:rokkakritika@gmail.com">
              rokkakritika@gmail.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-info-block">
            <span className="contact-label">SOCIALS</span>

            <div className="contact-socials">

            </div>
          </div>

          <div className="contact-info-block">
            <span className="contact-label">BASED IN</span>
            <p>Kathmandu, Nepal</p>
          </div>

        </div>

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <div className="form-field">
              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                YOUR EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-field">
            <label htmlFor="subject">
              SUBJECT
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Let's work together"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="send-button"
            disabled={status === "sending"}
          >
            <span>
              {status === "sending"
                ? "SENDING..."
                : "SEND MESSAGE"}
            </span>

            <span className="send-icon">
              <ArrowUpRight size={20} />
            </span>
          </button>

          {status === "success" && (
            <div className="form-status success">
              Message sent successfully. I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="form-status error">
              Something went wrong. Please try again.
            </div>
          )}

        </form>

      </section>

      {/* FOOTER */}
      <footer className="contact-footer">

        <div>
          <Mail size={16} />
          <span>OPEN FOR COLLABORATION</span>
        </div>

        <span>© 2026 KRITIKA ROKKA</span>

      </footer>

    </main>
  );
}

export default Contact;