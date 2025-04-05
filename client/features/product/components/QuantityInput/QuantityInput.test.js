import { render, screen, act } from "@testing-library/react";
import { QuantityInput } from "./QuantityInput";

describe('QuantityInput', () => {
  it('should increment quantity when + button is clicked', async () => {
    render(
      <QuantityInput
        initialValue={1}
      />
    );
    const incrementButton = screen.getByText('+');
    act(() => {
      incrementButton.click();
    });

    expect(screen.getByText('2')).toBeInTheDocument()
  });

  it('should decrement quantity when - button is clicked', () => {
    render(
      <QuantityInput
        initialValue={2}
      />
    );
    const decrementButton = screen.getByText('-');
    act(() => {
      decrementButton.click();
    });

    expect(screen.getByText('1')).toBeInTheDocument()
  });

  it('should not allow quantity to go below minimum value', () => {
    render(
      <QuantityInput
        initialValue={1}
        min={1}
      />
    );
    const decrementButton = screen.getByText('-');
    act(() => {
      decrementButton.click();
    });

    expect(screen.getByText('1')).toBeInTheDocument()
  });
});
