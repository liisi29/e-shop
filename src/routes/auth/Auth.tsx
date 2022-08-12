import './auth.scss';

import SignInForm from '../../components/auth/signin/SignIn';
import SignUpForm from '../../components/auth/signup/SignUp';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
