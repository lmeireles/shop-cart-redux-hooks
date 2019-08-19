import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderStyle from './style';

import logo from './img/logo.png';
import Button from '../Button';
import * as CartSelectors from '../../store/cart/selectors';
import * as CartActions from '../../store/cart/actions';

const Header = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(CartSelectors.getCount);

  return (
    <HeaderStyle>
      <img src={logo} alt="React" className="logo" />
      <Button
        className={'btn-cart'}
        onClick={() => dispatch(CartActions.toggle())}
      >
        Cart ({totalItems})
      </Button>
    </HeaderStyle>
  );
};

export default Header;
