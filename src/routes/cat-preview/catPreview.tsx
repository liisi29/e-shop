import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CatPreview from '../../components/cat-preview/CatPreview';
import { ICategory, IRawCategoryMap } from '../../dto/firebase';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext<IRawCategoryMap>(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products: ICategory[] = categoriesMap[title];
        return <CatPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
