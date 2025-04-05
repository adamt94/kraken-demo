"use client";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

type QuantityInputProps = {
  quantity: number;
  onChange: (quantity: number) => void;

};

export const QuantityInput = ({ quantity, onChange }: QuantityInputProps) => {

  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    onChange(quantity - 1);
  };
  return (

    <div className="flex items-center">
      <Button onClick={handleDecrement} disabled={quantity == 1} size="icon" className="rounded-xl text-xl">
        -
      </Button>
      <span className="mx-3 text-2xl w-4 text-center">{quantity}</span>
      <Button onClick={handleIncrement} size="icon" className="rounded-xl text-xl">
        +
      </Button>
    </div>

  );
}
