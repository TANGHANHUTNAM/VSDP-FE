import { useDynamicTitle, useTopPage } from "../hooks";

const ApplyPage = () => {
  useDynamicTitle("Nộp đơn");
  useTopPage();
  return (
    <div>
      <h1>ApplyPage</h1>
    </div>
  );
};

export default ApplyPage;
