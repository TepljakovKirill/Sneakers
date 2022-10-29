import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./index.css";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12990,
    imageUrl: "/img/Sneakers/sneakers-1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 10990,
    imageUrl: "/img/Sneakers/sneakers-2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 2990,
    imageUrl: "/img/Sneakers/sneakers-3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
