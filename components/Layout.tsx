import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <main>
      {children}
    </main>
    {/* 하단 Footer */}
    <Footer />
  </div>
);

export default Layout;