import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./Hotel.css";

function Hotel(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleClickModal = (orientation) => {
    // console.log(props.items.photos.length); //6 => index start = 0 => -1
    const number = props.items.photos.length - 1;
    let newSlideNumber;
    // console.log(slideNumber["length"]);
    if (orientation === "prev") {
      newSlideNumber = slideNumber === 0 ? number : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === number ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="hotel">
      {open && (
        <div className="slide">
          <FontAwesomeIcon
            className="close"
            onClick={() => setOpen(!open)}
            icon={faCircleXmark}
          />
          <FontAwesomeIcon
            className="arrow-prev"
            onClick={() => {
              handleClickModal("prev");
            }}
            icon={faCircleArrowLeft}
          />
          <div className="slide-image">
            <img src={props.items.photos[slideNumber]} alt="Images Detalis" />
          </div>
          <FontAwesomeIcon
            className="arrow-next"
            onClick={() => {
              handleClickModal("next");
            }}
            icon={faCircleArrowRight}
          />
        </div>
      )}
      <h1 className="hotel-title">{props.items.name}</h1>
      <button className="hotel-btn">Reserve or Book Now!</button>
      <div className="hotel-address">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>{props.items.address}</span>
      </div>
      <span className="hotel-distance">{props.items.distance}</span>
      <span className="hotel-price">{props.items.price}</span>
      <div className="hotel-images">
        {props.items.photos.map((image, index) => (
          <div key={index} className="iamges-item">
            <img onClick={() => handleOpen(index)} src={image} alt="Images" />
          </div>
        ))}
      </div>
      <div className="hotel-details">
        <div className="details-texts">
          <h1>{props.items.title}</h1>
          <p>{props.items.description}</p>
        </div>
        <div className="details-prices">
          <h2>Perfect for a 9-night stay!</h2>
          <span>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </span>
          <h3>
            <strong>${props.items.nine_night_price}</strong> (9 nights)
          </h3>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
