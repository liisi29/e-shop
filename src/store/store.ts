import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { userReducer } from './user/user.reducer';
import { catReducer } from './cat/cat.reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    user: userReducer,
    cat: catReducer,
  },
  middleware,
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;

export default store;
