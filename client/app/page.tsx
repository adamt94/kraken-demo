import { Button } from '@/components/Button/Button'
import '@/styles/globals.css'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <div className='home'>
        <figure>
          <img
            src='https://static.octopuscdn.com/logos/logo.svg'
            alt='Octopus Energy Logo'
          />
        </figure>
        <h1 className='text-primary'>
          Welcome to the Octopus Energy Frontend code test!
        </h1>
        <p>
          Get started by visiting the <code>/product/1</code> URL and editing{' '}
          <code>client/pages/product.js</code>
        </p>
        <Button asChild>
          <Link href='/product/1'>Go to Product </Link>
        </Button>
      </div>
    </main>
  )
}
