import { faker } from '@faker-js/faker';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// initialization

// eslint-disable-next-line
process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
// eslint-disable-next-line
process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';

initializeApp({ projectId: 'demo-playground' });
const firestore = getFirestore();
const auth = getAuth();

const users = [
  {
    displayName: 'Paul McCartney',
    email: 'paul@beatles.com',
    password: 'password',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/PaulMcCartney60s.jpg',
    emailVerified: true,
  },
  {
    displayName: 'John Lennon',
    email: 'john@beatles.com',
    password: 'password',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/7/79/John_Lennon_NY_1964.png',
    emailVerified: true,
  },
  {
    displayName: 'George Harrison',
    email: 'george@beatles.com',
    password: 'password',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/George_Harrison_NY_1964.png',
    emailVerified: false,
  },
  {
    displayName: 'Ringo Starr',
    email: 'ringo@beatles.com',
    password: 'password',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Ringo_Starr_NY_1964.png',
    emailVerified: false,
  },
];

function seedUsers() {
  users.forEach((user) => {
    auth.createUser(user);
  });
}

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
seedUsers();
