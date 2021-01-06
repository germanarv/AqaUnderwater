import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import AllProducts from '../components/product/AllProducts.product';

const productsData = require("../data_products.json");


class ProductsDashboard extends Component {

  state = {
    products: {}
  }

  componentDidMount() {
    this.setState({
      products: productsData
    })
  }

  render() {

    return (
      <>
        <NavHeader />
        <AllProducts productsData={this.state.products} />
        <MainFooter />
      </>
    );
  }
}

export default ProductsDashboard;