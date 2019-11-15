const { petsDb, petsQueue } = require('./pets-db');

const PetsService = {
  buildQueue() {
    petsDb.sort((a, b) => (a.timeEntered < b.timeEntered) ? -1 : 1);
    for(let pet of petsDb) {
      petsQueue.enqueue(pet);
    }
    // petsQueue.display();
  },
  getAllPets() {
    let firstPet = petsQueue.peek();
    let petsDbMinusFirst = petsDb.filter(pet => pet.id !== firstPet.id);
    return petsDbMinusFirst;
  },
  getCurrentPet() {
    return petsQueue.peek();
  },
  adopt() {
    let pet = petsQueue.dequeue();
    pet.available = false;
    // return pet;
  }
};

module.exports = PetsService;
