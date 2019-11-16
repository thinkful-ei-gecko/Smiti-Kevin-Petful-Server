let { usersDb, usersQueue } = require('./users-db');
const faker = require('faker');

const UsersService = {
  buildQueue() {
    usersDb = [];
    for (let i = 0; i < 10; i++) {
      usersDb.push({
        name: faker.name.findName(),
        id: faker.random.uuid(),
        timeEntered: Math.random(),
      });
    }
    usersDb.sort((a, b) => (a.timeEntered < b.timeEntered ? -1 : 1));
    usersQueue.flush();
    for (let user of usersDb) {
      usersQueue.enqueue(user);
    }
    usersQueue.enqueue({
      name: 'YOU',
    });
    // usersQueue.display();
  },
  getUsersInLine() {
    let currUsersInLine = usersQueue.toArray();
    return currUsersInLine ? currUsersInLine.map((user) => user.data.name) : null;
  },
  getNextUser() {
    let user = usersQueue.dequeue();
    if (user) {
      return user.name;
    }
    return null;
  },
};

module.exports = UsersService;
