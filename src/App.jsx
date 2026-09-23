import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./App.css";

import IntroScreen from "./components/IntroScreen";
import FloatingNav from "./components/FloatingNav";
import CustomCursor from "./components/CustomCursor";
import WorkCarousel from "./components/WorkCarousel";

function App() {
  const navigate = useNavigate();

  const [entered, setEntered] = useState(
    () => sessionStorage.getItem("kritika-portfolio-entered") === "true"
  );

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [entered]);

  const enterSite = () => {
    sessionStorage.setItem("kritika-portfolio-entered", "true");
    setEntered(true);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });
  };

  if (!entered) {
    return <IntroScreen onEnter={enterSite} />;
  }

  return (
    <div className="portfolio">
      <CustomCursor />
      <FloatingNav />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="grain" />

      <main>
        <section className="main-intro" id="home">
          <div className="intro-meta">
            <span>PORTFOLIO / 2026</span>
            <span>BHaktapur — NEPAL</span>
          </div>

          <div className="intro-content">
            <div className="intro-small">
              <span className="live-dot" />
              OPEN TO CREATIVE WORK
            </div>

            <h1>
              <span className="title-line">DESIGNER</span>
              <span className="title-line outline">&amp;</span>
              <span className="title-line">CREATOR.</span>
            </h1>

            {/* STATIC PROFILE / SLOW AMBIENT MOTION AROUND IT */}
            <div className="profile-stage" aria-label="Kritika profile placeholder">
              <div className="profile-orbit profile-orbit-one" />
              <div className="profile-orbit profile-orbit-two" />

              <span className="profile-float profile-float-one">DESIGN / 01</span>
              <span className="profile-float profile-float-two">UI / UX</span>
              <span className="profile-float profile-float-three">KR / 26</span>
              <span className="profile-dot profile-dot-one" />
              <span className="profile-dot profile-dot-two" />

              <div className="profile-frame">
                <div className="profile-photo-placeholder">
                  <span>KR</span>
                  <small>YOUR PHOTO</small>
                  <img
                    className="profile-photo"
                    src="/profile.jpg"
                    alt="Kritika Rokka"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="intro-description">
              <p>
                I'm Kritika Rokka — a graphic designer,
                UI/UX designer and frontend developer
                in the making.
              </p>

              <div className="scroll-indicator">
                <span>SCROLL</span>
                <ArrowDown size={15} />
              </div>
            </div>
          </div>

          <div className="intro-floating floating-one">
            <span>01</span>
            <strong>UI / UX</strong>
          </div>

          <div className="intro-floating floating-two">
            <span>02</span>
            <strong>GRAPHIC</strong>
          </div>

          <div className="intro-floating floating-three">
            <span>03</span>
            <strong>FRONTEND</strong>
          </div>

          <div className="intro-bottom">
            <span>SELECTED WORK ↓</span>
            <span>K.R. / 01</span>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="section-number">01</span>
              <span className="section-label">SELECTED WORK</span>
            </div>

            <p>
              A collection of interfaces,
              interactive experiences and
              visual work.
            </p>
          </div>

          <WorkCarousel />

          <div className="work-more-row">
            <button
              className="work-more-button"
              onClick={() => navigate("/work")}
            >
              <span>VIEW MORE</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <span className="section-label">A LITTLE ABOUT ME</span>
            </div>
          </div>

          <div className="about-layout">
            <div className="about-big-text">
              <span>I LIKE MAKING</span>
              <span className="italic">THINGS</span>
              <span>FEEL RIGHT.</span>
            </div>

            <div className="about-copy">
              <p>
                I come from a design background,
                but I'm increasingly interested in
                what happens after the design is
                finished.
              </p>

              <p>
                That's what pulled me toward
                frontend development — turning
                visual ideas into things people can
                actually interact with.
              </p>

              <div className="about-signature">K / R</div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-heading">
            <div>
              <span className="section-number">03</span>
              <span className="section-label">THINGS I WORK WITH</span>
            </div>
          </div>

          <div className="skills-cloud">
            <span className="skill skill-large">FIGMA</span>
            <span className="skill">PHOTOSHOP</span>
            <span className="skill">FRAMER</span>
            <span className="skill skill-outline">REACT</span>
            <span className="skill">JAVASCRIPT</span>
            <span className="skill skill-large">UI / UX</span>
            <span className="skill">UNITY</span>
            <span className="skill skill-outline">BRANDING</span>
            <span className="skill">PROTOTYPING</span>
            <span className="skill">GRAPHIC DESIGN</span>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading">
            <div>
              <span className="section-number">04</span>
              <span className="section-label">EXPERIENCE</span>
            </div>
          </div>

          <div className="experience-list">
            <div className="experience-row">
              <span className="experience-year">2026 — NOW</span>
              <div>
                <h3>MIT Event Management Club</h3>
                <p>President</p>
              </div>
              <ArrowUpRight />
            </div>

            <div className="experience-row">
              <span className="experience-year">2025 — NOW</span>
              <div>
                <h3>Ripple Bytes</h3>
                <p>UI / UX Designer</p>
              </div>
              <ArrowUpRight />
            </div>

            <div className="experience-row">
              <span className="experience-year">2025</span>
              <div>
                <h3>Oston Technology</h3>
                <p>Developer &amp; UI/UX Designer</p>
              </div>
              <ArrowUpRight />
            </div>

            <div className="experience-row">
              <span className="experience-year">2025</span>
              <div>
                <h3>SmartCard IT Solutions</h3>
                <p>Freelance UI / UX Designer</p>
              </div>
              <ArrowUpRight />
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="contact-small">HAVE A PROJECT IN MIND?</span>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING.
          </h2>

          <button
            className="contact-button"
            onClick={() => navigate("/contact")}
          >
            <span>GET IN TOUCH</span>
            <span className="contact-arrow">
              <ArrowUpRight size={20} />
            </span>
          </button>

          <div className="portfolio-contact-footer">
            <span>KRITIKA ROKKA</span>
            <span>© 2026</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
