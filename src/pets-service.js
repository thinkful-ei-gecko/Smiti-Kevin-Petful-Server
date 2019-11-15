const { petsDb, petsQueue } = require('./pets-db');

const PetsService = {
  buildQueue() {
    let petsDbSorted = petsDb.slice(0);
    petsDbSorted.sort((a, b) => (a.timeEntered < b.timeEntered) ? -1 : 1);
    for(let pet of petsDbSorted) {
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
