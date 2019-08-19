import React from 'react';

import GlobalStyle from '../styleGlobal';

import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';

const DefaultLayout = Content => {
  return () => (
    <>
      <GlobalStyle />
      <Loader />
      <Header />
      <Sidebar />

      <Content />
    </>
  );
};

export default DefaultLayout;
