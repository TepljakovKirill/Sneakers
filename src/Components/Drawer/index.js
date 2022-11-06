import styles from "./Drawer.module.css";

function Drawer({ onCloseCart, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.basket}>
          <h2>Корзина</h2>
          <img
            onClick={onCloseCart}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </div>
        <div className={styles.cartItems}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <img width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
              <div className={styles.cartItemDescr}>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <div className={styles.total}>
            <p>Итого</p>
            <div className={styles.borderBottom}></div>
            <b>21498 руб.</b>
          </div>
          <div className={styles.totalTax}>
            <p>Налог 5%</p>
            <div className={styles.borderBottom}></div>
            <b>1074 руб.</b>
          </div>
          <button className={styles.totalButton}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
