import React from 'react';

import '../styles/ProductCardStyle.product.css';


function SingleProductCard() {
  return (
    <main>
      <div className="singleCard">
        <h1 className="singleTitle">Traje Amarillo</h1>
        <img className="singleImgProduct" src={process.env.PUBLIC_URL + "/img/products/PicsArt_07-19-01.54.50.jpg"} alt="Traje Amarillo" />
        <p className="singlePrice">Precio: $520.00</p>
        <div className="singleQtyAdd">
          <div className="singleQtyMain">
            <input className="singleBtnQty" type="button" value="-" />
            <input className="singleNumQty" type="text" step="1" min="1" max="10" name="quantity" value="1" />
            <input className="singleBtnQty" type="button" value="+" />
          </div>
          <button className="addToCartProduct singleAddToCart">Añadir al carrito</button>
        </div>
        <div className="singleDesc">
          <h3>Descripción</h3>
          <p>Este es un traje amarillo bla bla bla blabla blabla bla blablabla aslkjdlk alksjdfjkldsj qeporiue; alskjnlsjk aslfjksklj.</p>
        </div>
      </div>
    </main>
  );
}

export default SingleProductCard;