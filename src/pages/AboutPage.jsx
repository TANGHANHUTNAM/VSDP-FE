import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.About"));
  useTopPage();
  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
