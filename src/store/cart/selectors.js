import { createSelector } from 'reselect';

export const getCartItems = state => state.cart.items;
export const getCartVisibility = state => state.cart.visible;

export const getTotal = createSelector(
  getCartItems,
  items => items.reduce((total, item) => total + item.subTotal, 0)
);

export const getCount = createSelector(
  getCartItems,
  items => items.reduce((count, item) => count + item.qty, 0)
);
