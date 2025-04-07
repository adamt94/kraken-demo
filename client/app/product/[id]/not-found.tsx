import { Button } from '@/components/Button/Button'
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
        <p>product not found. Please check the URL and try again.</p>
        <Button asChild>
          <Link href='/product/1'>Go to Product </Link>
        </Button>
      </div>
    </main>
  )
}
