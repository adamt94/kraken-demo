import Image from "next/image"
import { QuantityInput } from "../QuantityInput/QuantityInput";

type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}


export const ProductCard = ({ image, title, subtitle, price }: ProductCardProps) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
      <div className="bg-onBackground rounded-lg p-4 mb-6 md:mb-0 lg:col-span-2">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col">
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-onBackground text-xl">{subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="text-3xl md:text-4xl font-bold">£{price}</div>
          <div className="flex items-center gap-4">
            <span className="text-onBackground text-lg">Qty</span>
            <QuantityInput />
          </div>
        </div>
      </div>

    </div>
  );
}
