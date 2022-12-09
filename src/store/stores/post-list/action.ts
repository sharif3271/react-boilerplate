import { THome } from 'src/store/types';

export const setPostsList = (list) => ({
  type: THome.THOME_POST_LIST,
  payload: list,
});
export const setListError = (error: boolean) => ({
  type: THome.THOME_POST_LIST_ERROR,
  payload: error,
});
export const setListLoading = (loading: boolean) => ({
  type: THome.THOME_POST_LIST_LOADING,
  payload: loading,
});