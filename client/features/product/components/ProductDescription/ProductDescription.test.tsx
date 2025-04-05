import { render, screen } from '@testing-library/react'
import { ProductDescription } from './ProductDescription'

describe('ProductDescription', () => {
  it('renders the description', () => {
    const description = 'This is a test product description.'
    render(<ProductDescription description={description} />)
    expect(screen.getByText(description)).toBeVisible()
  })
})
