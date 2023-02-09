import { useTranslation } from "react-i18next";
import "src/assets/styles/ContactSection.css";
import ContactData from "src/data/contact.json";

function ContactSection() {
  const { linkedin, email, telephone } = ContactData;
  const { t } = useTranslation();

  const TITLE = t("CONTACT_SECTION.TITLE");
  const CALL_TO_ACTION = t("CONTACT_SECTION.CALL_TO_ACTION");
  const FIND_ME = t("CONTACT_SECTION.FIND_ME");

  return (
    <section className="contact-section">
      <h1 className="mb-10">{TITLE}</h1>
      <h4 className="mb-10">{CALL_TO_ACTION}</h4>
      <h4 className="mb-5">{FIND_ME}</h4>
      <div className="contact-section__links">
        <a className="contact-section__link" href={linkedin}>
          linkedin
        </a>
        <a className="contact-section__link" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="contact-section__link" href={`tel:${telephone}`}>
          {telephone}
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
