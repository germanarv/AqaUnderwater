import React from 'react';

import '../styles/ProductCardStyle.product.css';


function ProductCard(props) {
  return (
    <div className="mainProdCard">
      <a href={"/products/" + props.product.id} className="imgLink"><img src={process.env.PUBLIC_URL + props.product.img} alt={props.product.name} className="imgProduct" /></a>
      <h1 className="titleProduct"><a href={"/products/" + props.product.id}>{props.product.name}</a></h1>
      <p className="priceProduct">${props.product.price}</p>
      <button className="addToCartProduct">Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;