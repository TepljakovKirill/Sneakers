function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <div className="basket">
          <h2>Корзина</h2>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
        </div>
        <div className="cartItems">
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/Sneakers/sneakers-1.jpg"
              alt="Sneakers"
            />
            <div className="cartItemDescr">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>

          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/Sneakers/sneakers-1.jpg"
              alt="Sneakers"
            />
            <div className="cartItemDescr">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <div className="total">
            <p>Итого</p>
            <div className="borderBottom"></div>
            <b>21498 руб.</b>
          </div>
          <div className="totalTax">
            <p>Налог 5%</p>
            <div className="borderBottom"></div>
            <b>1074 руб.</b>
          </div>
          <button className="totalButton">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
