import CollapseInfo from "../components/Information/CollapseInfo";
import { useDynamicTitle, useTopPage } from "../hooks";
import BodyLayout from "../layouts/BodyLayout";

const InformationPage = () => {
  useDynamicTitle("Thông tin");
  useTopPage();
  return (
    <BodyLayout>
      <div className="flex min-h-screen flex-col items-center justify-start">
        <div className="title my-20">
          <h1 className="text-4xl font-bold uppercase text-bgVH">
            Thông tin về chương trình
          </h1>
        </div>
        <CollapseInfo />
      </div>
    </BodyLayout>
  );
};

export default InformationPage;
