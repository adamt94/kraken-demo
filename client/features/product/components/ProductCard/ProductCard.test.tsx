import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { ProductCard } from "./ProductCard";
import { fakeAddProductRequest } from '@/features/api/add-product';

jest.mock('../../../api/add-product', () => ({
  fakeAddProductRequest: jest.fn(),
}))

describe('ProductCard', () => {
  it('renders price, quantity, title and subtitle', () => {
    render(
      <ProductCard
        image="https://example.com/image.jpg"
        title="Test Product"
        subtitle="This is a test product"
        price={19.99}
      />
    );
    screen.getByText('Test Product');
    screen.getByText('This is a test product');
    screen.getByText('Qty');
    screen.getByText('£19.99');
  });

  it('handles button click', async () => {

    const { getByText } = render(
      <ProductCard
        image="https://example.com/image.jpg"
        title="Test Product"
        subtitle="This is a test product"
        price={19.99}
      />
    );

    const button = getByText('Add to cart');

    act(() => {
      button.click();
    });

    await waitFor(() => {
      expect(fakeAddProductRequest).toHaveBeenCalled();
    });
  });
});
