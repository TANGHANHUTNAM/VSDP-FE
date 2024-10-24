import { AiFillCaretRight } from "react-icons/ai";

const Instruction = ({ textCss }) => {
  return (
    <div className="criteria-container pt-10 text-justify" id="instruction">
      <h2 className={textCss.heading1}>HƯỚNG DẪN LÀM ĐƠN</h2>
      <div className="criteria md:pl-8">
        <br />
        <p>
          Chương trình Phát triển Sinh viên VietHope (VSDP) 2024 được triển khai
          dưới hình thức nộp hồ sơ online, VietHope sẽ{" "}
          <b>liên tục cập nhật danh sách sinh viên nộp hồ sơ</b> trên trang web{" "}
          <span className="italic">
            (cập nhật lần lượt các ngày 8/09, 15/09, 22/9, 29/9, 6/10, 13/10,
            20/10).
          </span>
        </p>
        <br />

        <p>
          {" "}
          <AiFillCaretRight className="mb-[3px] inline-block" />
          <b>Đơn xét tuyển sẽ có 4 phần: </b>{" "}
        </p>

        <ol className="pl-6 pt-2 leading-7">
          <li>
            {" "}
            <b>1.</b> Thông tin sinh viên
          </li>
          <li>
            {" "}
            <b>2.</b> Thông tin học tập
          </li>
          <li>
            {" "}
            <b>3.</b> Thông tin gia đình
          </li>
          <li>
            {" "}
            <b>4.</b> Trình bày về hoàn cảnh gia đình và định hướng của bản thân
            qua <b>2 câu hỏi</b> (đây là phần để VietHope hiểu rõ về bạn, hãy
            chứng tỏ tiềm năng của bản thân có thể vượt qua khó khăn, hướng đến
            một tương lai giáo dục tốt đẹp).
          </li>
        </ol>
        <br />
        <div className="leading-7">
          <p>
            <b>Câu 1:</b> Bạn hãy trình bày một cách chi tiết nhất về hoàn cảnh
            gia đình mình hiện nay và những khó khăn, thử thách đã gặp phải khi
            theo đuổi việc học. <b>(Từ 400 - 1000 từ)</b>{" "}
          </p>
          <p>
            <b>Câu 2:</b> Theo bạn những phẩm chất/ thế mạnh gì đã giúp bạn vượt
            qua những khó khăn trong quá khứ để tiếp tục việc học? Trong những
            năm học đại học sắp tới, những thách thức lớn nhất của bạn là gì?
            Bạn dự định sẽ sử dụng những thế mạnh của mình để vượt qua những
            thách thức đó như thế nào trên con đường theo đuổi học vấn?{" "}
            <span className="italic">
              (Khuyến khích miêu tả chi tiết và có sử dụng ví dụ cụ thể cho
              những ý trình bày)
            </span>{" "}
          </p>
        </div>
        <br />
        <p>
          {" "}
          <AiFillCaretRight className="mb-[3px] inline-block" />
          <b>Hồ sơ đính kèm (file ảnh/file scan):</b>
        </p>
        <ul className="list-disc pl-10 pt-2 leading-7">
          <li>
            Ảnh chân dung (khuyến khích sử dụng ảnh thẻ 6 tháng gần nhất).
          </li>
          <li>
            Giấy báo nhập học (có thể hiện điểm thi/kết quả xét tuyển theo
            phương thức tuyển sinh đậu đại học, có xác nhận của trường).
          </li>
          <li>
            Đối với sinh viên trường ĐH Kinh Tế TP. HCM: Sinh viên chụp ảnh biên
            nhận hồ sơ nhập học thay cho giấy báo nhập học
          </li>
          <li>Bảng điểm học bạ lớp 12</li>
          <li>Giấy chứng nhận các giải thưởng (nếu có)</li>
          <li>Thư giới thiệu của giáo viên dạy THPT (nếu có)</li>
          <li>
            Giấy Chứng Nhận Hộ Nghèo/Hộ Cận nghèo hay Giấy xác nhận hoàn cảnh
            khó khăn (nếu có)
          </li>
        </ul>
        <br />
        <p>
          <AiFillCaretRight className="mb-[3px] inline-block" />
          <b>Sinh viên có thể dùng một trong những cách sau:</b>
        </p>
        <ul className="list-disc pl-10 pt-2 leading-7">
          <li>Scan trực tiếp từ tiệm photocopy</li>
          <li>Tải app CamScanner (Android/IOS)</li>
          <li>
            Chụp ảnh bằng điện thoại (lưu ý: các bạn phải giữ trang giấy thẳng,
            không cong hay xiêu vẹo, chụp ngay ngắn, đủ 4 góc, rõ hình rõ chữ.
            Bắt buộc: chụp ảnh dạng đứng, không xoay điện thoại ngang để chụp)
          </li>
        </ul>
        <br />
        <p>
          {" "}
          <AiFillCaretRight className="mb-[3px] inline-block" />
          <b>Link đăng ký cụ thể từng trường như sau: </b>
        </p>
        <ul className="list-disc pl-10 pt-2 leading-7">
          <li>
            ĐH Nông lâm - ĐH Huế:{" "}
            <a href="" className="font-medium text-green-400">
              {" "}
              link NL{" "}
            </a>
          </li>
          <li>
            ĐH Kinh tế - ĐH Huế:{" "}
            <a href=" " className="font-medium text-green-400">
              link KTH{" "}
            </a>{" "}
          </li>
          <li>
            ĐH Khoa học - ĐH Huế:{" "}
            <a href=" " className="font-medium text-green-400">
              link KH{" "}
            </a>
          </li>
          <li>
            ĐH Kinh Tế TP. HCM:{" "}
            <a href=" " className="font-medium text-green-400">
              link KTHCM{" "}
            </a>{" "}
          </li>
          <li>
            ĐH Khoa Học Tự Nhiên TP. HCM:{" "}
            <a href=" " className="font-medium text-green-400">
              link KHTN{" "}
            </a>
          </li>
          <li>
            ĐH Khoa Học Xã hội và Nhân văn TP. HCM:{" "}
            <a href=" " className="font-medium text-green-400">
              link XHNV{" "}
            </a>{" "}
          </li>
          <li>
            ĐH Cần Thơ:{" "}
            <a href=" " className="font-medium text-green-400">
              link CT{" "}
            </a>{" "}
          </li>
          <li>
            Sinh viên từ chương trình Merit:{" "}
            <a href=" " className="font-medium text-green-400">
              link MR{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instruction;
