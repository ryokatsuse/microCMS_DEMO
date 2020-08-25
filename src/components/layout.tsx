import React from 'react';
import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  meta?: React.ReactNode;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      {meta ? meta : <Meta />}
      <Header></Header>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;