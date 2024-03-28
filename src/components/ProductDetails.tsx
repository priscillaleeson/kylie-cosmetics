interface ProductDetailsProps {
  selectedColorOption: {
    productName: string;
    colorName: string;
    featuredImage: string;
    secondaryImage: string;
  };
  price: number;
  colorVariations: {
    name: string | null;
    hexCode: string | null;
    featuredImage: string | null;
    secondaryImage: string | null;
  }[];
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  selectedColorOption,
  price,
}) => {
  return (
    <div>
      <div className="flex justify-between font-bold">
        <div>{selectedColorOption.colorName}</div>
        <div>${price}</div>
      </div>
      <div>{selectedColorOption.productName}</div>
    </div>
  );
};
