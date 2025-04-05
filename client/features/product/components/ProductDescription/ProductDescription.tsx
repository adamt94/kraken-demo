type ProductDescriptionProps = {
  description: string;
};
export const ProductDescription = ({ description }: ProductDescriptionProps) => {

  return (
    <div className="px-6 mt-8 bg-surface py-6">
      <h2 className="text-3xl text-onBackground mb-4">Description</h2>
      <p className="text-onBackground text-lg">
        {description}
      </p>
    </div>
  )
};
