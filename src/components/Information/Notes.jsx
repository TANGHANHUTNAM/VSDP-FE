const Notes = ({ textCss }) => {
  return (
    <div className="criteria-container pt-10 text-justify" id="notes">
      <h2 className={textCss.heading1}>NHỮNG LƯU Ý KHI LÀM ĐƠN</h2>
      <p className="pt-5 md:pl-10">
        <b>
          Một vài thông tin các bạn cần lưu ý trong quá trình hoàn thành hồ sơ
          học bổng:
        </b>
      </p>
      <ul className="list-disc pl-10 pt-2 leading-8 md:pl-20">
        <li>
          Tất cả các bản sao đều <b>KHÔNG CẦN CÔNG CHỨNG.</b>{" "}
        </li>
        <li className="font-bold">
          Các bạn điền đầy đủ thông tin vào tất cả các phần của đơn và có đủ các
          giấy tờ bắt buộc (hồ sơ không hoàn chỉnh sẽ bị loại ngay từ vòng xét
          duyệt hồ sơ).
        </li>
        <li className="font-bold">
          Các nội dung nếu có là không bắt buộc nhưng sẽ là điểm ưu tiên cho
          bạn.
        </li>
        <li>
          {" "}
          <b>Phần 1, 2 và 3 - Sinh viên, Học tập & Gia cảnh:</b> Cung cấp chính
          xác và đầy đủ thông tin và
          <b> phải có địa chỉ email và thường xuyên kiểm tra</b> nhận các thông
          tin liên quan đến việc xét duyệt Học bổng.
        </li>
        <li className="font-bold">
          Trước khi cung cấp thông tin trên đơn online, hệ thống sẽ yêu cầu sinh
          viên đăng nhập tài khoản Google/Gmail theo yêu c
        </li>
        <li>
          {" "}
          <b>
            Phần 4 – Trình bày về hoàn cảnh gia đình và định hướng của bản thân:
          </b>{" "}
          trước khi điền form, để đảm bảo nội dung cũng như đề phòng việc mất
          kết nối giữa chừng, sinh viên nên viết sẵn một bản nháp offline trên
          word trước và sau đó copy dán vào đơn.
        </li>
        <li>
          {" "}
          <b>Hướng dẫn khác:</b> VietHope khuyến khích sinh viên xin một thư
          giới thiệu của một thầy/cô cũ ở trường cấp 3 để xác minh tính xác thực
          của thông tin bạn đã cung cấp ở ba phần trên, giới thiệu rõ hơn về
          tính cách, gia cảnh sinh viên…
        </li>
      </ul>
    </div>
  );
};

export default Notes;
