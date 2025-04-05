
import { ReactNode } from 'react';


import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar/NavBar';
import { Footer } from '@/components/Footer/Footer';

export const metadata = {
  title: 'Bulletproof React',
  description: 'Showcasing Best Practices For Building React Applications',
};

const ProductLayout = async ({ children }: { children: ReactNode }) => {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="py-6">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ProductLayout;
