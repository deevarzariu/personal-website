import { useTranslation } from "react-i18next";
import DownloadLink from "./DownloadLink";
import Portrait from "../assets/images/my-face2.jpg";
import "src/assets/styles/AboutSection.css";

function AboutSection() {
  const { t } = useTranslation();
  const INTRODUCTION = t("ABOUT_SECTION.INTRODUCTION");
  const EXPERIENCE = t("ABOUT_SECTION.EXPERIENCE");
  const PERSONAL = t("ABOUT_SECTION.PERSONAL");
  const DOWNLOAD = t("ABOUT_SECTION.DOWNLOAD");

  return (
    <section className="about-section">
      <div className="about-section__image-container">
        <img
          alt=""
          src={Portrait}
          className="about-section__image"
        />
      </div>
      <div className="about-section__text">
        <div>
          <h3 className="mb-20">{INTRODUCTION}</h3>
          <h3 className="mb-20">{EXPERIENCE}</h3>
          <h3 className="mb-20">{PERSONAL}</h3>
          <DownloadLink title={DOWNLOAD} link="files/resume.pdf" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
