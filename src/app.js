const express = require('express');
const rateLimit = require('express-rate-limit');
const routes = require('./routes');

const app = express();

// Rate limiter configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests, please try again later.',
  });

// Middleware
app.use(limiter);  // Parses JSON requests
app.use('/api', routes);  // Prefix all routes with '/api'

module.exports = app;