"use client";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

type QuantityInputProps = {
  initialValue?: number;
};

export const QuantityInput = ({ initialValue = 1 }: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  return (

    <div className="flex items-center">
      <Button onClick={handleDecrement} disabled={quantity == 1} size="icon" className="rounded-xl">
        -
      </Button>
      <span className="mx-6 text-2xl">{quantity}</span>
      <Button onClick={handleIncrement} size="icon" className="rounded-xl">
        +
      </Button>
    </div>

  );
}
