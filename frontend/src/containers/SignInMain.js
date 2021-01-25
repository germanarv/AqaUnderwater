import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import SignIn from '../components/account/SignIn.account';
import AccountService from '../services/account.service';


class SignInMain extends Component {

  state = {
    login: {
      email: '',
      password: ''
    },
    user: {
      token: '',
      firstName: '',
      role: ''
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state.login;
    AccountService.login({ email, password })
                  .then(res => {
                    const { token, user } = res.data;
                    this.setState({
                      user: {
                        token,
                        firstName: user.firstName,
                        role: user.role
                      }
                    });
                  })
                  .catch(err => {
                    console.log(err.message);
                  })
  }

  onChange = e => this.setState(prevState => ({
    login: {
      ...prevState.login,
      [e.target.name]: e.target.value 
    }}));

  render() {

    const { email, password } = this.state.login;
    const { token } = this.state.user;

    return (
      <>
        {token &&
          <Redirect to="/" />
        }
        <NavHeader />
        <SignIn 
          email={email}
          password={password}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
        <MainFooter />
      </>
    );
  }
}

export default SignInMain;