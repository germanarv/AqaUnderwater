import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';


class HomeDashboard extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <MainFooter />
      </>
    );
  }
}

export default HomeDashboard;