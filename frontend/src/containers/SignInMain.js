import React, { Component } from 'react';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import SignIn from '../components/account/SignIn.account';
import axios from 'axios';


class SignInMain extends Component {

  state = {
    email: '',
    password: ''
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ email, password });
    axios.post('http://localhost:8000/login', body, config)
         .then(res => {
           console.log(res.data);
         })
         .catch(err => {
           console.log(err.message);
         })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    const { email, password } = this.state;

    return (
      <>
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