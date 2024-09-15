import { ImSpinner6 } from "react-icons/im";
import { useDynamicTitle, useTopPage } from "../hooks";

const LoadingPage = () => {
  useDynamicTitle("Loading...");
  useTopPage();
  return (
    <div className="flex h-screen w-screen items-center justify-center text-xl text-blue-500 sm:text-2xl lg:text-3xl">
      <ImSpinner6 className="-ml-1 mr-3 animate-spin" />
      <h1 className="font-semibold uppercase">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
