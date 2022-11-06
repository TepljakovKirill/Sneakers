import React from "react";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./index.css";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setcartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62b87b5e03c36cb9b7c7d112.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer items={cartItems} onCloseCart={() => setcartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setcartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => addToCart(obj)}
              onClickFavorite={() => {
                console.log("Нажали на фаворита");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
