import { UserCredential } from 'firebase/auth';
import { useState } from 'react';

import TRANS from '../../../translations/en.json';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../utils/firebase.utils';
import Button from '../../form/button/button.component';
import FormInput from '../../form/form-input/form-input.component';

const defaultFormFields: IDefaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpForm() {
  const [formFields, setFormFields] =
    useState<IDefaultFormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const alertTxt = TRANS.errors.pwNomatch;
      alert({ alertTxt });
      return;
    }

    try {
      const credientials: UserCredential | undefined =
        await createAuthUserWithEmailAndPassword(email, password);
      const user = credientials?.user;
      if (user) {
        await createUserDocumentFromAuth(user);
        resetFormFields();
      }
    } catch (error: any) {
      const alertTxt = TRANS.errors.userCreationFailed;
      if (error.code === 'auth/email-already-in-use') {
        alert({ alertTxt });
      } else {
        console.log(alertTxt, error);
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>{TRANS.auth.dontHaveAccount}</h2>
      <span>{TRANS.auth.signinEmailAndPw}</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={TRANS.auth.displayName}
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label={TRANS.auth.confirmPassword}
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit' buttonType='inverted'>
          {TRANS.auth.signUp}
        </Button>
      </form>
    </div>
  );
}

interface IDefaultFormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
