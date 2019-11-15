const { petsDb, petsQueue } = require('./pets-db');

const PetsService = {
  buildQueue() {
    petsDb.sort((a, b) => (a.timeEntered < b.timeEntered ? -1 : 1));
    for (let pet of petsDb) {
      petsQueue.enqueue(pet);
    }
    // petsQueue.display();
  },
  getAllPets() {
    return petsDb;
  },
  getCurrentPet() {
    return petsQueue.peek();
  },
  adopt() {
    let pet = petsQueue.dequeue();
    pet.available = false;
    // return pet;
  },
};

module.exports = PetsService;
