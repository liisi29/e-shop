import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export function signInAuthUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  const auth = getAuth();
  const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  console.log('signInWithGooglePopup', signInWithGooglePopup);
}
