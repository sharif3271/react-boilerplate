
export const THome = {
  THOME_POST_LIST: '[THome] THOME_POST_LIST',
  THOME_POST_LIST_LOADING: '[THome] THOME_POST_LIST_LOADING',
  THOME_POST_LIST_ERROR: '[THome] THOME_POST_LIST_ERROR',
};





/**
 * There is an important thing that the action types must be unique.
 * the below variable guarantees the action name be unique.
 */
export const AllActionTypes = {
  ...THome,
};