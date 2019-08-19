import * as types from './actionTypes';

const initialState = {
  list: [],
  order: ''
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_LOADED:
      return {
        ...state,
        list: action.data,
      };
    case types.SET_PRODUCTS_ORDER:
      return {
        ...state,
        order: action.data,
      };
    default:
      return state;
  }
}
