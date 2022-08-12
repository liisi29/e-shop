import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createUserDocumentFromAuth } from './firebase/data/getUsers';
import { onAuthStateChangedListener } from './firebase/init';

import Authentication from './routes/auth/Auth';
import Checkout from './routes/checkout/Checkout';
import Home from './routes/home/Home';
import Navigation from './routes/nav/Nav';
import Shop from './routes/shop/Shop';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      // setCurrentUser creates an action
      // dispatch sends this action to reducer
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
