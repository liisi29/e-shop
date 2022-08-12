import './shop.scss';

import { Route, Routes } from 'react-router-dom';

import Category from '../category/Category';
import CategoriesPreview from '../catPreview/CatPreview';

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
