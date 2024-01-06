import { faker } from '@faker-js/faker';
import { auth, firestore } from './initialize.js';
import users from './users.js';

function seedUsers() {
  users.forEach(async (user) => {
    try {
      await auth.createUser(user);
    } catch (error) {
      if (error instanceof Error) {
        console.warn('error creating user: ', error.message);
      } else {
        console.warn('error creating user: ', error);
      }
    }
  });
}

function createFakeDoc() {
  const numberOfFounders = faker.number.int({ min: 1, max: 5 });

  const randomHue = Math.floor(Math.random() * 360);
  const randomSaturation = Math.floor(Math.random() * (90 - 20 + 1)) + 20;
  const randomLightness = Math.floor(Math.random() * (80 - 60 + 1)) + 60;

  return {
    name: faker.company.name(),
    email: faker.company.catchPhrase(),
    evaluation: faker.number.float({ min: 0, max: 1_000_000 }),
    stockPrice: faker.finance.amount({ min: 0, max: 500, symbol: '$' }),
    employees: faker.number.int({ min: 1, max: 10_000 }),
    color: {
      hue: randomHue,
      saturation: randomSaturation,
      lightness: randomLightness,
    },
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
    [...Array(20)].forEach(() => eventsRef.add(createFakeDoc()));
  } catch (error) {
    console.log(error, 'database seed failed');
  }
}

seedData();
seedUsers();
