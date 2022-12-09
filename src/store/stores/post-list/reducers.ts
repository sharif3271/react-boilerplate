import { THome } from '../../types';

const initialState = {
  list: [],
  listError: false,
  listLoading: true,
};

export const HomeStore = (state = initialState, action: any) => {
  switch (action.type) {
    case THome.THOME_POST_LIST:
      return {
        ...state,
        list: action.payload
      };
    case THome.THOME_POST_LIST_ERROR:
      return {
        ...state,
        listError: action.payload
      };
    case THome.THOME_POST_LIST_LOADING:
      return {
        ...state,
        listLoading: action.payload
      };
    default:
      return state;
  }
};
