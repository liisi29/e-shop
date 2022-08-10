import { UserCredential } from 'firebase/auth';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response: UserCredential = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
    </div>
  );
};

export default SignIn;
