const express = require('express');
const cors = require('cors');
const app = express();
const { CLIENT_ORIGIN } = require('./config');
const PetsService = require('./pets-service');
const UsersService = require('./users-service');

/*******************************************************************
  MIDDLEWARE
*******************************************************************/
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

PetsService.buildQueue();
UsersService.buildQueue();

/*******************************************************************
  ENDPOINTS
*******************************************************************/
app.get('/api/pets', (req, res, next) => {
  let allPets = PetsService.getAllPets();
  return res.json(allPets);
});

app.get('/api/currentpet', (req, res, next) => {
  let currentPet = PetsService.getCurrentPet();
  return res.json(currentPet);
});

app.delete('/api/adopt', (req, res, next) => {
  PetsService.adopt();
  return res.status(204).end();
});

app.get('/api/users', (req, res, next) => {
  let usersinline = UsersService.getUsersInLine();
  return res.json(usersinline);
});

app.get('/api/currentuser', (req, res, next) => {
  let currentuser = UsersService.getNextUser();
  return res.json(currentuser);
});

app.patch('/api/server', (req, res, next) => {
  PetsService.buildQueue();
  UsersService.buildQueue();
  return res.json('server restarted');
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
