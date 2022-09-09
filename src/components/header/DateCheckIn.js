import React, { useState } from "react";

// Cần nhập  (1 trong 4) thành phần độc lập phạm vi ngày React-date-range (thư viện React) để thay đổi UI.
// Thành phần này mở rộng tất cả các đạo cụ của thành phần Lịch .
import { DateRange } from "react-date-range";
// nhập định dạng , trả về chuỗi ngày đã định dạng theo định dạng JS sẵn tích hợp sẵn.
import { format } from "date-fns";

// Bước đầu tiên, cần nhập kiểu tệp(styles) and chủ đề (theme file)
import "react-date-range/dist/styles.css"; // nhập tệp css chính
import "react-date-range/dist/theme/default.css"; // tệp css chủ đề

import "./DateCheckIn.css";

function DateCheckIn() {
  // open close state để thực hiện việc ẩn, hiện Modal
  const [openDate, setOpenDate] = useState(false);
  // date state
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header-search__item">
      <i className="fa fa-calendar"></i>
      <span readOnly onClick={() => setOpenDate(!openDate)}>
        {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}
      </span>
      {openDate && (
        <DateRange
          className="date"
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          minDate={new Date()}
          onChange={(item) => setDate([item.selection])}
          ranges={date}
        />
      )}
    </div>
  );
}

export default DateCheckIn;

// Sự kiện onChange đã sẵn sàng bất cứ khi nào người dùng thay đổi bất kỳ, nó sẽ kéo ngày cập nhật ra ngoài và hỗ trợ

// React-date-range: Hoạt động ngày 0 trạng thái, Cấu hình cao, Nhiều lựa chọn phạm vi, Dựa trên ngày js gốc, Kéo n Thả lựa chọn, Bàn phím thân thiện

// Getting Started: react-date-range can be installed with  command: npm install react-date-range

// - First, styles and theme file must be imported: tệp kiểu và chủ đề phải được nhập:

// Then, import one of the 4 standalone(độc lập) components: DateRange, DateRangePicker, Calendar, DefinedRange

// Nhập dịnh dạnh format ngày với index 0 vì nó là 1 mảng và đối tượng trong mảng đó và ngày bắt đầu , tiếp theo là loại định dạng muốn hiển thị, sau đó tương tự với ngày kết thúc.
// ${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
//   date[0].endDate,
//   "dd/MM/yyyy"
