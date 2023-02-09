import { useTranslation } from "react-i18next";
import "src/assets/styles/ProjectsSection.css";

function ProjectsSection() {
  const { t } = useTranslation();
  const TITLE = t("PROJECT_SECTION.TITLE");
  const SUBTITLE = t("PROJECT_SECTION.SUBTITLE");

  return (
    <section className="projects-section">
      <div>
        <h1 className="mb-5">{TITLE}</h1>
        <h3>{SUBTITLE}</h3>
      </div>
    </section>
  );
}

export default ProjectsSection;
