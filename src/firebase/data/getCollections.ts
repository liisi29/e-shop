import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { ICategory } from '../../dto/firebase';

export const getCategoriesAndDocuments2 = async () => {
  const db = getFirestore();
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export function getCategoriesAndDocuments(): Promise<ICategory[]> {
  const db = getFirestore();
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  return getDocs(q).then((querySnapshot) => {
    console.log('querySnapshot', querySnapshot);
    return querySnapshot.docs.map(
      (docSnapshot) => docSnapshot.data() as ICategory
    );
  });
}
