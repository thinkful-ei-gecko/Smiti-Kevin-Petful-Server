const app = require('../src/app');

describe('App Endpoints', () => {
  it('responds 200 and a cat JSON', () => {
    return supertest(app)
      .get('/api/cat')
      .expect(200, {
        imageURL:
          'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street',
      });
  });

  it('responds 200 and a dog JSON', () => {
    return supertest(app)
      .get('/api/dog')
      .expect(200, {
        imageURL:
          'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away',
      });
  });
});
