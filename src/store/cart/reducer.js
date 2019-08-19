import * as types from './actionTypes';

const initialState = {
  items: [],
  visible: false,
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ITEMS_UPDATED:
      return {
        ...state,
        items: action.data,
      };
    case types.TOGGLE_VISIBILITY:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
}
