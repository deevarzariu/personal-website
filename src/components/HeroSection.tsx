import { useTranslation } from "react-i18next";
// import "@styles/HeroSection.css";
import "src/assets/styles/HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();
  const INTRODUCTION_START = t("HERO_SECTION.INTRODUCTION_START");
  const INTRODUCTION_END = t("HERO_SECTION.INTRODUCTION_END");

  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h3 className="hero-section__title">{INTRODUCTION_START}</h3>
        <h1>{INTRODUCTION_END}</h1>
      </div>
    </section>
  );
}

export default HeroSection;
