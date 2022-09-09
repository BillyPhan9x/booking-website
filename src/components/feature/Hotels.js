// import React, { useState } from "react";
import hotels from "../../data/hotel_list.json";

import styles from "./Hotels.module.css";

const Hotels = () => {
  // const [isName, setIsName] = useState("");

  // Khi click vào tên của từng khách sạn thì người dùng sẽ được chuyển hướng để trang Detail Page để xem thông tin đầy đủ của khách sạn đó (đường link là /detail).
  const clickHandler = (e) => {
    console.log(e.target);
    // console.log(isName);
    // console.log(e.target === props.name);

    window.location.replace("/detail");
  };
  return (
    <div className={styles["hotels"]}>
      {hotels &&
        hotels.map((item, index) => (
          <div key={index} className={styles["hotels-items"]}>
            <img
              className={styles["hotels-images"]}
              src={item.image_url}
              alt="hotels"
            />
            <span className={styles["hotels-name"]} onClick={clickHandler}>
              {item.name}
            </span>
            <span className={styles["hotels-city"]}>{item.city}</span>
            <span className={styles["hotels-price"]}>
              Starting from ${item.price}
            </span>
            <div className={styles["hotels-rate"]}>
              <button>{item.rate}</button>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hotels;

// Hiển thị các khách sạn

// sử dụng dữ liệu ở file hotel_list.json với các dữ liệu có cấu trúc

// "name": "Aparthotel Stare Miasto",
//	"city": "Madrid",
//	"price": 120,
//	"rate": 8.9,
//	"type": "Excellent",
//	"image_url": "./images/hotel_1.webp"
