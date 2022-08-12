import { createContext, useState, useEffect, ProviderProps } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';
import { IRawCategoryMap } from '../dto/firebase';

export const CategoriesContext = createContext<IRawCategoryMap>({
  hats: [],
  jackets: [],
  mens: [],
  sneakers: [],
  womens: [],
});

export const CategoriesProvider = ({
  children,
}: ProviderProps<IRawCategoryMap>) => {
  const [categoriesMap, setCategoriesMap] = useState<IRawCategoryMap>({
    hats: [],
    jackets: [],
    mens: [],
    sneakers: [],
    womens: [],
  });

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap: IRawCategoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value: IRawCategoryMap = categoriesMap;
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
