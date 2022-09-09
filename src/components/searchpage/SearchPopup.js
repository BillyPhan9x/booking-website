import React, { useState } from "react";

// React Router đi kèm với một vài hook cho phép bạn truy cập trạng thái của bộ định tuyến và thực hiện điều hướng từ bên trong các thành phần của bạn.
import { useLocation } from "react-router-dom";

import "./SearchPopup.css";

const SearchPopup = () => {
  // khai báo sử dụng vị trí với giá trị móc(hooks) vị trí
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  // console.log(location);

  const clickSearchHandle = (e) => {
    console.log(e.target);
  };

  return (
    <div className="popup-wrap">
      <h1 className="popup-title">Sreach</h1>
      <div className="popup-items">
        <label>Destination</label>
        <input
          type="text"
          placeholder={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="popup-items">
        <label>Check-in Date</label>
        <span className="popup-date"> 28/08/2022 to 28/08/0222 </span>
      </div>
      <div className="popup-items">
        <label>Options</label>
        <div className="popup-option">
          <span>
            Min price <small>per night</small>
          </span>
          <input type="number" placeholder="" />
        </div>
        <div className="popup-option">
          <span>
            Max price <small>per night</small>
          </span>
          <input type="number" placeholder="" />
        </div>
        <div className="popup-option">
          <span>Adult</span>
          <input type="number" min={1} placeholder="1" />
        </div>
        <div className="popup-option">
          <span>Children</span>
          <input type="number" min={0} placeholder="0" />
        </div>
        <div className="popup-option">
          <span>Room</span>
          <input type="number" min={1} placeholder="1" />
        </div>
        <button className="popup-btn" onClick={clickSearchHandle}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
