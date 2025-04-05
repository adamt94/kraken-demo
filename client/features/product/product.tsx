import client from '@/lib/apollo-client';
import '@/styles/globals.css';
import { GET_PRODUCT, ProductType } from '../api/products';
import { ProductCard } from './components/ProductCard/ProductCard';


type ProductProps = {
  id: string;
};


export default async function Product({ id }: ProductProps) {

  const { data }: { data: { Product: ProductType } } = await client.query({
    query: GET_PRODUCT,
    variables: { id },
  });

  const { Product } = data;

  return (
    <ProductCard title={Product.name} subtitle={Product.power} image={Product.img_url} price={Product.price} />
  );
}
