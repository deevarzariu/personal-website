import ProjectPreview from "./ProjectPreview";
import { Project } from "src/types/Project";
import "src/assets/styles/ProjectList.css";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectPreview project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
