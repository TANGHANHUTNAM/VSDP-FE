import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const ApplyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.Apply"));
  useTopPage();
  return (
    <div>
      <h1>ApplyPage</h1>
    </div>
  );
};

export default ApplyPage;
