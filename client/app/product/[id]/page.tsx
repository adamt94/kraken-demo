import Product from '@/features/product/Product';
import '@/styles/globals.css';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  return (
    <main>
      <Product id={id} />
    </main>
  );
}
