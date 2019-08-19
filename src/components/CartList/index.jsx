import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Item } from './style';
import Button from '../Button';

import * as CartActions from '../../store/cart/actions';
import * as CartSelectors from '../../store/cart/selectors';
import { moneyFormatter } from '../../utils/formatters';

const CartList = () => {
  const dispatch = useDispatch();
  const list = useSelector(CartSelectors.getCartItems);

  return (
    <List>
      {list &&
      list.map((item, index) => (
        <Item key={index}>
          <h3>{item.name}</h3>
          <span>Price: {moneyFormatter(item.price)}</span>
          <span>Quantity: {item.qty}</span>
          <span>Total: {moneyFormatter(item.subTotal)}</span>
          <Button onClick={() => dispatch(CartActions.removeItem(item))}>
            Remove
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default CartList;
