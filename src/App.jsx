import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  Sparkles,
} from "lucide-react";

import "./App.css";

import IntroScreen from "./components/IntroScreen";
import FloatingNav from "./components/FloatingNav";
import CustomCursor from "./components/CustomCursor";
import ProjectCard from "./components/ProjectCard";


function App() {
  const location = useLocation();

  const [entered, setEntered] = useState(
    location.state?.skipIntro === true
  );

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [entered]);

  const enterSite = () => {
    setEntered(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 50);
  };

  if (!entered) {
    return <IntroScreen onEnter={enterSite} />;
  }

  return (
    <div className="portfolio">

      <CustomCursor />

      <FloatingNav />

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <div className="grain" />

      {/* =====================================
          MAIN INTRO
      ===================================== */}

      <main>

        <section className="main-intro" id="home">

          <div className="intro-meta">
            <span>PORTFOLIO / 2026</span>

            <span>
              BHaktapur — NEPAL
            </span>
          </div>


          <div className="intro-content">

            <div className="intro-small">
              <span className="live-dot" />
              OPEN TO CREATIVE WORK
            </div>


            <h1>

              <span className="title-line">
                DESIGNER
              </span>

              <span className="title-line outline">
                &amp;
              </span>

              <span className="title-line">
                CREATOR.
              </span>

            </h1>


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

            <span>
              SELECTED WORK ↓
            </span>

            <span>
              K.R. / 01
            </span>

          </div>

        </section>


        {/* =====================================
            SELECTED WORK
        ===================================== */}

        <section className="work-section" id="work">

          <div className="section-heading">

            <div>
              <span className="section-number">
                01
              </span>

              <span className="section-label">
                SELECTED WORK
              </span>
            </div>

            <p>
              A collection of interfaces,
              interactive experiences and
              visual work.
            </p>

          </div>


          <div className="projects">

            <ProjectCard
              number="01"
              title="School Enterprise Project"
              category="UI/UX · EDUCATION · UNITY"
              description="An educational management experience designed around students, teachers and administrators."
              image="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85"
              large
            />


            <ProjectCard
              number="02"
              title="Pair Buzz"
              category="GAME · UI/UX · UNITY"
              description="A two-player mobile game bundle built around competitive interaction and touch-friendly interfaces."
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85"
            />


            <ProjectCard
              number="03"
              title="CK Application"
              category="EDUCATION · INTERACTION"
              description="Interactive educational quizzes designed to make learning feel playful and approachable."
              image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=85"
            />


            <ProjectCard
              number="04"
              title="Visual & Brand Work"
              category="GRAPHIC DESIGN · BRANDING"
              description="Branding, brochures, digital artwork and promotional visuals created for different projects."
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=85"
            />

          </div>

        </section>


        {/* =====================================
            ABOUT
        ===================================== */}

        <section className="about-section" id="about">

          <div className="section-heading">

            <div>
              <span className="section-number">
                02
              </span>

              <span className="section-label">
                A LITTLE ABOUT ME
              </span>
            </div>

          </div>


          <div className="about-layout">

            <div className="about-big-text">

              <span>
                I LIKE MAKING
              </span>

              <span className="italic">
                THINGS
              </span>

              <span>
                FEEL RIGHT.
              </span>

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

              <div className="about-signature">
                K / R
              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            SKILLS
        ===================================== */}

        <section className="skills-section">

          <div className="section-heading">

            <div>
              <span className="section-number">
                03
              </span>

              <span className="section-label">
                THINGS I WORK WITH
              </span>
            </div>

          </div>


          <div className="skills-cloud">

            <span className="skill skill-large">
              FIGMA
            </span>

            <span className="skill">
              PHOTOSHOP
            </span>

            <span className="skill">
              FRAMER
            </span>

            <span className="skill skill-outline">
              REACT
            </span>

            <span className="skill">
              JAVASCRIPT
            </span>

            <span className="skill skill-large">
              UI / UX
            </span>

            <span className="skill">
              UNITY
            </span>

            <span className="skill skill-outline">
              BRANDING
            </span>

            <span className="skill">
              PROTOTYPING
            </span>

            <span className="skill">
              GRAPHIC DESIGN
            </span>

          </div>

        </section>


        {/* =====================================
            EXPERIENCE
        ===================================== */}

        <section
          className="experience-section"
          id="experience"
        >

          <div className="section-heading">

            <div>
              <span className="section-number">
                04
              </span>

              <span className="section-label">
                EXPERIENCE
              </span>
            </div>

          </div>


          <div className="experience-list">

            <div className="experience-row">

              <span className="experience-year">
                2026 — NOW
              </span>

              <div>
                <h3>
                  MIT Event Management Club
                </h3>

                <p>
                  President
                </p>
              </div>

              <ArrowUpRight />

            </div>


            <div className="experience-row">

              <span className="experience-year">
                2025 — NOW
              </span>

              <div>
                <h3>
                  Ripple Bytes
                </h3>

                <p>
                  UI / UX Designer
                </p>
              </div>

              <ArrowUpRight />

            </div>


            <div className="experience-row">

              <span className="experience-year">
                2025
              </span>

              <div>
                <h3>
                  Oston Technology
                </h3>

                <p>
                  Developer &amp; UI/UX Designer
                </p>
              </div>

              <ArrowUpRight />

            </div>


            <div className="experience-row">

              <span className="experience-year">
                2025
              </span>

              <div>
                <h3>
                  SmartCard IT Solutions
                </h3>

                <p>
                  Freelance UI / UX Designer
                </p>
              </div>

              <ArrowUpRight />

            </div>

          </div>

        </section>


        {/* =====================================
            CONTACT
        ===================================== */}

        <section className="contact-section" id="contact">

          {/* <Sparkles className="contact-sparkle" /> */}

          <span className="contact-small">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING.
          </h2>

          <button className="contact-button" onClick={()=>{
            window.location.href = "/contact"; // Redirect to the contact page
            
          }}>

            <span>
              GET IN TOUCH
            </span>

            <span className="contact-arrow">
              <ArrowUpRight size={20} />
            </span>

          </button>


          <div className="contact-footer">

            <span>
              KRITIKA ROKKA
            </span>

            <span>
              © 2026
            </span>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;