
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
};

const PageLayout = ({ children, showContact = true }: PageLayoutProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="min-h-screen bg-white w-full">
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <Navbar />
      </header>
      <div className="relative">
        {children}
      </div>
      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
