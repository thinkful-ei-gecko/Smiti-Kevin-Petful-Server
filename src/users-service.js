const { usersDb, usersQueue } = require('./users-db');
const faker = require('faker');

const UsersService = {
  buildQueue() {
    for (let i = 0; i < 10; i++) {
      usersDb.push({
        name: faker.name.findName(),
        id: faker.random.uuid(),
        timeEntered: Math.random(),
      });
    }
    let usersDbSorted = usersDb.slice(0);
    usersDbSorted.sort((a, b) => (a.timeEntered < b.timeEntered) ? -1 : 1);
    for (let user of usersDbSorted) {
      usersQueue.enqueue(user);
    }
    // usersQueue.display();
  },
};

UsersService.buildQueue();

module.exports = UsersService;
