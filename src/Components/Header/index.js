import styles from "./Header.module.css";

function Header(props) {
  return (
    <header>
      <div className={styles.headerLogo}>
        <img width={40} height={40} src="/img/logo.svg" alt="логотип" />
        <div className={styles.headerDescr}>
          <h2>React sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div onClick={props.onClickCart} className={styles.headerBasket}>
        <img width={18} height={18} src="/img/cart.svg" alt="логотип" />
        <span>1205 руб.</span>
        <img width={18} height={18} src="/img/user.svg" alt="логотип" />
      </div>
    </header>
  );
}

export default Header;
