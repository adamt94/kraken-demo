"use client"

import Image from "next/image"
import { QuantityInput } from "../QuantityInput/QuantityInput";
import { Button } from "@/components/Button/Button";
import { fakeAddProductRequest } from "@/features/api/add-product";

type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}


export const ProductCard = ({ image, title, subtitle, price }: ProductCardProps) => {

  const handleClick = async () => {
    try {
      await fakeAddProductRequest("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="px-6 md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
      <div className="rounded-lg mb-6 md:mb-0 lg:col-span-2">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-contain rounded-3xl"
            priority
          />
        </div>
      </div>
      <div className="lg:col-span-3 flex flex-col">
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl md:text-5xl leading-13">{title}</h1>
          <p className="text-onBackground text-xl">{subtitle}</p>
        </div>
        <div className="flex flex-row md:flex-row justify-between items-end gap-4 mb-6">
          <div className="text-3xl md:text-4xl font-bold">£{price}</div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-onBackground text-sm">Qty</span>
            <QuantityInput />
          </div>
        </div>
        <Button
          className="py-6 text-lg"
          onClick={handleClick}
        >
          Add to cart
        </Button>

      </div>

    </div>
  );
}
