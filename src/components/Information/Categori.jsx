import { useRef, useState } from "react";
import { FaList } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Categori = () => {
  const isHiddenList = useRef(true);
  const [listCss, setListCss] = useState(
    "transition-all duration-100 ease-linear delay-150 opacity-0",
  );

  const handleClickCategory = () => {
    isHiddenList.current = !isHiddenList.current;
    setListCss(
      `text-2xl mx-4 transition-all duration-100 ease-linear ${isHiddenList.current ? "opacity-0" : " delay-150 opacity-100"}`,
    );
  };
  const handleClickLink = (elementId) => {
    handleClickCategory();
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const styleCategoryHeader = `flex rounded-sm  ${isHiddenList.current ? "hover:bg-gray-200 py-[1px] " : "pt-5 pl-1 "}`;
  return (
    <div
      className={`categori-container tranform absolute right-0 top-[-32px] cursor-pointer rounded-sm border-[1px] border-gray-600 bg-white transition-all duration-300 ease-in-out ${isHiddenList.current ? "h-8 w-[138px]" : "h-[300px] w-[300px] md:h-[270px] md:w-[326px]"}`}
    >
      <div className={styleCategoryHeader} onClick={handleClickCategory}>
        <FaList className="ml-3 inline place-self-center text-center align-middle text-lg" />{" "}
        <h3 className="mr-3 px-1 text-lg font-bold">Danh mục</h3>
      </div>

      <ul className={listCss}>
        <div
          className="absolute right-2 top-2 content-center rounded-sm border border-gray-700 text-3xl hover:bg-gray-200 sm:text-xl"
          onClick={handleClickCategory}
        >
          <MdClose />
        </div>
        <li
          className="py-1 hover:underline"
          onClick={() => {
            handleClickLink("partnerSchools");
          }}
        >
          I. Các trường đối tác
        </li>
        <li
          className="py-1 hover:underline"
          onClick={() => {
            handleClickLink("criteria");
          }}
        >
          II. Tiêu chí xét tuyển
        </li>
        <li
          className="py-1 hover:underline"
          onClick={() => {
            handleClickLink("timeLine");
          }}
        >
          III. Thời gian thực hiện
        </li>
        <li
          className="py-1 hover:underline"
          onClick={() => {
            handleClickLink("instruction");
          }}
        >
          IV. Hướng dẫn làm đơn
        </li>
        <li
          className="py-1 hover:underline"
          onClick={() => {
            handleClickLink("notes");
          }}
        >
          V. Những lưu ý khi làm đơn
        </li>
        <br />
      </ul>
    </div>
  );
};

export default Categori;
