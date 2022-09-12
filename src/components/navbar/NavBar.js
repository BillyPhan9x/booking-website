import React, { useState } from "react";

import NavBarItem from "./NavBarItem";
import Register from "../user/Register";
import navBar from "../../data/navBar.json";

// Use CSS cho component = cú pháp import cho React biết nó cần xem xét file NavBar.css.
import "./NavBar.css";

// Tạo Component Navbar và có nhiệm vụ để render giao diện
//  Sử dụng dữ liệu từ file navBar.json ở Starter Code,  file này sẽ là một mảng chứa các phần tử đại diện cho 1 tùy chọn.
function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpenForm = (e) => {
    // Cần kiểm tra đoạn này với state, props để hợp lý với form register và login
    // console.log(e.target);
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    if (e.target === register) {
      setOpen(true, register);
    }

    if (e.target === login) {
      setOpen(true, login);
    }
  };

  const handleClosedForm = () => {
    setOpen(!open);
  };

  const clickHandler = () => {
    window.location.replace("/");
  };

  // Trả về 1 JSX với 1 div chứa tên(logo), nút với  list 0 thứ tự với class Và trong ul trả về phương thức map() tức là mảng navBar để kết xuất.
  // Lắng nghe và xử lý sự kiện click trên button thông qua props onClick
  //  Viết hàm xử lý sự kiện bên ngoài và React sẽ chỉ trỏ tới hàm xử lý sự kiện đó (tức là lặp lại tên của hàm)
  //  handleOpenForm() là JS sẽ thực thi
  // handleOpenForm đang đc phân tích cú pháp khi trả về code JSX. ( Truyền 1 con trỏ vào hàm làm giá trị cho sự kiện đó, sau đó React sẽ ghi nhớ và thực thi hàm any khi nào xảy ra những sự kiện đó)
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo" onClick={clickHandler}>
          Booking Website
        </span>
        <div className="navbar-link">
          {open && <Register onChange={handleClosedForm} />}
          <button
            id="register"
            className="navbar-link__btn"
            onClick={handleOpenForm}
          >
            Register
          </button>
          <button
            id="login"
            className="navbar-link__btn"
            onClick={handleOpenForm}
          >
            Login
          </button>
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
