import ListCV from "../components/CVPage/ListCV";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const CVPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.CV"));
  useTopPage();
  return (
    <div>
      <div className="title my-10 text-center">
        <h1 className="text-2xl font-bold uppercase text-bgVH md:text-4xl">
          Danh sách hồ sơ
        </h1>
      </div>
      <ListCV />
    </div>
  );
};

export default CVPage;
