const express = require('express');
const cors = require('cors');
const app = express();
const { CLIENT_ORIGIN } = require('./config');

/*******************************************************************
  MIDDLEWARE
*******************************************************************/
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

/*******************************************************************
  ENDPOINTS
*******************************************************************/
app.get('/api/cat', (req, res, next) => {
  return res.json();
});

/*******************************************************************
  ERROR HANDLING
*******************************************************************/
// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

/*******************************************************************
  EXPORTS
*******************************************************************/
module.exports = app;