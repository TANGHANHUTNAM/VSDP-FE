import { useDynamicTitle, useTopPage } from "../hooks";

const ContactPage = () => {
  useDynamicTitle("Liên hệ");
  useTopPage();
  return (
    <div>
      <h1>ContactPage</h1>
    </div>
  );
};

export default ContactPage;
