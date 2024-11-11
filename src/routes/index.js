const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

//Testing connection
router.get('/', (req, res) => {
  res.send('Welcome to the API Gateway!');
});

// Proxy to Service 1
router.use('/service1', createProxyMiddleware({
  target: 'http://localhost:4001', // URL of Service 1
  changeOrigin: true,
}));

// Proxy to Service 2
router.use('/service2', createProxyMiddleware({
  target: 'http://localhost:4002', // URL of Service 2
  changeOrigin: true,
}));




module.exports = router;