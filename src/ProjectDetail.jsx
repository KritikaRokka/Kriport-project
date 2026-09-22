import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useRef,
} from "react";

import projects
  from "./data/project.js";

import "./ProjectDetail.css";


function ProjectDetail() {

  const {
    projectId,
  } = useParams();

  const navigate =
    useNavigate();

  const projectIndex =
    projects.findIndex(
      (project) =>
        project.id === projectId
    );

  const project =
    projects[projectIndex];


  const heroRef =
    useRef(null);


  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,

    offset: [
      "start start",
      "end start",
    ],
  });


  const heroY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, 180]
    );


  if (!project) {

    return (
      <main
        className="project-not-found"
      >

        <h1>
          Project not found.
        </h1>

        <button
          onClick={() =>
            navigate("/work")
          }
        >
          BACK TO WORK
        </button>

      </main>
    );
  }


  const previousProject =
    projects[
      (
        projectIndex -
        1 +
        projects.length
      ) %
        projects.length
    ];


  const nextProject =
    projects[
      (
        projectIndex + 1
      ) %
        projects.length
    ];


  return (
    <main className="project-page">

      <header className="project-header">

        <button
          onClick={() =>
            navigate("/work")
          }
          className="project-back"
        >

          <ArrowLeft size={17} />

          ALL WORK

        </button>


        <span>
          {project.number}
          {" / "}
          {projects.length}
        </span>

      </header>


      {/* HERO */}

      <section
        className="project-hero"
        ref={heroRef}
      >

        <div className="project-hero-copy">

          <motion.span
            className="project-category"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            {project.category}
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
            {project.title}
          </motion.h1>


          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}
          >
            {project.description}
          </motion.p>

        </div>


        <motion.div

          className="project-hero-image"

          style={{
            y: heroY,
            backgroundColor:
              project.color,
          }}
        >

          <motion.img

            src={project.hero}

            alt={project.title}

            initial={{
              scale: 1.15,
              opacity: 0,
            }}

            animate={{
              scale: 1,
              opacity: 1,
            }}

            transition={{
              duration: 1.1,
            }}

            draggable="false"
          />

        </motion.div>

      </section>


      {/* OVERVIEW */}

      <section
        className="project-overview"
      >

        <div
          className="project-overview-label"
        >
          01 / OVERVIEW
        </div>


        <div
          className="project-overview-content"
        >

          <p
            className="project-big-description"
          >
            {project.overview}
          </p>


          <div
            className="project-details-grid"
          >

            <div>
              <span>
                ROLE
              </span>

              <p>
                {project.role}
              </p>
            </div>


            <div>
              <span>
                YEAR
              </span>

              <p>
                {project.year}
              </p>
            </div>


            <div>
              <span>
                TYPE
              </span>

              <p>
                {project.type}
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CHALLENGE */}

      <section
        className="project-story"
      >

        <div
          className="project-story-number"
        >
          02
        </div>


        <div
          className="project-story-content"
        >

          <span>
            THE CHALLENGE
          </span>

          <h2>
            What needed
            <br />
            to be solved?
          </h2>

          <p>
            {project.challenge}
          </p>

        </div>

      </section>


      {/* APPROACH */}

      <section
        className="project-story reverse"
      >

        <div
          className="project-story-number"
        >
          03
        </div>


        <div
          className="project-story-content"
        >

          <span>
            THE APPROACH
          </span>

          <h2>
            Finding a
            <br />
            direction.
          </h2>

          <p>
            {project.approach}
          </p>

        </div>

      </section>


      {/* SOLUTION */}

      <section
        className="project-solution"
      >

        <div
          className="project-solution-label"
        >
          04 / THE SOLUTION
        </div>

        <h2>
          {project.solution}
        </h2>

      </section>


      {/* MEDIA */}

      <section
        className="project-media"
      >

        {project.sections.map(
          (
            section,
            index
          ) => {

            if (
              section.type ===
              "image"
            ) {

              return (
                <motion.figure

                  key={index}

                  className="case-image"

                  initial={{
                    opacity: 0,
                    y: 80,
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
                    duration: 0.8,
                  }}
                >

                  <img
                    src={
                      section.image
                    }
                    alt={
                      section.caption ||
                      project.title
                    }
                    draggable="false"
                  />

                  {section.caption && (
                    <figcaption>
                      {
                        section.caption
                      }
                    </figcaption>
                  )}

                </motion.figure>
              );
            }


            if (
              section.type ===
              "imageGrid"
            ) {

              return (
                <div
                  key={index}
                  className="case-image-grid"
                >

                  {section.images.map(
                    (
                      image,
                      imageIndex
                    ) => (

                      <motion.img

                        key={
                          imageIndex
                        }

                        src={image}

                        alt={`${project.title} ${imageIndex + 1}`}

                        initial={{
                          opacity: 0,
                          y: 50,
                        }}

                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.7,
                          delay:
                            imageIndex *
                            0.1,
                        }}

                        draggable="false"
                      />

                    )
                  )}

                </div>
              );
            }


            if (
              section.type ===
              "text"
            ) {

              return (
                <section
                  key={index}
                  className="case-text"
                >

                  <span>
                    {
                      section.title
                    }
                  </span>

                  <p>
                    {
                      section.text
                    }
                  </p>

                </section>
              );
            }


            return null;
          }
        )}

      </section>


      {/* NEXT PROJECT */}

      <section
        className="next-project"
      >

        <span>
          NEXT PROJECT
        </span>


        <button
          onClick={() =>
            navigate(
              `/work/${nextProject.id}`
            )
          }
        >

          <div>

            <small>
              {
                nextProject.category
              }
            </small>

            <h2>
              {
                nextProject.title
              }
            </h2>

          </div>

          <ArrowUpRight
            size={30}
          />

        </button>

      </section>


      <footer
        className="project-footer"
      >

        <button
          onClick={() =>
            navigate(
              `/work/${previousProject.id}`
            )
          }
        >
          <ArrowLeft size={16} />
          PREVIOUS
        </button>


        <button
          onClick={() =>
            navigate("/", {
              state: {
                skipIntro: true,
              },
            })
          }
        >
          HOME
        </button>


        <button
          onClick={() =>
            navigate(
              `/work/${nextProject.id}`
            )
          }
        >
          NEXT
          <ArrowRight size={16} />
        </button>

      </footer>

    </main>
  );
}

export default ProjectDetail;
