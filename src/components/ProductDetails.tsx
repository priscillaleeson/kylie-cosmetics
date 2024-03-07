interface ProductDetailsProps {
  name: string;
  price: number;
  colorVariation: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  colorVariation,
}) => {
  return (
    <div>
      <div className="flex justify-between font-bold">
        <div>{colorVariation}</div>
        <div>${price}</div>
      </div>
      <div>{name}</div>
    </div>
  );
};
