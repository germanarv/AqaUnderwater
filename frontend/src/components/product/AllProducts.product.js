import React from 'react';

import FiltersProduct from './Filters.product';
import ProductCard from './ProductCard.product';
import '../styles/ProductCardStyle.product.css';


function AllProducts({ productsData }) {

  productsData = Array.from(productsData);

  return (
    <main>
      <div>
        <FiltersProduct />
      </div>
      <div className="ProductDashboard">
        {productsData &&
          productsData.map((product, i) => {
            return (
              <ProductCard key={i} product={product} />
            );
          })
        }
      </div>
    </main>
  );
}

export default AllProducts;