import client from '@/lib/apollo-client';
import '@/styles/globals.css';
import { GET_PRODUCTS } from '../api/get-products';

export default async function Product() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
    fetchPolicy: 'no-cache',
  });

  return (
    <p>product</p>
  );
}
