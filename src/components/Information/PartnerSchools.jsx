

const PartnerSchools = ({textCss}) =>
{
   
    return (
        <div className="partner-schools-container justify-start max-w-screen-xl">
            <h2 className={textCss.heading1}>CÁC TRƯỜNG ĐỐI TÁC </h2>

            <div className="pl-8">
                <p className=" pt-5">Với VSDP 2024, VietHope hướng đến đối tượng 
                    là các bạn sinh viên năm nhất hệ Đại học chính quy của <b>7 trường đại học</b> sau: </p>
               
                <ul className="no-underline list-disc pl-10 py-3">
                    <li className=" leading-7">Trường Đại học Nông lâm - Đại học Huế</li>
                    <li className=" leading-7">Trường Đại học Kinh tế - Đại học Huế</li>
                    <li className=" leading-7">Trường Đại học Khoa học - Đại học Huế </li>
                    <li className=" leading-7">Đại học Kinh tế TP. HCM</li>
                    <li className=" leading-7">Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM</li>
                    <li className=" leading-7">Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM</li>
                    <li className=" leading-7">Đại học Cần Thơ</li>
                </ul>   
           
                <p className="pt-5"> <b>LƯU Ý: </b>Đối với <b> Đại học Cần Thơ</b>, học bổng sẽ <b>không áp dụng</b> cho sinh viên ngành Sư phạm <b>được nhận sự hỗ trợ </b>theo Nghị định 116/2020/NĐ-CP của Chính phủ.
                </p>
            </div>
        </div>
    );
}

export default PartnerSchools;