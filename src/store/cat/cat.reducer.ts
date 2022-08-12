import { createAction, createReducer } from '@reduxjs/toolkit';
import { ActionWithPayload } from '../utils/reducers';
import { CatActionType, CategoryMap, ICatReducerState } from './dto';

export const initialState: ICatReducerState = {
  categoryMap: null,
};
export const catReducer = createReducer(initialState, (builder) => {
  // you need to ensure that you either mutate the state argument or return a new state, but not both.
  builder.addCase(
    createAction(CatActionType.SetCategoriesMap),
    (state: ICatReducerState, action: CatReducerAction) => {
      const { payload } = action;
      state.categoryMap = payload;
    }
  );
});
type CatReducerAction = ActionWithPayload<CatActionType, CategoryMap>;
