import {
  motion,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import projects
  from "../data/project.js";

import "../Work.css";


function Work() {

  const navigate =
    useNavigate();


  const goHome = () => {

    navigate("/", {
      state: {
        skipIntro: true,
      },
    });

  };


  return (
    <main className="work-page">

      <header className="work-page-top">

        <button
          className="work-back"
          onClick={goHome}
        >
          <ArrowLeft size={16} />

          <span>
            BACK
          </span>
        </button>


        <div className="work-page-meta">

          <span>
            KR / 2026
          </span>

          <span>
            SELECTED WORK
          </span>

        </div>

      </header>


      <section className="work-hero">

        <motion.span
          className="work-eyebrow"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          02 / SELECTED WORK
        </motion.span>


        <motion.h1

          initial={{
            opacity: 0,
            y: 70,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          Work that
          <br />
          <em>moves.</em>
        </motion.h1>


        <motion.p

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}
        >
          A selection of digital products,
          interactive experiences, games,
          interfaces and visual experiments
          I've worked on.
        </motion.p>

      </section>


      <div className="work-filters">

        <button className="active">
          ALL
        </button>

        <button>
          UI / UX
        </button>

        <button>
          UNITY
        </button>

        <button>
          GRAPHIC DESIGN
        </button>

        <button>
          BRANDING
        </button>

      </div>


      <section className="work-grid">

        {projects.map(
          (project, index) => (

            <motion.article

              key={project.id}

              className={
                index === 0 ||
                index === 3
                  ? "work-project-card featured"
                  : "work-project-card"
              }

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-100px",
              }}

              transition={{
                duration: 0.7,
                delay:
                  index * 0.08,
              }}

              onClick={() =>
                navigate(
                  `/work/${project.id}`
                )
              }
            >

              <div
                className="work-project-image"
                style={{
                  backgroundColor:
                    project.color,
                }}
              >

                <motion.img

                  src={project.cover}

                  alt={
                    project.title
                  }

                  whileHover={{
                    scale: 1.07,
                  }}

                  transition={{
                    duration: 0.6,
                  }}

                  draggable="false"
                />


                <div className="work-project-overlay" />


                <motion.div
                  className="work-project-arrow"

                  whileHover={{
                    scale: 1.1,
                    rotate: 45,
                  }}
                >
                  <ArrowUpRight
                    size={24}
                  />
                </motion.div>

              </div>


              <div className="work-project-info">

                <div>

                  <span className="work-project-number">
                    {project.number}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                </div>


                <div>

                  <span>
                    {project.category}
                  </span>

                  <p>
                    {project.description}
                  </p>

                </div>

              </div>

            </motion.article>

          )
        )}

      </section>


      <section className="work-bottom">

        <span>
          MORE PROJECTS COMING SOON
        </span>

        <span>
          © 2026 KRITIKA ROKKA
        </span>

      </section>

    </main>
  );
}

export default Work;
