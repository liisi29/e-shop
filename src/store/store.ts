import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWare = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleWare,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
