import { useContext } from 'react';

import CatPreview from '../../components/cat-preview/CatPreview';
import { CategoriesContext } from '../../contexts/categories.context';
import { ICategory, IRawCategoryMap, IRawCatMapKey } from '../../dto/firebase';

export default function CategoriesPreview() {
  const cats: IRawCategoryMap = useContext<IRawCategoryMap>(CategoriesContext);

  return (
    <>
      {Object.keys(cats).map((title: string) => {
        const products: ICategory[] = cats[title as IRawCatMapKey];
        return <CatPreview key={title} title={title} products={products} />;
      })}
    </>
  );
}
