const Queue = require('./queue');

const usersDb = [];
const usersQueue = new Queue();

module.exports = { usersDb, usersQueue };
