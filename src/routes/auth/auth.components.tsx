import SignUpForm from '../../components/signup-form/signup.component';
import SignInForm from '../../components/signin-form/signin.component';

import './auth.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
