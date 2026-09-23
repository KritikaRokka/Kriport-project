import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

function WorkCarousel() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const halfWidthRef = useRef(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });

  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const navigate = useNavigate();

  const normalize = () => {
    const viewport = viewportRef.current;
    const half = halfWidthRef.current;
    if (!viewport || !half) return;

    if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += half;
    } else if (viewport.scrollLeft >= half) {
      viewport.scrollLeft -= half;
    }
  };

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const cards = Array.from(track.children).slice(0, projects.length);
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");

      halfWidthRef.current =
        cards.reduce((total, card) => total + card.getBoundingClientRect().width, 0) +
        gap * projects.length;

      viewport.scrollLeft = halfWidthRef.current;
    };

    measure();
    window.addEventListener("resize", measure);

    const tick = (time) => {
      const viewport = viewportRef.current;

      if (viewport && !pausedRef.current && !dragRef.current.active) {
        const previous = lastTimeRef.current || time;
        const delta = Math.min(time - previous, 40);

        // Negative scroll moves the artwork visually from left → right.
        viewport.scrollLeft -= delta * 0.018;
        normalize();
        lastTimeRef.current = time;
      } else {
        lastTimeRef.current = time;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerDown = (event) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.setPointerCapture?.(event.pointerId);

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
      moved: false,
    };

    pausedRef.current = true;
    setPaused(true);
  };

  const handlePointerMove = (event) => {
    const viewport = viewportRef.current;
    const drag = dragRef.current;

    if (!viewport || !drag.active) return;

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 5) {
      drag.moved = true;
    }

    viewport.scrollLeft = drag.startScroll - distance;
    normalize();
  };

  const finishDrag = (event) => {
    const viewport = viewportRef.current;

    if (viewport?.hasPointerCapture?.(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragRef.current.active = false;

    // Keep autoplay paused briefly so a click/drag transition feels intentional.
    window.setTimeout(() => {
      pausedRef.current = false;
      setPaused(false);
    }, 350);
  };

  const handleCardClick = (projectId) => {
    if (dragRef.current.moved) {
      dragRef.current.moved = false;
      return;
    }

    navigate(`/work/${projectId}`);
  };

  const repeatedProjects = [...projects, ...projects];

  return (
    <div
      className={`work-carousel ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => {
        pausedRef.current = true;
        setPaused(true);
      }}
      onMouseLeave={() => {
        if (!dragRef.current.active) {
          pausedRef.current = false;
          setPaused(false);
        }
      }}
    >
      <div
        ref={viewportRef}
        className="carousel-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div ref={trackRef} className="carousel-track">
          {repeatedProjects.map((project, index) => (
            <article
              className="carousel-card"
              key={`${project.id}-${index}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="carousel-image">
                <img src={project.image} alt={project.title} draggable="false" />
                <div className="carousel-image-overlay" />
                <span className="carousel-index">{project.number}</span>

                <span className="carousel-open">
                  <ArrowUpRight size={21} />
                </span>
              </div>

              <div className="carousel-card-info">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-hint">
        <span>DRAG TO EXPLORE</span>
        <span>AUTOPLAY</span>
      </div>
    </div>
  );
}

export default WorkCarousel;
