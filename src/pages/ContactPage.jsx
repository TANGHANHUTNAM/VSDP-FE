import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.Contact"));
  useTopPage();
  return (
    <div>
      <h1>ContactPage</h1>
    </div>
  );
};

export default ContactPage;
