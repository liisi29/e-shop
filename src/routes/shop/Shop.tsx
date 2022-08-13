import './shop.scss';

import { Route, Routes } from 'react-router-dom';

import Category from '../category/Category';
import CategoriesPreview from '../catPreview/CatPreview';
import { fetchCategoriesStart } from '../../store/cat/cat.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
