import { User } from 'firebase/auth';
import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { createUserDocumentFromAuth } from '../firebase/data/getUsers';
import { onAuthStateChangedListener } from '../firebase/init';

interface IUserContex {
  currentUser: User | null | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

export const UserContext = createContext<IUserContex>({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
