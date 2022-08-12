import { User } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const db = getFirestore();
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
