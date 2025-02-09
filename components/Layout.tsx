import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <main>
      {children}
    </main>
    {/* 하단 Footer */}
    <Footer />
  </div>
);

export default Layout;