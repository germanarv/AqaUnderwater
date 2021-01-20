import React from 'react';

import '../styles/ProductCardStyle.product.css';


function SingleProductCard(props) {
  return (
    <main>
      <div className="singleCard">
        <h1 className="singleTitle">{props.product.name}</h1>
        <img className="singleImgProduct" src={props.product.img} alt={props.product.name} />
        <p className="singlePrice">Precio: {props.product.price}</p>
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
          <p>{props.product.description}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleProductCard;