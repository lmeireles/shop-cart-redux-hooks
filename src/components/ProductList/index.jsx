import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Product } from './style';
import Button from '../Button';

import * as CartActions from '../../store/cart/actions';
import * as ProductSelectors from '../../store/products/selectors';
import { moneyFormatter } from '../../utils/formatters';

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector(ProductSelectors.getOrderedProductList);

  return (
    <List>
      {list &&
      list.map((item, index) => (
        <Product key={index}>
          <h3>{item.name}</h3>
          <span>Price: {moneyFormatter(item.price)}</span>
          <Button onClick={() => dispatch(CartActions.addItem(item))}>
            Add to Cart
          </Button>
        </Product>
      ))}
    </List>
  );
};

export default ProductList;
