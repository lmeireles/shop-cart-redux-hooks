import * as types from './actionTypes';
import { setLoading } from '../loading/actions';

export const listLoaded = data => ({
  type: types.LIST_LOADED,
  data,
  loading: false,
});

export const setProductsOrder = order => ({
  type: types.SET_PRODUCTS_ORDER,
  data: order,
});

export const getList = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    // fake service call
    const res = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: [
            {
              name: 'Sledgehammer',
              price: 125.75,
            },
            {
              name: 'Axe',
              price: 190.50,
            },
            {
              name: 'Bandsaw',
              price: 562.13,
            }, {
              name: 'Chisel',
              price: 12.9,
            },
            {
              name: 'Hacksaw',
              price: 18.45,
            },
          ],
        });
      }, 2000);
    });

    return dispatch(listLoaded(res.data));
  };
};
