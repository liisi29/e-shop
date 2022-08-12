import { getAuth, signOut } from 'firebase/auth';
import TRANS from '../../translations/en.json';

export const signOutUser = async () => {
  let signout;
  try {
    const auth = getAuth();
    signout = await signOut(auth);
    console.log(signout);
    const success = TRANS.auth.logoutSuccess;
    alert(`${success}`);
  } catch (e) {
    console.error(e);
    const fail = TRANS.auth.logoutFail;
    alert(`${fail}`);
  }
  return signout;
};
