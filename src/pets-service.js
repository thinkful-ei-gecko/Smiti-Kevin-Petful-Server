const { petsDb, petsQueue } = require('./pets-db');

const PetsService = {
  buildQueue() {
    let petsDbSorted = petsDb.slice(0);
    petsDbSorted.sort((a, b) => a.timeEntered < b.timeEntered);
    for(let pet of petsDbSorted) {
      petsQueue.enqueue(pet);
    }
    // petsQueue.display();
  },
  adopt(id) {
    // let pet = petsDb.find(pet => pet.id === id);
    let pet = petsQueue.dequeue();
    pet.available = false;
    // return pet;
  }
};

module.exports = PetsService;
