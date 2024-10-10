import { AiFillCaretRight } from "react-icons/ai";

const Criteria = ({ textCss }) => {
  return (
    <div className="criteria-container pt-10 text-justify" id="criteria">
      <h2 className={textCss.heading1}>TIÊU CHÍ XÉT TUYỂN</h2>

      <div className="criteria md:pl-8">
        <h3 className="py-5 text-lg font-bold">
          I. TIÊU CHÍ XÉT TUYỂN NĂM NHẤT{" "}
        </h3>
        <ul className="list-disc pl-10 leading-7">
          <li>
            Là sinh viên năm thứ nhất hệ chính quy tại 7 trường Đại học triển
            khai học bổng hoặc học sinh nhận học bổng MDP (Merit) năm lớp 12 đậu
            đại học chính quy.{" "}
          </li>
          <li>
            Có hoàn cảnh kinh tế gia đình khó khăn, thu nhập gia đình không đủ
            trang trải các khoản chi phí liên quan đến việc học tập và có nhu
            cầu được hỗ trợ tài chính để tiếp tục việc học tập.
          </li>
          <li>
            Có ý chí vượt khó vươn lên bằng con đường học vấn, năng lực học tập
            khá giỏi, cầu tiến, có động cơ học tập mạnh mẽ để phát triển bản
            thân.
          </li>
          <li>
            Có tinh thần cộng đồng, mong muốn tạo ra tác động tích cực cho gia
            đình và xã hội để phát triển các dự án cộng đồng trong tương lai.
          </li>
        </ul>
      </div>

      <div className="criteria pt-5 md:pl-8">
        <h3 className="py-5 text-lg font-bold">
          II. TIÊU CHÍ XÉT TIẾP HỌC BỔNG USP VÀO NĂM THỨ HAI{" "}
        </h3>
        <p className="md:pl-6">
          Để nhận được học bổng USP trị giá <b>200 USD/suất</b> ở năm 2 đại học
          các bạn sinh viên phải đạt{" "}
          <b>tối thiểu 2 trong 3 tiêu chí (tiêu chí 1 bắt buộc)</b> dưới đây:
        </p>

        <h4 className="pb-3 pl-6 pt-8 font-bold">1. ĐIỀU KIỆN BẮT BUỘC</h4>
        <div className="md:pl-10">
          <p className="">
            {" "}
            <b>Chương trình Phát triển Thế hệ Trẻ </b>(Youth Development Program
            - YDP - Summit) là chương trình đặc biệt quan trọng và là dấu ấn
            riêng mà VietHope cung cấp cho sinh viên nhận học bổng giúp trang bị
            những kỹ năng nền tảng trong việc học và cả đến lúc đi làm. Đặc
            biệt, Summit tạo ra môi trường giúp sinh viên tham gia kết nối chặt
            chẽ với nhau, với anh chị tình nguyện viên và với VietHope giống như
            ngôi nhà thứ hai của mỗi thành viên. Chính vì vậy từ năm 2023,{" "}
            <b>
              điều kiện bắt buộc để sinh viên tiếp tục nhận học bổng USP năm thứ
              2 là tham gia chương trình Summit.
            </b>{" "}
          </p>
          <br></br>
          <p>
            <AiFillCaretRight className="inline-flex items-center" />
            Chương trình sẽ diễn ra <b>xuyên suốt 1 tuần</b> và được tổ chức vào
            mùa hè (tháng 7 - tháng 8). Khi tham gia chương trình bạn sẽ nhận
            được:
          </p>
          <ul className="list-disc pl-10 pt-2 leading-7">
            <li>
              Tài trợ <b>100%</b> chi phí tham gia
            </li>
            <li>
              Một môi trường lành mạnh để bạn học hỏi, trau dồi các kỹ năng và
              phát triển
            </li>
            <li>Những kỷ niệm đẹp trong suốt hành trình 7 ngày</li>
          </ul>
          <br />
          <p>
            VietHope sẽ thông báo đến các bạn thời gian tổ chức Summit 1 tháng
            trước khi diễn ra để các bạn có thể sắp xếp thời gian hợp lý. Chính
            vì vậy, trừ những trường hợp bất khả kháng như trùng lịch thi, lịch
            học chính thức , lịch học quân sự tại trường có minh chứng kèm theo,
            điều kiện sức khỏe không cho phép (có giấy khám bệnh)... thì
            VietHope sẽ xem xét.
          </p>
          <br />
          <p>
            <b>Lưu ý: </b>
            Đối với những bạn <b>không tham gia SUMMIT</b> mà không trình bày lý
            do chính đáng, VietHope sẽ không giải ngân học bổng năm 2 mà không
            cần xem xét đến các tiêu chí tiếp theo.
          </p>
        </div>

        <h4 className="pb-3 pl-6 pt-8 font-bold">
          2. ĐIỀU KIỆN VỀ HOẠT ĐỘNG CỘNG ĐỒNG
        </h4>
        <div className="md:pl-10">
          <p>
            Sinh viên nhận học bổng của VietHope phải tham gia ít nhất 1 hoạt
            động do VietHope tổ chức hoặc hoạt động giúp ích cộng đồng. Hoạt
            động đó có thể là: Tình nguyện viên tại các hoạt động hỗ trợ thế hệ
            trẻ của VietHope (Merit Program, VSDP, Youth Workshop,...), Xuân
            tình nguyện, Mùa hè xanh,...
          </p>
          <br />
          <b>
            <AiFillCaretRight className="inline-flex items-center" />
            Lưu ý:
          </b>
          <ul className="list-disc pl-10 pt-3">
            <li>
              Với các hoạt động của VietHope, khi tham gia làm tình nguyện viên
              tổ chức, các bạn có thể làm yêu cầu để được VietHope cấp giấy
              chứng nhận để nộp học bổng ở trường, cộng điểm rèn luyện...
            </li>
            <li>
              Đối với các hoạt động cộng đồng khác sinh viên cần cung cấp Giấy
              xác nhận tham gia hoạt động được cung cấp bởi đơn vị tổ chức (Nhà
              trường/ Địa phương, Đoàn khoa, Câu lạc bộ/ Đội/ Nhóm...)
            </li>
            <li>
              Trong trường hợp hoạt động không đủ lớn nên không có giấy chứng
              nhận, các bạn nên chụp lại hình ảnh tham gia hoạt động (từ 3-5
              tấm) để làm minh chứng rằng các bạn đã tham gia hoạt động đó.
            </li>
          </ul>
        </div>

        <h4 className="pb-3 pl-6 pt-8 font-bold">3. ĐIỀU KIỆN VỀ HỌC LỰC</h4>
        <div className="md:pl-10">
          <p>
            Điểm GPA năm nhất quy đổi theo hệ số từng trường đạt từ{" "}
            <b>loại khá</b> trở lên. Các bạn phải nộp ảnh scan Bảng điểm có xác
            nhận dấu mộc đỏ của trường để tiến hành xét duyệt.
          </p>
          <p className="pt-3">
            {" "}
            <b>Lưu ý: </b>Không chấp nhận ảnh chụp màn hình bảng điểm trên trang
            web.
          </p>
        </div>

        <h4 className="pb-3 pl-6 pt-8 font-bold">*ĐIỂM CỘNG</h4>
        <div className="md:pl-10">
          <p>
            <AiFillCaret:Right className="inline-flex items-center" />
            Nếu đạt được 1 trong các điều kiện dưới đây sẽ tạo thêm{" "}
            <b>điểm cộng cho hồ sơ của bạn </b>:
          </p>
          <ul className="list-disc pl-10 pt-2 leading-7">
            <li>
              Tham gia trên 50% hoạt động VietHope tổ chức (workshop, alumni
              sharing,...)
            </li>
            <li>
              Có giấy chứng nhận đạt thứ hạng ở các cuộc thi cấp khoa trở lên
              hoặc các chứng chỉ quốc tế
            </li>
            <li>Chứng chỉ Tiếng Anh: IELTS: Từ 6.0, TOEIC: Từ 600 điểm…</li>
            <li>Chứng chỉ Tin học: Chứng chỉ MOS</li>
            <li>Chứng chỉ Chuyên ngành</li>
            <li>Giải thưởng Nghiên cứu Khoa học</li>
            <li>Sinh viên 5 Tốt</li>
          </ul>
          <br />
          <b>
            <AiFillCaretRight className="inline-flex items-center" />
            Lưu ý:{" "}
          </b>
          <ul className="list-disc pl-10 pt-2 leading-7">
            <li>Có điểm cộng là một ưu thế.</li>
            <li>
              Trong trường hợp sinh viên <b>không đạt từ 2 trong 3 tiêu chí</b>,
              Ban điều hành VietHope sẽ xem xét cụ thể tiêu chí điểm cộng để
              quyết định sinh viên có nhận được học bổng năm 2 hay không.{" "}
            </li>
            <li>
              Trường hợp sinh viên <b> đạt 3/3 tiêu chí</b> sẽ được xem xét chọn
              lọc Mentee thuộc chương trình Mentorship Program và TNV nòng cốt
              của VietHope
            </li>
            <li>
              Sinh viên <b>khuyết tật hoặc bệnh đau</b> làm giảm khả năng đạt
              các tiêu chí trên dẫn đến không đạt sẽ được Ban điều hành VietHope
              Việt Nam xem xét theo từng trường hợp cụ thể.
            </li>
            <li>
              Đối với các giải thưởng khác ngoài các mục liệt kê ở trên sinh
              viên cần hỏi rõ Quản lý học bổng USP theo thông tin bên dưới để
              được hỗ trợ giải đáp một cách chính xác.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
