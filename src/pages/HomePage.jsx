import CarouselComponent from "../components/Home/CarouselComponent";
import ProgramDes from "../components/Home/ProgramDes";
import { useDynamicTitle, useTopPage } from "../hooks";

const HomePage = () => {
  useDynamicTitle("VSDP");
  useTopPage();
  return (
    <>
      <CarouselComponent />
      <ProgramDes />
    </>
  );
};

export default HomePage;
