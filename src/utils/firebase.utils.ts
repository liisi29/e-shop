import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// This is ok to be public
const firebaseConfig = {
  apiKey: 'AIzaSyDj0aR9Qzm2d3slm6QM4pj6pfnbsz-ZfD0',
  authDomain: 'e-shop-db-640cb.firebaseapp.com',
  projectId: 'e-shop-db-640cb',
  storageBucket: 'e-shop-db-640cb.appspot.com',
  messagingSenderId: '135503183111',
  appId: '1:135503183111:web:b9caa85701cba1e8ee19a2',
};

// Initialize Firebase
// CRUD happens inside it
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log('auth', userAuth);
  console.log('doc', userDocRef);
  console.log('ss', userSnapshot);
  const weHaveAUser = userSnapshot.exists();
  if (!weHaveAUser) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
      alert('User created!');
    } catch (e) {
      console.error('Error creating a user', e);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
