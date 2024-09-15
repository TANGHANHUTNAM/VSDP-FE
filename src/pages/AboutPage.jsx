import { useDynamicTitle, useTopPage } from "../hooks";

const AboutPage = () => {
  useDynamicTitle("Giới thiệu");
  useTopPage();
  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
