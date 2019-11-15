const Queue = require('./queue');
const faker = require('faker');

const petsDb = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  },
  {
    imageURL:
      'https://placedog.net/500',
    imageDescription: faker.lorem.sentence(),
    name: faker.name.firstName(),
    sex: faker.lorem.word(),
    age: faker.random.number(),
    breed: faker.lorem.words(),
    story: faker.lorem.sentence(),
    id: faker.random.uuid(),
    timeEntered: Math.random(),
    available: true,
  }
];

const petsQueue = new Queue();

module.exports = { petsDb, petsQueue };
