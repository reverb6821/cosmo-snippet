import axios from 'axios';

const instance = axios.create({
  baseURL: 'insert here url' ,
  headers: {
    'Content-type': 'application/json',
  }
});

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('user');
  if (token) {
    const parsedToken = JSON.parse(token);
    config.headers['x-access-token'] = parsedToken.accessToken;
  }
  return config;
});

export default instance