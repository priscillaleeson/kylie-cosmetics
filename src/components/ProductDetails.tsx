interface ProductDetailsProps {
  name: string;
  price: number;
  colorVariations: {
    name: string | null;
    hexCode: string | null;
    featuredImage: string | null;
    secondaryImage: string | null;
  }[];
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  colorVariations,
}) => {
  return (
    <div>
      <div className="flex justify-between font-bold">
        <div>{colorVariations[0].name}</div>
        <div>${price}</div>
      </div>
      <div>{name}</div>
    </div>
  );
};
