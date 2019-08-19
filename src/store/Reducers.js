import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loading from './loading/reducer';
import products from './products/reducer';
import cart from './cart/reducer';

export default history =>
  combineReducers({
    loading,
    products,
    cart,
    router: connectRouter(history),
  });
