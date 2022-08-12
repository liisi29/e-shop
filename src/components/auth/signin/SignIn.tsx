import { useState } from 'react';

import TRANS from '../../../translations/en.json';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase.utils';
import Button from '../../form/button/Button';
import FormInput from '../../form/form-input/FormInput';

const defaultFormFields: IFormValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState<IFormValues>(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          const incorrect = TRANS.errors.incorrectPw;
          alert({ incorrect });
          break;
        case 'auth/user-not-found':
          const noUser = TRANS.errors.noUser;
          alert({ noUser });
          break;
        default:
          console.error(error);
      }
    }
  };

  const handleChange = (event: any) => {
    console.log('event', event);
    const { name, value } = event.target;

    setFormFields((prev: IFormValues) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>{TRANS.auth.alreadyHasAccount}</h2>
      <span>{TRANS.auth.signinEmailAndPw}</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={TRANS.auth.email}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label={TRANS.auth.password}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' buttonType='inverted'>
            {TRANS.auth.signIn}
          </Button>
          <Button buttonType='google' onClick={signInWithGoogle}>
            {TRANS.auth.signInGoogle}
          </Button>
        </div>
      </form>
    </div>
  );
}

interface IFormValues {
  email: string;
  password: string;
}
