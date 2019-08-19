import * as types from './actionTypes';

export const itemsUpdated = data => ({
  type: types.ITEMS_UPDATED,
  data,
});

export const toggle = () => ({
  type: types.TOGGLE_VISIBILITY,
});

export const loadItemsFromStorage = () => {
  return dispatch => {
    let items = localStorage.getItem('@cart:items');

    if (items) {
      try {
        items = JSON.parse(items);
        return dispatch(itemsUpdated(items));
      } catch (e) {
        console.warn('Unable to recover items from LocalStorage');
      }
    }
  };
};

export const addItem = item => {
  return (dispatch, getState) => {
    const items = (getState()).cart.items;
    const index = items.findIndex(i => i.name === item.name);
    if (index > -1) {
      items[index] = {
        ...items[index],
        qty: items[index].qty + 1,
        subTotal: items[index].subTotal + items[index].price,
      };
    } else {
      items.push({
        ...item,
        qty: 1,
        subTotal: item.price,
      });
    }

    localStorage.setItem('@cart:items', JSON.stringify(items));

    return dispatch(itemsUpdated([...items]));
  };
};

export const removeItem = item => {
  return (dispatch, getState) => {
    let items = (getState()).cart.items;
    const index = items.findIndex(i => i.name === item.name);

    if (index > -1) {
      items = items.filter((el, i) => i !== index);
      localStorage.setItem('@cart:items', JSON.stringify(items));
      return dispatch(itemsUpdated([...items]));
    }
  };
};
