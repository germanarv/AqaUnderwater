import React from 'react';

import FiltersProduct from './Filters.product';
import ProductCard from './ProductCard.product';
import '../styles/ProductCardStyle.product.css';


function AllProducts(props) {
  return (
    <main>
      <div>
        <FiltersProduct />
      </div>
      <div className="ProductDashboard">
        {props.productsData.products &&
          props.productsData.products.map((product, i) => {
            return (
              <ProductCard key={product.id} product={product} />
            );
          })
        }
      </div>
    </main>
  );
}

export default AllProducts;