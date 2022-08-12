import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { userReducer } from './user/user.reducer';

const middleWare = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: middleWare,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
