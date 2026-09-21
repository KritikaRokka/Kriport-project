import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  number,
  title,
  category,
  description,
  image,
  large = false,
}) {

  return (
    <article
      className={
        large
          ? "project-card project-large"
          : "project-card"
      }
    >

      <div className="project-image">

        <img
          src={image}
          alt={title}
        />

        <div className="project-overlay" />

        <div className="project-view">

          <ArrowUpRight size={24} />

        </div>

      </div>


      <div className="project-info">

        <div>

          <span className="project-number">
            {number}
          </span>

          <h3>
            {title}
          </h3>

        </div>


        <div className="project-details">

          <span>
            {category}
          </span>

          <p>
            {description}
          </p>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;