import { initializeApp } from 'firebase/app';
import { getFirestore, doc, collection, writeBatch } from 'firebase/firestore';
import {data} from './shop-data.mjs';

const firebaseConfig = {
  apiKey: 'AIzaSyDj0aR9Qzm2d3slm6QM4pj6pfnbsz-ZfD0',
  authDomain: 'e-shop-db-640cb.firebaseapp.com',
  projectId: 'e-shop-db-640cb',
  storageBucket: 'e-shop-db-640cb.appspot.com',
  messagingSenderId: '135503183111',
  appId: '1:135503183111:web:b9caa85701cba1e8ee19a2',
};


// Initialize Firebase
// CRUD happens inside it
function initFBAndAddCollection() {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const addCollectionAndDocumentsToFB = async ({
    collectionKey,
    objectsToAdd,
  }) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
  
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };
  
  addCollectionAndDocumentsToFB({
    collectionKey: 'collections',
    objectsToAdd: data,
  });
}


/*
initFBAndAddCollection()
*/
