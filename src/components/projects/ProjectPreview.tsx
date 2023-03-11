import { Project } from "src/types/Project";
import Image from "src/assets/images/project.jpg";
import "src/assets/styles/ProjectPreview.css";

type Props = {
  project: Project;
};

function ProjectPreview({ project }: Props) {
  return (
    <div className="project-preview">
      <div className="project-preview__image-container">
        <img className="project-preview__image" src={Image} alt="" />
      </div>
      <div className="project-preview__text">
        <div className="project-preview__title">{project.name}</div>
        <div className="project-preview__description">
          {project.description}
        </div>
        <div>
          <button className="project-preview__cta">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
