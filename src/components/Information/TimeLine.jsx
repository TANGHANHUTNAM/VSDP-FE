

const TimeLine = ({textCss}) =>{

    return (
        <div className="criteria-container pt-10 pb-10 ">

            <h2 className={textCss.heading1}>THỜI GIAN THỰC HIỆN</h2>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse pt-10  place-content-center">
                <li className="flex items-center space-x-5 px-5 rtl:space-x-reverse">
                    <span className="flex items-center  justify-center text-lg  font-bold  w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        1.
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight text-lg" >Triển khai và nhận đơn</h3>
                        <p className="text-base">Ngày 05/09/2024 </p>
                    </span>
                </li>
                <li className="flex items-center space-x-5 px-5 rtl:space-x-reverse">
                    <span className="flex items-center justify-center text-lg  font-bold  w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2.
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight text-lg">Hạn cuối nhận đơn</h3>
                        <p className="text-base">Ngày 15/10/2024 </p>
                    </span>
                </li>
                <li className="flex items-center space-x-5 px-5 rtl:space-x-reverse">
                    <span className="flex items-center justify-center text-lg  font-bold  w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3.
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight text-lg">Phỏng vấn</h3>
                        <p className="text-base">Tháng 11</p>
                    </span>
                </li>
                <li className="flex items-center space-x-5 px-5 rtl:space-x-reverse">
                    <span className="flex items-center justify-center text-lg  font-bold  w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        4.
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight text-lg">Trao học bổng</h3>
                        <p className="text-base">Tháng 12</p>
                    </span>

                </li>
             
            </ol>
        </div>
    );

}

export default TimeLine;