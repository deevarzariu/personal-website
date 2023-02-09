import { useTranslation } from "react-i18next";
import "src/assets/styles/Header.css";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <button className="header__btn" onClick={() => changeLanguage("en")}>
        EN
      </button>
      <span>/</span>
      <button className="header__btn" onClick={() => changeLanguage("ro")}>
        RO
      </button>
    </header>
  );
}

export default Header;
