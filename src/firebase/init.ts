// Initialize Firebase

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  NextOrObserver,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import firebaseConfig from './conf';

// CRUD happens inside it
const firebaseApp = initializeApp(firebaseConfig);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  const auth = getAuth();
  onAuthStateChanged(auth, callback);
};
