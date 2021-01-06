import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import SingleProductCard from '../components/product/SingleProductCard.product';


class SingleProduct extends Component {
  render() {
    return (
      <>
        <NavHeader />
        {/* <h2>{this.props.match.params.id}</h2> */}
        <SingleProductCard />
        <MainFooter />
      </>
    );
  }
}

export default SingleProduct;