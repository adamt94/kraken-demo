import Product from '@/features/product/Product'
import '@/styles/globals.css'

type ProductPageProps = {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <main>
      <Product id={id} />
    </main>
  )
}
