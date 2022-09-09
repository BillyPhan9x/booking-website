import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Hotel.css";

function Hotel(props) {
  return (
    <div className="hotel">
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
            <img src={image} alt="Images" />
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
