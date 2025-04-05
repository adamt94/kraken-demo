
import { ReactNode } from 'react';


import '@/styles/globals.css';

export const metadata = {
  title: 'Bulletproof React',
  description: 'Showcasing Best Practices For Building React Applications',
};

const ProductLayout = async ({ children }: { children: ReactNode }) => {

  return (
    <div className="p-2">
      {children}
    </div>
  );
};

export default ProductLayout;
