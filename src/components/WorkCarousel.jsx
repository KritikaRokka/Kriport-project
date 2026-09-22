import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import projects from "../data/project.js";

function WorkCarousel() {

  const navigate = useNavigate();

  const x = useMotionValue(0);

  const trackRef = useRef(null);

  const [trackWidth, setTrackWidth] =
    useState(0);

  const [dragging, setDragging] =
    useState(false);

  useEffect(() => {

    const measure = () => {

      if (trackRef.current) {

        setTrackWidth(
          trackRef.current.scrollWidth / 2
        );
      }
    };

    measure();

    window.addEventListener(
      "resize",
      measure
    );

    return () => {
      window.removeEventListener(
        "resize",
        measure
      );
    };

  }, []);

  useAnimationFrame(
    (_, delta) => {

      if (
        dragging ||
        !trackWidth
      ) {
        return;
      }

      const current = x.get();

      const speed = 0.045;

      let next =
        current +
        speed * delta;

      if (
        next >= 0
      ) {
        next =
          -trackWidth;
      }

      x.set(next);
    }
  );

  const handleDragEnd = () => {

    setDragging(false);

    if (!trackWidth) return;

    let current = x.get();

    while (
      current > 0
    ) {
      current -= trackWidth;
    }

    while (
      current < -trackWidth
    ) {
      current += trackWidth;
    }

    x.set(current);
  };

  const carouselProjects = [
    ...projects,
    ...projects,
  ];

  return (
    <section
      className="home-work"
      id="work"
    >

      <div className="section-top-line">

        <span>
          SELECTED WORK
        </span>

        <span>
          04 PROJECTS
        </span>

      </div>

      <div className="work-heading-row">

        <div>

          <span className="section-index">
            02 / WORK
          </span>

          <h2>
            Things I've
            <br />
            <em>made.</em>
          </h2>

        </div>

        <button
          className="view-more-button"
          onClick={() =>
            navigate("/work")
          }
        >
          <span>
            VIEW MORE
          </span>

          <ArrowUpRight size={18} />
        </button>

      </div>

      <div className="carousel-window">

        <motion.div
          ref={trackRef}
          className="work-track"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -trackWidth,
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum={true}
          onDragStart={() =>
            setDragging(true)
          }
          onDragEnd={
            handleDragEnd
          }
        >

          {carouselProjects.map(
            (project, index) => (

              <motion.article
                key={`${project.id}-${index}`}
                className="carousel-card"
                onClick={() => {

                  if (!dragging) {
                    navigate(
                      `/work/${project.id}`
                    );
                  }

                }}
                whileHover={{
                  y: -12,
                  rotate: 0,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >

                <div className="carousel-image">

                  <img
                    src={project.cover}
                    alt={project.title}
                    draggable="false"
                  />

                  <div className="carousel-image-overlay" />

                  <div className="carousel-hover-arrow">
                    <ArrowUpRight
                      size={22}
                    />
                  </div>

                  <div className="carousel-project-number">
                    {project.number}
                  </div>

                </div>

                <div className="carousel-meta">

                  <div>

                    <span>
                      {project.number}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                  </div>

                  <span className="carousel-category">
                    {project.category}
                  </span>

                </div>

              </motion.article>

            )
          )}

        </motion.div>

      </div>

      <div className="carousel-bottom">

        <span>
          DRAG ← → TO EXPLORE
        </span>

        <span>
          AUTO / MANUAL
        </span>

      </div>

    </section>
  );
}

export default WorkCarousel;
