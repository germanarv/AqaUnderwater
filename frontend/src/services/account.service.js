import axios from 'axios';

export default class AccountService {

  static register(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { firstName, lastName, email, password } = userData;
    const body = JSON.stringify({ firstName, lastName, email, password });
    return axios.post('http://localhost:8000/register', body, config);
  };


  static login(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { email, password } = userData;
    const body = JSON.stringify({ email, password });
    return axios.post('http://localhost:8000/login', body, config);
  };
};