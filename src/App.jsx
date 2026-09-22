
import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import {
  useLocation,
} from "react-router-dom";

import "./App.css";

import IntroScreen
  from "./components/IntroScreen";

import FloatingNav
  from "./components/FloatingNav";

import CustomCursor
  from "./components/CustomCursor";

import WorkCarousel
  from "./components/WorkCarousel";


function App() {

  const location = useLocation();

  const [entered, setEntered] =
    useState(
      location.state?.skipIntro === true
    );


  useEffect(() => {

    if (
      location.state?.skipIntro
    ) {
      setEntered(true);
    }

  }, [location.state]);


  useEffect(() => {

    document.body.style.overflow =
      entered
        ? "auto"
        : "hidden";

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [entered]);


  useEffect(() => {

    if (
      entered &&
      location.state?.scrollTo
    ) {

      setTimeout(() => {

        document
          .getElementById(
            location.state.scrollTo
          )
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 150);

    }

  }, [
    entered,
    location.state,
  ]);


  if (!entered) {

    return (
      <IntroScreen
        onEnter={() =>
          setEntered(true)
        }
      />
    );

  }


  return (
    <>

      <CustomCursor />

      <FloatingNav />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="grain" />


      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          id="home"
          className="hero-section"
        >

          <motion.div
            className="hero-top-meta"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >

            <span>
              KATHMANDU, NEPAL
            </span>

            <span>
              AVAILABLE FOR CREATIVE WORK
            </span>

          </motion.div>


          {/* PHOTO */}

          <motion.div
            className="hero-photo-wrap"

            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <div className="hero-photo">

              <div className="photo-placeholder">

                <div className="photo-placeholder-inner">

                  <span>
                    YOUR
                  </span>

                  <strong>
                    PHOTO
                  </strong>

                  <small>
                    4 : 5
                  </small>

                </div>

              </div>

            </div>

            <div className="photo-caption">
              KRITIKA ROKKA
            </div>

          </motion.div>


          {/* HERO TITLE */}

          <div className="hero-title-wrap">

            <motion.div
              className="hero-side-note"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              DESIGN / CODE / CREATE
            </motion.div>


            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
                delay: 0.45,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              Kritika
              <span>.</span>
            </motion.h1>


            <motion.div
              className="hero-description"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
            >
              I'm Kritika Rokka —
              a graphic designer,
              UI/UX designer and
              frontend developer
              in the making.
            </motion.div>

          </div>


          {/* FLOATING TAGS */}

          <motion.div
            className="hero-floating-tag tag-one"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
          >
            UI / UX
          </motion.div>


          <motion.div
            className="hero-floating-tag tag-two"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
          >
            GRAPHIC
          </motion.div>


          <motion.div
            className="hero-floating-tag tag-three"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
          >
            FRONTEND
          </motion.div>


          <motion.div
            className="hero-scroll"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >

            <ArrowDown size={15} />

            <span>
              SCROLL
            </span>

          </motion.div>

        </section>


        {/* =========================
            WORK
        ========================= */}

        <WorkCarousel />


        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="content-section"
        >

          <span className="section-index">
            03 / ABOUT
          </span>

          <h2>
            Designing things
            <br />
            that feel
            <em> human.</em>
          </h2>

          <div className="about-content">

            <p>
              I enjoy working between design
              and technology — turning ideas
              into visual experiences, interfaces
              and interactive products.
            </p>

            <p>
              My work moves between UI/UX,
              graphic design, Unity and frontend
              development.
            </p>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="skills-section"
        >

          <div className="section-index">
            04 / SKILLS
          </div>

          <div className="skills-list">

            <div className="skill">
              <span>01</span>
              <strong>UI / UX DESIGN</strong>
            </div>

            <div className="skill">
              <span>02</span>
              <strong>GRAPHIC DESIGN</strong>
            </div>

            <div className="skill">
              <span>03</span>
              <strong>FRONTEND DEVELOPMENT</strong>
            </div>

            <div className="skill">
              <span>04</span>
              <strong>UNITY</strong>
            </div>

            <div className="skill">
              <span>05</span>
              <strong>BRANDING</strong>
            </div>

            <div className="skill">
              <span>06</span>
              <strong>PROTOTYPING</strong>
            </div>

          </div>

        </section>


        {/* =========================
            EXPERIENCE
        ========================= */}

        <section
          id="experience"
          className="experience-section"
        >

          <div className="section-index">
            05 / EXPERIENCE
          </div>

          <div className="experience-list">

            <div className="experience-item">

              <span>
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

            </div>


            <div className="experience-item">

              <span>
                2025 — NOW
              </span>

              <div>
                <h3>
                  Ripple Bytes
                </h3>

                <p>
                  UI/UX Designer
                </p>
              </div>

            </div>


            <div className="experience-item">

              <span>
                2025
              </span>

              <div>
                <h3>
                  Oston Technology
                </h3>

                <p>
                  Developer & UI/UX Designer
                </p>
              </div>

            </div>


            <div className="experience-item">

              <span>
                2025
              </span>

              <div>
                <h3>
                  SmartCard IT Solutions
                </h3>

                <p>
                  Freelance UI/UX Designer
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            FOOTER CTA
        ========================= */}

        <section
          className="final-cta"
        >

          <span>
            HAVE SOMETHING IN MIND?
          </span>

          <h2>
            Let's make
            <br />
            something
            <em> happen.</em>
          </h2>

          <button
            onClick={() =>
              window.location.href =
                "/contact"
            }
          >

            GET IN TOUCH

            <ArrowUpRight size={20} />

          </button>

        </section>

      </main>

    </>
  );
}

export default App;
