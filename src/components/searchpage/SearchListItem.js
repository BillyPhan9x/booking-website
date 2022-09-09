import React from "react";

// CSS Module với kiểu động (styles dynamic)
import styles from "./SearchListItem.module.css";

function SearchListItem(props) {
  return (
    <div className={styles["search-list"]}>
      <img src={props.image_url} alt="Images" />
      <div className={styles["search-desc"]}>
        <h1 className={styles["search-desc__title"]}>{props.name}</h1>
        <span className={styles["search-desc__distance"]}>
          {props.distance} from center
        </span>
        <span className={styles["search-desc__tag"]}>{props.tag}</span>
        <span className={styles["search-desc__substance"]}>
          {props.description}
        </span>
        <span className={styles["search-desc__features"]}>{props.type}</span>
        <span className={styles["search-desc__cance"]}>
          {props.free_cancel ? "Free cancellation" : ""}
        </span>
        <span className={styles["search-desc__cancels"]}>
          {props.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </span>
      </div>
      <div className={styles["search-details"]}>
        <div className={styles["search-details__rating"]}>
          <span>{props.rate_text}</span>
          <button>{props.rate}</button>
        </div>
        <div className={styles["search-details__text"]}>
          <big>${props.price}</big>
          <span>Includes taxes and fees </span>
          <button>See availablity</button>
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;

/* <div className="search">
  {props.items.map((item, index) => (
    <div key={index} className="search-list">
      <img src={item.image_url} alt="Images" />
      <div className="search-desc">
        <h1 className="search-desc__title">{item.name}</h1>
        <span className="search-desc__distance">
          {item.distance} from center
        </span>
        <span className="search-desc__tag">{item.tag}</span>
        <span className="search-desc__substance">{item.description}</span>
        <span className="search-desc__features">{item.type}</span>
        <span className="search-desc__cance">
          {item.free_cancel ? "Free cancellation" : ""}
        </span>
        <span className="search-desc__cancels">
          {item.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </span>
      </div>
      <div className="search-details">
        <div className="search-details__rating">
          <span>{item.rate_text}</span>
          <button>{item.rate}</button>
        </div>
        <div className="search-details__text">
          <big>${item.price}</big>
          <span>Includes taxes and fees </span>
          <button>See availablity</button>
        </div>
      </div>
    </div>
  ))}
</div>; */
