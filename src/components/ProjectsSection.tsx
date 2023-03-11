import { useTranslation } from "react-i18next";
import ProjectList from "./projects/ProjectList";
import PROJECTS from "src/data/projects.json";
import "src/assets/styles/ProjectsSection.css";

function ProjectsSection() {
  const { t } = useTranslation();
  const TITLE = t("PROJECT_SECTION.TITLE");

  return (
    <section className="projects-section">
      <h1 className="projects-section__title">{TITLE}</h1>
      <ProjectList projects={PROJECTS} />
    </section>
  );
}

export default ProjectsSection;
