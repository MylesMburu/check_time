import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://check-time.vercel.app',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'apiKey': '6f1e252ea22e185504ce3d23fc3c3a801a2459077a67420ea24d894b59447d7d',
  },
});

export default instance;
