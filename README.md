# Petful Server
Smiti Shakya, Kevin Wei

API: https://kevin-smiti-petful-server.herokuapp.com/
Client Repo: https://github.com/thinkful-ei-gecko/Smiti-Kevin-Petful-Client

## User Stories
**Landing Page:**
  - [ ] It has a description of the adoption process.
  - [ ] It has a meaningful picture that matches its description.
  - [ ] It has a button to start the adoption process.

**Adoption Page:**
- Available Pets:
  - [ ] I should be able to only see the pet that is next in line to be adopted.
  - [ ] If there are other pets in line I could see them but I should not be able to adopt them other than the one next in line to be adopted.
- Place in Line:
  - [ ] I should be able to see my place in line and anyone else who is in the line before me.
  - [ ] I should not be able to start the adoption process unless it is my turn.
- Unavailable Pets:
  - [ ] I should be able to see the pets that have been adopted by other pet lovers and removed from the shelter.
  - [ ] I should no longer be able to adopt pets that have been removed.

## Endpoints
### ``` GET /api/pets```
Returns a JSON array of all pet objects in this format:
```javascript
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
  }
```
### ``` GET /api/currentpet```
Returns a JSON object of the pet in the above format.
### ``` DELETE /api/adopt```
Removes the first pet in the pets queue.
### ``` GET /api/users```
Returns a list of user names waiting in line.
### ``` GET /api/currentuser```
Returns a name of the first user in the user queue.
### ``` PATCH /api/server```
Resets the pets and users queue on the server

## Tech Used
- Node
- Express
- Heroku