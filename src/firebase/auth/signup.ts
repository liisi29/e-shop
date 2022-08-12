import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import TRANS from '../../translations/en.json';
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  let signup;
  try {
    const auth = getAuth();
    signup = await createUserWithEmailAndPassword(auth, email, password);
    console.log(signup);
    const success = TRANS.auth.signupSuccess;
    alert(`${success}`);
  } catch (e) {
    console.error(e);
    const fail = TRANS.auth.signupFail;
    alert(`${fail}`);
  }
  return signup;
};
