let { petsDb, petsQueue } = require('./pets-db');
const { _petsDb_Backup } = require('./pets-db');

const PetsService = {
  buildQueue() {
    petsDb = JSON.parse(JSON.stringify(_petsDb_Backup));
    petsDb.sort((a, b) => (a.timeEntered < b.timeEntered ? -1 : 1));
    petsQueue.flush();
    for (let pet of petsDb) {
      petsQueue.enqueue(pet);
    }
    // petsQueue.display();
  },
  getAllPets() {
    return petsDb;
  },
  getCurrentPet() {
    let currentPet = petsQueue.peek();
    while(currentPet && !currentPet.data.available) {
      currentPet = currentPet.next;
    }
    return currentPet ? currentPet.data : null;
  },
  adopt() {
    let pet = petsQueue.dequeue();
    pet.available = false;
    // return pet;
  },
};

module.exports = PetsService;
