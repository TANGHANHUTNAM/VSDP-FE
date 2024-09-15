import { useDynamicTitle, useTopPage } from "../hooks";

const CVPage = () => {
  useDynamicTitle("Hồ sơ");
  useTopPage();
  return (
    <div>
      <h1>CVPage</h1>
    </div>
  );
};

export default CVPage;
