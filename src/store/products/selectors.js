import { createSelector } from 'reselect';

export const getProducts = state => state.products.list;
export const getProductsOrder = state => state.products.order;

export const getOrderedProductList = createSelector(
  getProductsOrder,
  getProducts,
  (order, list) => {
    switch (order) {
      case 'BY_PRICE_HIGH':
        return [...list.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        })];
      case 'BY_PRICE_LOW':
        return [...list.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        })];
      default:
        return list;
    }
  }
);
