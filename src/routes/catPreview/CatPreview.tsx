import { useSelector } from 'react-redux';

import CatPreview from '../../components/cat-preview/CatPreview';
import { ICategory, IRawCatMapKey } from '../../dto/firebase';
import { selectCatMap } from '../../store/cat/cat.selector';
import { CategoryMap } from '../../store/cat/dto';

export default function CategoriesPreview() {
  const cats: CategoryMap = useSelector(selectCatMap);

  return (
    <>
      {cats &&
        Object.keys(cats).map((title: string) => {
          const products: ICategory[] = cats[title as IRawCatMapKey];
          return <CatPreview key={title} title={title} products={products} />;
        })}
    </>
  );
}
