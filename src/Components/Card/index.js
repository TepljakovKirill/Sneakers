import React from "react";
import styles from "./Card.module.css";

function Card({ imageUrl, title, price, onClickFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div onClick={onClickFavorite} className={styles.favorit}>
        <img src="/img/heart-onliked.svg" alt="onliked" />
      </div>
      <img width={133} height={122} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardAdd}>
        <div className={styles.cardPrice}>
          <span>цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.btnPlus}
          onClick={onClickPlus}
          src={isAdded ? "../img/btn-checked.svg " : "../img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
