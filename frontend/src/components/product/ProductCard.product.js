import React from 'react';

import '../styles/ProductCardStyle.product.css';


function ProductCard(props) {
  return (
    <div className="mainProdCard">
      <a href={"/products/" + props.product._id} className="imgLink"><img src={props.product.img} alt={props.product.name} className="imgProduct" /></a>
      <h1 className="titleProduct"><a href={"/products/" + props.product._id}>{props.product.name}</a></h1>
      <p className="priceProduct">${props.product.price}</p>
      <button className="addToCartProduct">Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;