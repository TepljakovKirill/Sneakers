import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorit}>
        <img src="/img/heart-onliked.svg" alt="onliked" />
      </div>
      <img width={133} height={122} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardAdd}>
        <div className={styles.cardPrice}>
          <span>цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={styles.button}>
          <img width={11} height={11} src="../img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
