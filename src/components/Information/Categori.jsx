import { useRef, useState } from "react";
import { FaList } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Categori = () => {
  const isHiddenList = useRef(true);
  const [listCss, setListCss] = useState(`list-disc pl-6 hidden`);

  const handleClickCategory = () => {
    isHiddenList.current = !isHiddenList.current;
    setListCss(
      isHiddenList.current
        ? "leading-10 text-2xl list-disc pl-6 hidden"
        : " leading-10 text-2xl list-disc pl-6",
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

  return (
    <div className="category-wrap absolute right-0 top-[-32px] flex cursor-pointer justify-end bg-white">
      <div className="categori-container max-w-[300px] border-2 border-gray-400 px-4">
        <div className="flex" onClick={handleClickCategory}>
          <FaList className="inline place-self-center text-center align-middle text-lg" />
          <h3 className="text-lg font-bold"> Danh mục</h3>
        </div>

        <ul className={listCss}>
          <div
            className="absolute right-2 top-1 content-center border border-gray-700 text-3xl sm:text-xl"
            onClick={handleClickCategory}
          >
            <MdClose />
          </div>
          <li
            className="hover:underline"
            onClick={() => {
              handleClickLink("partnerSchools");
            }}
          >
            Các trường đối tác
          </li>
          <li
            className="hover:underline"
            onClick={() => {
              handleClickLink("criteria");
            }}
          >
            Tiêu chí xét tuyển
          </li>
          <li
            className="hover:underline"
            onClick={() => {
              handleClickLink("timeLine");
            }}
          >
            Thời gian thực hiện
          </li>
          <li
            className="hover:underline"
            onClick={() => {
              handleClickLink("instruction");
            }}
          >
            Hướng dẫn làm đơn
          </li>
          <li
            className="hover:underline"
            onClick={() => {
              handleClickLink("notes");
            }}
          >
            Những lưu ý khi làm đơn
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Categori;
