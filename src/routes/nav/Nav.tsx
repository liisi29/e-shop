import './nav.scss';

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../firebase/auth/signout';
import { CurrentUser } from '../../store/user/dto';
import { selectCurrentUser } from '../../store/user/user.selector';
import TRANS from '../../translations/en.json';

export default function Navigation() {
  const currentUser: CurrentUser = useSelector(selectCurrentUser);
  console.log('currentUser', currentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            {TRANS.nav.shop}
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {TRANS.nav.signOut}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              {TRANS.nav.signIn}
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
