import React from "react";

import SearchListItem from "./SearchListItem";

import search from "../../data/search.json";

import "./SearchList.css";

function SearchList() {
  return (
    <div className="search">
      {search &&
        search.map((items, index) => (
          <SearchListItem
            key={index}
            name={items.name}
            distance={items.distance}
            tag={items.tag}
            type={items.type}
            description={items.description}
            price={items.price}
            rate={items.rate}
            rate_text={items.rate_text}
            image_url={items.image_url}
            free_cancel={items.free_cancel}
          />
        ))}
    </div>
  );
}

export default SearchList;

// Ở Component SearchList, bạn sẽ render các kết quả dựa theo dữ liệu từ file search.json. File này sẽ chứa dữ liệu về các kết quả của việc tìm kiếm theo cấu trúc như sau:

// // name: tên khách sạn.
// // distance: vị trí của khách sạn từ trung tâm.
// // tag: tag của khách sạn để phân loại.
// // type: loại khách sạn.
// // description: thông tin về khách sạn.
// // free_cancel: là giá trị Boolean. Nếu bằng true thì sẽ được Cancel, ngược lại thì không.
// // price: giá của khách sạn.
// // rate: điểm đánh giá ở dạng số (trên thang 10.0).
// // rate_text: đánh giá của khách sạn ở dạng text.
// // image_url: link ảnh của khách sạn.

// Component con là SearchListItem gồm các Props với dữ liệu như trên để bắt đầu hiển thị.
