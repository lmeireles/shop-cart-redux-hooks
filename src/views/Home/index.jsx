import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DefaultLayout from '../../layouts/default';
import ProductList from '../../components/ProductList';
import OrderSelect from '../../components/OrderSelect';

import * as ProductActions from '../../store/products/actions';
import * as CartActions from '../../store/cart/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductActions.getList());
    dispatch(CartActions.loadItemsFromStorage());
  }, []);

  return (
    <>
      <OrderSelect/>
      <ProductList/>
    </>
  );

};

export default DefaultLayout(Home);
