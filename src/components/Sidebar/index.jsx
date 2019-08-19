import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartList from '../CartList';
import SidebarStyle from './style';

import * as CartSelectors from '../../store/cart/selectors';
import * as CartActions from '../../store/cart/actions';
import { moneyFormatter } from '../../utils/formatters';

const Sidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(CartSelectors.getCartVisibility);
  const total = useSelector(CartSelectors.getTotal);

  return (
    <SidebarStyle show={show}>
      <button onClick={() => dispatch(CartActions.toggle())}>Close</button>
      <CartList/>
      <h3>Cart Total: {moneyFormatter(total)}</h3>

      <div
        className={'backdrop'}
        onClick={() => dispatch(CartActions.toggle())}
      />
    </SidebarStyle>
  );
};

export default Sidebar;
