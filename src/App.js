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
      </div>
    </div>
  );
}

export default App;
