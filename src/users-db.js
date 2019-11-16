const Queue = require('./queue');

let usersDb = [];
let usersQueue = new Queue();

module.exports = { usersDb, usersQueue };
