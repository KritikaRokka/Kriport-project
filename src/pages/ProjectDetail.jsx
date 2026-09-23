import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [projectId]);

  if (!project) {
    return (
      <main className="project-not-found">
        <span>404 / PROJECT NOT FOUND</span>
        <button onClick={() => navigate("/work")}>
          BACK TO WORK
        </button>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <button className="project-back" onClick={() => navigate("/work")}>
        <ArrowLeft size={17} />
        <span>BACK TO WORK</span>
      </button>

      <div className="project-detail-top">
        <span>KR / {project.number}</span>
        <span>{project.category}</span>
      </div>

      <section className="project-detail-hero">
        <div className="project-detail-title">
          <span className="project-detail-eyebrow">{project.year}</span>
          <h1>{project.title}</h1>
        </div>

        <div className="project-detail-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      <section className="project-intro">
        <div className="project-intro-label">THE PROJECT</div>

        <div className="project-intro-copy">
          <p className="project-lead">{project.overview}</p>

          <div className="project-meta-grid">
            <div>
              <span>ROLE</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>TOOLS</span>
              <strong>{project.tools}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="project-process">
        <div className="project-process-heading">
          <span>01</span>
          <h2>Process</h2>
        </div>

        <div className="process-list">
          {project.process.map((item, index) => (
            <article className="process-item" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-gallery">
        {project.gallery.map((image, index) => (
          <figure
            className={`project-gallery-item ${
              index === 1 ? "project-gallery-wide" : ""
            }`}
            key={image}
          >
            <img src={image} alt={`${project.title} visual ${index + 1}`} />
          </figure>
        ))}
      </section>

      <section className="project-end">
        <span>MORE WORK</span>
        <h2>
          Keep
          <br />
          exploring.
        </h2>

        <Link to="/work" className="project-end-link">
          <span>VIEW ALL PROJECTS</span>
          <ArrowUpRight size={19} />
        </Link>
      </section>
    </main>
  );
}

export default ProjectDetail;
