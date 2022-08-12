import { Route, Routes } from 'react-router-dom';

import Authentication from './routes/auth/Auth';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home';
import Navigation from './routes/nav/navigation';
import Shop from './routes/shop/Shop';

const App = () => {
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
