import './auth.scss';

import SignInForm from '../../components/signin-form/signin.component';
import SignUpForm from '../../components/signup-form/signup.component';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
