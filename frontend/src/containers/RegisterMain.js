import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import Register from '../components/account/Register.account';
import AccountService from '../services/account.service';


class RegisterMain extends Component {

  state = {
    register: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    },
    user: {
      token: '',
      firstName: '',
      role: ''
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state.register;
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      AccountService.register({ firstName, lastName, email, password })
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
    }
  }

  onChange = e => this.setState(prevState => ({ 
    register: { 
      ...prevState.register,
      [e.target.name]: e.target.value 
    }}));

  render() {

    const { firstName, lastName, email, password, password2 } = this.state.register;

    const { token } = this.state.user;

    return (
      <>
        {token && 
          <Redirect to="/" />
        }
        <NavHeader />
        <Register 
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          password2={password2}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
        <MainFooter />
      </>
    );
  }
}

export default RegisterMain;