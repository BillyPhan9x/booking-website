import React from "react";
// CSS Module với kiểu động (styles dynymic)
import styles from "./NavBarItem.module.css";

// Tạo 1 Component con gọi là NavBarItem, Component này sẽ có các Props để có thể truyền vào dữ liệu, sau đó bạn sẽ render Item dựa trên Props đã truyền vào.
function NavBarItem(props) {
  return (
    <li
      className={`${styles["nav-item"]} ${
        props.active ? styles["active"] : ""
      }`}
    >
      <i className={`fa ${props.icon}`}></i>
      <span>{props.type}</span>
    </li>
  );
}

export default NavBarItem;

// Để sử dụng Component NavBarItem, cần export(xuất) nó, nếu 0 nó chỉ có thể sử dụng đc bên trong file
// Xuất hàm là mặc định cho file này.

// Các thuộc tính mang ý nghĩa như sau:

// // type: loại lựa chọn hay tên của item đó.
// // icon: icon tương ứng với item.
// // active: nếu là true thì bạn sẽ thêm border vào item đó, ngược lại thì không cần thêm border.

//  Từ khóa "Key"  Cảnh báo khi render list dữ liệu trong mảng
// Khái niệm này tồn tại để đảm bảo rằng React có thể cập nhật và render lists như vậy 1 cách hiệu quả mà 0 bị mất hiệu suất or lỗi.
// Nếu thêm prop key vào 1 component or element HTML,  giúp React xác định các item riêng lẻ.

// Use giá trị index nếu mỗi mục trong danh sách 0 có thuộc tính duy nhất (id)

// Nguyên tắc build Component – chỉ trả về 1 khối mã JSX duy nhất

// Các component tùy chỉnh phải start = kí tự viết hoa khi đang use code DOM JSX để React có thể nhận biết component tùy chỉnh.

/* <div className={styles["nav"]}>
  <div className={styles["nav-container"]}>
    <ul className={styles["nav-list"]}>
      {props.items.map((navData, index) => (
        <li
          key={index}
          className={`${styles["nav-list__item"]} ${
            navData.active ? styles["active"] : ""
          }`}
        >
          <i className={`fa ${navData.icon}`}></i>
          <span>{navData.type}</span>
        </li>
      ))}
    </ul>
  </div>
</div>; */
