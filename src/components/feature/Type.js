import React from "react";
import typeData from "../../data/type.json";

import styles from "./Type.module.css";

const Type = () => {
  return (
    <div className={styles["type"]}>
      {typeData &&
        typeData.map((item, index) => (
          <div key={index} className={styles["type-items"]}>
            <img
              className={styles["type-items__images"]}
              src={item.image}
              alt="type"
            />
            <div className={styles["type-items__title"]}>
              <h2>{item.name}</h2>
              <p>{item.count} hotels</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Type;

//  Hiển thị các loại khách sạn

//  sử dụng dữ liệu từ file type.json, file này là một mảng với các dữ liệu có cấu trúc

//"name": "Hotels",
//	"count": 233,
//	"image": "./images/type_1.webp",
