import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import TRANS from '../../translations/en.json';

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  let signin;
  try {
    const auth = getAuth();
    signin = await signInWithEmailAndPassword(auth, email, password);
    console.log(signin);
    const signedIn = TRANS.auth.loginSuccess;
    alert(`${signedIn}`);
  } catch (e) {
    console.error(e);
    const errorMessage = TRANS.auth.loginFail;
    alert(`${errorMessage}`);
  }
  return signin;
};
