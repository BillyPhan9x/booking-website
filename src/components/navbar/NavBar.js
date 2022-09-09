import React from "react";

import NavBarItem from "./NavBarItem";
import navBar from "../../data/navBar.json";
// Use CSS cho component = cú pháp import cho React biết nó cần xem xét file NavBar.css.
import "./NavBar.css";

// Tạo Component Navbar và có nhiệm vụ để render giao diện
//  Sử dụng dữ liệu từ file navBar.json ở Starter Code,  file này sẽ là một mảng chứa các phần tử đại diện cho 1 tùy chọn.
function NavBar() {
  const clickHandler = () => {
    window.location.replace("/");
  };

  // Trả về 1 JSX với 1 div chứa tên(logo), nút với  list 0 thứ tự với class Và trong ul trả về phương thức map() tức là mảng navBar để kết xuất.
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo" onClick={clickHandler}>
          Booking Website
        </span>
        <div className="navbar-link">
          <button className="navbar-link__btn">Register</button>
          <button className="navbar-link__btn">Login</button>
        </div>
      </div>
      <div className="list-wrap">
        <ul className="nav-list">
          {navBar &&
            navBar.map((navBar, index) => (
              <NavBarItem
                key={index}
                type={navBar.type}
                icon={navBar.icon}
                active={navBar.active}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

// Để sử dụng Component NavBar, cần export(xuất) nó, nếu 0 nó chỉ có thể sử dụng đc bên trong file
// Xuất hàm là mặc định cho file này.
// Xuất hàm để làm cho hàm có thể tái use bên ngoài file = cách use câu lệnh export.

//  Nguyên tắc build Component – chỉ trả về 1 khối mã JSX duy nhất

// Các component tùy chỉnh phải start = kí tự viết hoa khi đang use code DOM JSX để React có thể nhận biết component tùy chỉnh.
