import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./index.css";

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
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
