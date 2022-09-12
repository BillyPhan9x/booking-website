//nhập useState từ React với lệnh import để đăng ký 1 số trạng thái
import React, { useState } from "react";

import "./OptionGuestRoom.css";

const OptionGeustRoom = (props) => {
  // state tùy chọn mở và cập nhật tùy chọn mở người lớn (adults), trẻ em (children), số phòng (room)
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className="header-search__item">
      <i className="fa fa-female"></i>
      <span onClick={() => setOpenOptions(!openOptions)}>
        {`${props.adult} adult ${props.children} children ${props.room} room`}
      </span>
      {openOptions && (
        <div className="options">
          <div className="option-item">
            <span className="option-item__text">Adult</span>
            <div className="option-counter">
              <button
                disabled={props.adult <= 1}
                onClick={() => props.onChange("adult", "decrease")}
              >
                -
              </button>
              <span>{props.adult}</span>
              <button onClick={() => props.onChange("adult", "increase")}>
                +
              </button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-item__text">Children</span>
            <div className="option-counter">
              <button
                disabled={props.children <= 0}
                onClick={() => props.onChange("children", "decrease")}
              >
                -
              </button>
              <span>{props.children}</span>
              <button onClick={() => props.onChange("children", "increase")}>
                +
              </button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-item__text">Room</span>
            <div className="option-counter">
              <button
                disabled={props.room <= 1}
                onClick={() => props.onChange("room", "decrease")}
              >
                -
              </button>
              <span>{props.room}</span>
              <button onClick={() => props.onChange("room", "increase")}>
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
