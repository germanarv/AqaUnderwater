import React, { Component } from 'react';
import axios from 'axios';

import NavHeader from '../components/header/NavHeader.header';
import MainFooter from '../components/footer/MainFooter.footer';
import Register from '../components/account/Register.account';


class RegisterMain extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  }

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state;
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ firstName, lastName, email, password });
      axios.post('http://localhost:8000/register', body, config)
           .then(res => {
              console.log(res.data);
           })
           .catch(err => {
              console.log(err.message);
           })
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    const { firstName, lastName, email, password, password2 } = this.state;

    return (
      <>
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