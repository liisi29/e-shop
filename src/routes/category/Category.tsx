import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';

import { CategoriesContext } from '../../contexts/categories.context';
import { IRawCategoryMap, IRawCatMapKey } from '../../dto/firebase';

import './category.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap: IRawCategoryMap = useContext(CategoriesContext);
  const [products, setProducts] = useState(
    categoriesMap[category as IRawCatMapKey]
  );

  useEffect(() => {
    setProducts(categoriesMap[category as IRawCatMapKey]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category?.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
