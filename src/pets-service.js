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
    
  }
};

module.exports = PetsService;
