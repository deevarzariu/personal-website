import { Project } from "src/types/Project";
import { getImageUrl } from "src/utils/func";
import Image from "src/assets/images/project.jpg";
import "src/assets/styles/ProjectPreview.css";

type Props = {
  project: Project;
};

function ProjectPreview({ project }: Props) {
  const imageUrl = getImageUrl(project.url) || Image;

  return (
    <div className="project-preview">
      <div className="project-preview__image-container">
        <img className="project-preview__image" src={imageUrl} alt="" />
      </div>
      <div className="project-preview__text">
        <div className="project-preview__title">{project.name}</div>
        <div className="project-preview__description">
          {project.description}
        </div>
        <div>
          <a className="project-preview__cta" href={project.url}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
