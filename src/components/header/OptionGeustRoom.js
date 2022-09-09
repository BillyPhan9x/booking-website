//nhập useState từ React với lệnh import để đăng ký 1 số trạng thái
import React, { useState } from "react";

import "./OptionGuestRoom.css";

const OptionGeustRoom = (props) => {
  // state tùy chọn mở và cập nhật tùy chọn mở người lớn (adults), trẻ em (children), số phòng (room)
  const [openOptions, setOpenOptions] = useState(false);

  // Giả sử tùy chọn và đặt tùy chọn với dữ liệu trạng thái sử dụng với các biến có giá trị.
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Quản lý State bằng trạng thái trước đó (prevState)
  // Cập nhật state khi state mới dựa trên snapshot cũ of chính state đó.
  // Use toán tử spread trong mảng để lấy tất cả các phần tử mảng hiện có và thêm vào mảng mới.
  const optionHandler = (name, action) => {
    setOptions((prevOption) => {
      // console.log(prevOption);
      return {
        ...prevOption,
        [name]: action === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
    // console.log("xxx", options);
    // console.log(name, action);
  };

  return (
    <div className="header-search__item">
      <i className="fa fa-female"></i>
      <span onClick={() => setOpenOptions(!openOptions)}>
        {`${options.adult} adult ${options.children} children ${options.room} room`}
      </span>
      {openOptions && (
        <div className="options">
          <div className="option-item">
            <span className="option-item__text">Adult</span>
            <div className="option-counter">
              <button
                disabled={options.adult <= 1}
                onClick={() => optionHandler("adult", "decrease")}
              >
                -
              </button>
              <span>{options.adult}</span>
              <button onClick={() => optionHandler("adult", "increase")}>
                +
              </button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-item__text">Children</span>
            <div className="option-counter">
              <button
                disabled={options.children <= 0}
                onClick={() => optionHandler("children", "decrease")}
              >
                -
              </button>
              <span>{options.children}</span>
              <button onClick={() => optionHandler("children", "increase")}>
                +
              </button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-item__text">Room</span>
            <div className="option-counter">
              <button
                disabled={options.room <= 1}
                onClick={() => optionHandler("room", "decrease")}
              >
                -
              </button>
              <span>{options.room}</span>
              <button onClick={() => optionHandler("room", "increase")}>
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionGeustRoom;

// ngăn chặn hình vi option trả về âm, cần cung cấp các thuộc tính bị vô hiệu hóa cho các nút của nút giảm.  <button disabled={optionadult<=1}
