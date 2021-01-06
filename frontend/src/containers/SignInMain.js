import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import SignIn from '../components/account/SignIn.account';


class SignInMain extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <SignIn />
        <MainFooter />
      </>
    );
  }
}

export default SignInMain;