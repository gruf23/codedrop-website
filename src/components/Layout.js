import React from 'react';
import Index from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <>
      <Index/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
