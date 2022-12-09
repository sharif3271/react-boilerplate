import { createSelector } from '@reduxjs/toolkit';
import { TStore } from 'src/store/config/reducers';

export const selectHomeStore = createSelector(
    [(state: TStore) => state.HomeStore],
    (HomeStore => HomeStore)
);
export const selectPostList = createSelector(
    selectHomeStore,
    store => store.list
);
export const selectListHasError = createSelector(
    selectHomeStore,
    store => store.listError
);
export const selectListIsLoading = createSelector(
    selectHomeStore,
    store => store.listLoading
);