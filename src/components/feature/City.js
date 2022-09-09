import React from "react";
import city from "../../data/city.json";

import styles from "./City.module.css";

const City = () => {
  return (
    <div className={styles["city"]}>
      {city &&
        city.map((item, index) => (
          <div key={index} className={styles["city-items"]}>
            <img
              className={styles["city-images"]}
              src={item.image}
              alt="city"
            />
            <div className={styles["city-items__title"]}>
              <h2>{item.name}</h2>
              <p>{item.subText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default City;

// Hiển thị danh sách trên trang Homepage

//  render dựa trên các Dummy Data ở trong file city.json. File JSON này sẽ chứa mảng gồm các phần tử
// "name": "Dublin",
//	"subText": "123 properties",
//	"image": "./images/city_1.webp",
