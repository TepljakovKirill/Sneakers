import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLogo">
          <img width={40} height={40} src="/img/logo.svg" alt="логотип" />
          <div className="headerDescr">
            <h2>React sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="headerBasket">
          <img width={18} height={18} src="/img/cart.svg" alt="логотип" />
          <span>1205 руб.</span>
          <img width={18} height={18} src="/img/user.svg" alt="логотип" />
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img
              width={133}
              height={122}
              src="/img/Sneakers/sneakers-1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="../img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={122}
              src="/img/Sneakers/sneakers-2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="../img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={122}
              src="/img/Sneakers/sneakers-3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="../img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={122}
              src="/img/Sneakers/sneakers-4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="../img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
