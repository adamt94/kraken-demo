import { render, screen, act } from '@testing-library/react'
import { QuantityInput } from './QuantityInput'

describe('QuantityInput', () => {
  it('should increment quantity when + button is clicked', async () => {
    const onChange = jest.fn()
    render(<QuantityInput quantity={1} onChange={onChange} />)
    const incrementButton = screen.getByText('+')
    act(() => {
      incrementButton.click()
    })

    expect(onChange).toHaveBeenCalledWith(2)
  })
  it('should decrement quantity when - button is clicked', () => {
    const onChange = jest.fn()
    render(<QuantityInput quantity={2} onChange={onChange} />)
    const decrementButton = screen.getByText('-')
    act(() => {
      decrementButton.click()
    })

    expect(onChange).toHaveBeenCalledWith(1)
  })
  it('should not allow quantity to go below minimum value', () => {
    const onChange = jest.fn()
    render(<QuantityInput quantity={1} onChange={onChange} />)
    const decrementButton = screen.getByText('-')
    act(() => {
      decrementButton.click()
    })

    expect(onChange).not.toHaveBeenCalled()
  })
})
