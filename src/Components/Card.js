function Card() {
  return (
    <div className="card">
      <div className="favorit">
        <img src="/img/heart-onliked.svg" alt="onliked" />
      </div>
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
  );
}

export default Card;
