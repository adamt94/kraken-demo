import client from '@/lib/apollo-client'
import '@/styles/globals.css'
import { GET_PRODUCT, ProductType } from '../api/products'
import { ProductCard } from './components/ProductCard/ProductCard'
import { ProductDescription } from './components/ProductDescription/ProductDescription'
import { ProductSpec } from './components/ProductSpec/ProductSpec'
import { notFound } from 'next/navigation'

type ProductProps = {
  id: string
}

export default async function Product({ id }: ProductProps) {
  const { data }: { data: { Product: ProductType } } = await client.query({
    query: GET_PRODUCT,
    variables: { id },
  })

  const { Product } = data

  if (!Product) {
    notFound() // ✅ This triggers the 404 page
  }

  const specs = [
    { name: 'Brand', value: Product.brand },
    { name: 'Model Code', value: Product.model_code },
    { name: 'Colour', value: Product.colour },
    { name: 'Height', value: Product.height },
    { name: 'Width', value: Product.width },
    { name: 'Length', value: Product.length },
  ]

  return (
    <>
      <ProductCard
        id={Product.id}
        title={Product.name}
        subtitle={`${Product.power} // Packet of ${Product.quantity}`}
        image={Product.img_url}
        price={Product.price}
      />
      <ProductDescription description={Product.description} />
      <ProductSpec data={specs} />
    </>
  )
}
