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
        Object.keys(cats).map((objKey: string) => {
          const cat: ICategory = cats[objKey as IRawCatMapKey];
          return (
            <CatPreview key={cat.id} title={cat.title} products={cat.items} />
          );
        })}
    </>
  );
}
