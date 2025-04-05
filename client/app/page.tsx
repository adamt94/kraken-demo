import '@/styles/globals.css'

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
      </div>
    </main>
  )
}
