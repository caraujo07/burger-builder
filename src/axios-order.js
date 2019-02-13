import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bburger-builder.firebaseio.com/'
});

export default instance;