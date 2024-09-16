import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const CVPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.CV"));
  useTopPage();
  return (
    <div>
      <h1>CVPage</h1>
    </div>
  );
};

export default CVPage;
