const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://backend.chersmeatgram.com/', // Change this to your backend server URL
      changeOrigin: true,
    })
  );
};
