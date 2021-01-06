import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import Register from '../components/account/Register.account';


class RegisterMain extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <Register />
        <MainFooter />
      </>
    );
  }
}

export default RegisterMain;