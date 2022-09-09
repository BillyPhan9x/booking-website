import React from "react";
import footer from "../../data/footer.json";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {footer &&
          footer.map((list) => {
            return (
              <ul className="footer-list" key={list.col_number}>
                {list.col_values &&
                  list.col_values.map((item, index) => {
                    return (
                      <li className="footer-list__item" key={index}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default Footer;

// Tạo Footer cho Homepage

// render dựa theo dữ liệu từ file footer.json. FIle này sẽ bao gồm các phần tử, mỗi phần tử là dữ liệu của một ô trong Footer.
