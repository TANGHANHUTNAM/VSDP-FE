// import CollapseInfo from "../components/Information/CollapseInfo";
import Criteria from "../components/Information/Criteria";
import TimeLine from "../components/Information/TimeLine";
import PartnerSchools from "../components/Information/PartnerSchools";
import { useDynamicTitle, useTopPage } from "../hooks";
import BodyLayout from "../layouts/BodyLayout";
import { useTranslation } from "react-i18next";
import Instruction from "../components/Information/Instruction";
import Notes from "../components/Information/Notes";

const InformationPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("Header.Title.Information"));
  useTopPage();

  const textCss = {
    heading1: "text-2xl font-medium bg-bgVH text-white leading-10 pl-6 ",
  }

  return (
    <BodyLayout>
      <div className="flex min-h-screen flex-col justify-center max-w-screen-xl pt-10 pb-20">
        
        <div className="title my-20 text-center">
          <h1 className="text-4xl font-bold uppercase text-bgVH">
            Thông tin về chương trình
          </h1>
        </div>

        {/* <CollapseInfo /> */}

        <PartnerSchools textCss={textCss} />
        <Criteria textCss ={textCss} />
        <TimeLine textCss ={textCss} />
        <Instruction textCss={textCss} />
        <Notes textCss={textCss}/>
      </div>
    </BodyLayout>
  );
};

export default InformationPage;
