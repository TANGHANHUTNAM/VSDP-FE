import { useTranslation } from "react-i18next";
const Language = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="group fixed bottom-16 right-5 z-10">
      {i18n.language === "vi" ? (
        <div
          onClick={() => handleChangeLanguage("en")}
          className="relative flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-s-sm bg-red-400"
        >
          <span className="text-sm font-semibold text-white hover:text-yellow-300">
            VI
          </span>
        </div>
      ) : (
        <div
          onClick={() => handleChangeLanguage("vi")}
          className="relative flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-s-sm bg-green-400"
        >
          <span className="text-sm font-semibold text-white hover:text-cyan-200">
            EN
          </span>
        </div>
      )}
    </div>
  );
};
export default Language;
