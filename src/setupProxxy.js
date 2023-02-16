import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.africastalking.com/version1/airtime/send',
      changeOrigin: true,
    })
  );
};
