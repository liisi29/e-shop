import './shop.scss';

import { Route, Routes } from 'react-router-dom';

import Category from '../category/Category';
import CatPreview from '../../components/cat-preview/CatPreview';

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CatPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
