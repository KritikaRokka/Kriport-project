import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Work.css";

function Work() {
  const navigate = useNavigate();

  const goBackHome = () => {
    sessionStorage.setItem("kritika-portfolio-entered", "true");
    navigate("/");
  };

  return (
    <main className="work-page">
      <button className="inner-back" onClick={goBackHome}>
        <ArrowLeft size={17} />
        <span>BACK</span>
      </button>

      <div className="work-page-top">
        <span>KR / 2026</span>
        <span>SELECTED WORK</span>
      </div>

      <header className="work-page-hero">
        <span className="work-page-eyebrow">04 PROJECTS / 01</span>
        <h1>
          Work that
          <br />
          <em>moves.</em>
        </h1>
        <p>
          A closer look at interfaces, interactive experiences,
          games and visual work.
        </p>
      </header>

      <section className="work-page-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            large={index === 0}
          />
        ))}
      </section>

      <footer className="work-page-footer">
        <span>KRITIKA ROKKA</span>
        <span>SCROLL / EXPLORE</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}

export default Work;
