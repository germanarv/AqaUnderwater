import React, { Component } from 'react';
import axios from 'axios';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import SingleProductCard from '../components/product/SingleProductCard.product';


class SingleProduct extends Component {

  state = {
    product: {}
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:8000/products/${params.prodID}`)
          .then(res => {
            this.setState({
              product: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
  }

  render() {
    return (
      <>
        <NavHeader />
        <SingleProductCard product={this.state.product} />
        <MainFooter />
      </>
    );
  }
}

export default SingleProduct;