import { combineReducers } from 'redux';
import { HomeStore } from 'store/stores/post-list';

export const reducers = combineReducers({
  HomeStore
});

export type TStore = ReturnType<typeof reducers>;