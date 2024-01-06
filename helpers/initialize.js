import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { env } from 'node:process';
// initialization

env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';

initializeApp({ projectId: 'demo-playground' });
export const firestore = getFirestore();
export const auth = getAuth();
