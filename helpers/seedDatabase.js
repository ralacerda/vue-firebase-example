import { faker } from '@faker-js/faker';
import { auth, firestore } from './initialize.js';
import users from './users.js';

function seedUsers() {
  users.forEach((user) => {
    auth.createUser(user);
  });
}

seedUsers();
function createFakeDoc() {
  const numberOfFounders = faker.number.int({ min: 1, max: 5 });

  return {
    name: faker.company.name(),
    email: faker.company.catchPhrase(),
    avaliation: faker.finance.amount({ min: 10000, max: 1000000000, symbol: '$' }),
    stockPrice: faker.number.float({ min: 0, max: 500 }),
    employees: faker.number.int({ min: 5, max: 500 }),
    color: faker.color.rgb(),
    foundDate: faker.date.past({ years: 60 }),
    evil: faker.datatype.boolean(0.2),
    description: faker.lorem.paragraphs(3),
    numberOfFounders,
    founders: [...Array(numberOfFounders)].map(() => faker.person.fullName()),
  };
}

function seedData() {
  try {
    const eventsRef = firestore.collection('companies');
    [...Array(50)].forEach(() => eventsRef.add(createFakeDoc()));
  } catch (error) {
    console.log(error, 'database seed failed');
  }
}

seedData();
