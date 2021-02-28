import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainHome from '../components/home/MainHome.home';
import MainFooter from '../components/footer/MainFooter.footer';


class HomeDashboard extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <MainHome />
        <MainFooter />
      </>
    );
  }
}

export default HomeDashboard;