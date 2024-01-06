import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

export const firebaseApp = initializeApp({
  projectId: 'demo-playground',
  appId: 'demo-playground',
  apiKey: 'PLAYGROUND_FAKE_API_KEY',
});

const auth = getAuth();
connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });

const db = getFirestore();
connectFirestoreEmulator(db, '127.0.0.1', 8080);

const functions = getFunctions();
connectFunctionsEmulator(functions, '127.0.0.1', 5001);
