import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-previwe.component';
import Category from '../category/category.component';
import { feachCategoriesAsync } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
