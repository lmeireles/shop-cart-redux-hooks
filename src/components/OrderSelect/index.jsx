import React, {memo} from 'react';

import { useDispatch } from 'react-redux';
import SelectStyle from './style';

import * as ProductActions from '../../store/products/actions';

const OrderSelect = () => {
  const dispatch = useDispatch();

  return (
    <SelectStyle>
      <select
        onChange={e => {
          dispatch(ProductActions.setProductsOrder(e.target.value));
        }}
      >
        <option value="">Order...</option>
        <option value="BY_PRICE_HIGH">Highest Price</option>
        <option value="BY_PRICE_LOW">Lowest Price</option>
      </select>
    </SelectStyle>
  );
};

export default memo(OrderSelect, () => true);
