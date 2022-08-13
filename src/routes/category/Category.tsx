import './category.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';
import { ICategory, IRawCatMapKey } from '../../dto/firebase';
import { selectCatMap } from '../../store/cat/cat.selector';
import { CategoryMap } from '../../store/cat/dto';

const Category = () => {
  const { category } = useParams();
  const catMap: CategoryMap = useSelector(selectCatMap);
  const [cat, setProducts] = useState<ICategory | undefined>(
    catMap ? catMap[category as IRawCatMapKey] : undefined
  );

  useEffect(() => {
    setProducts(catMap ? catMap[category as IRawCatMapKey] : undefined);
  }, [category, catMap]);

  return (
    <>
      <h2 className='category-title'>{cat?.title.toUpperCase()}</h2>
      <div className='category-container'>
        {cat &&
          cat.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
