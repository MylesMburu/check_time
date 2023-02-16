import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://check-time.vercel.app/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'apiKey': 'a9ed9e6612622722c4a79220b8b770120f87ab4b0398cbbe2041a02d577aa21c',
  },
});

export default instance;
