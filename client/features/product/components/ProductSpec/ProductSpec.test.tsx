import { render, screen } from "@testing-library/react";
import { ProductSpec } from "./ProductSpec";

describe('ProductSpec', () => {
  it('renders the specifications table', () => {
    const data = [
      { name: "Brand", value: "Test Brand" },
      { name: "Model Code", value: "Test Model" },
    ];

    render(<ProductSpec data={data} />);

    expect(screen.getByText('Specifications')).toBeVisible();
    expect(screen.getByText('Brand')).toBeVisible();
  });
});
