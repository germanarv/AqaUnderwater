import React, { Component } from 'react';
import axios from 'axios';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import AllProducts from '../components/product/AllProducts.product';

// const productsData = require("../data_products.json");


class ProductsDashboard extends Component {

  state = {
    products: {}
  }

  // componentDidMount() {
  //   this.setState({
  //     products: productsData
  //   })
  // }

  componentDidMount() {
    axios.get('http://localhost:8000/products')
          .then(res => {
            this.setState({
              products: res.data
            })
          })
          .catch(err => {
            console.log(err);
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