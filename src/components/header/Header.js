import React, { useState } from "react";
//  React Router v6 cung cấp 1 móc sử dụngNavigate
import { useNavigate } from "react-router-dom";
import DateCheckIn from "./DateCheckIn";
import OptionGuestRoom from "./OptionGeustRoom";

import "./Header.css";

const Header = () => {
  // đích đến trang và đầu vào state là 1 chuỗi rỗng, bất cứ khi nào (thay đổi thông tin) cập nhật trạng thái ở input
  const [destination, setDestination] = useState("");
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

  const navigate = useNavigate();

  // Khi click vào nút Search thì bạn sẽ được chuyển hướng sang trang /seach để hiển thị trang Seach Page
  // Sử dụng onClick trong React và window.location.replace để chuyển hướng do trang web.
  const clickHandlerSearch = () => {
    navigate("/search", { state: { destination, options } });
  };

  // Các form nhập liệu sẽ sử dụng các thẻ <input> trong HTML.
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
        <p className="header-description">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="header-btn">Sign in / Register</button>
        <div className="header-search">
          <div className="header-search__item">
            <i className="fa fa-bed"></i>
            <input
              type="text"
              placeholder="Where are you going?"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <DateCheckIn />
          <OptionGuestRoom
            adult={options.adult}
            children={options.children}
            room={options.room}
            onChange={optionHandler}
          />
          <button className="header-search__btn" onClick={clickHandlerSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
