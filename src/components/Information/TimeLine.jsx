const TimeLine = ({ textCss }) => {
  return (
    <div className="criteria-container pb-10 pt-10" id="timeLine">
      <h2 className={textCss.heading1}>THỜI GIAN THỰC HIỆN</h2>
      <ol className="w-full place-content-center items-center space-y-4 pt-10 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <li className="flex items-center space-x-5 lg:px-5 rtl:space-x-reverse">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-500 text-lg font-bold dark:border-gray-400">
            1
          </span>
          <span>
            <h3 className="text-lg font-medium leading-tight">
              Triển khai và nhận đơn
            </h3>
            <p className="text-base">Ngày 05/09/2024 </p>
          </span>
        </li>
        <li className="flex items-center space-x-5 lg:px-5 rtl:space-x-reverse">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-500 text-lg font-bold dark:border-gray-400">
            2
          </span>
          <span>
            <h3 className="text-lg font-medium leading-tight">
              Hạn cuối nhận đơn
            </h3>
            <p className="text-base">Ngày 15/10/2024 </p>
          </span>
        </li>
        <li className="flex items-center space-x-5 lg:px-5 rtl:space-x-reverse">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-500 text-lg font-bold dark:border-gray-400">
            3
          </span>
          <span>
            <h3 className="text-lg font-medium leading-tight">Phỏng vấn</h3>
            <p className="text-base">Tháng 11</p>
          </span>
        </li>
        <li className="flex items-center space-x-5 lg:px-5 rtl:space-x-reverse">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-500 text-lg font-bold dark:border-gray-400">
            4
          </span>
          <span>
            <h3 className="text-lg font-medium leading-tight">Trao học bổng</h3>
            <p className="text-base">Tháng 12</p>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
