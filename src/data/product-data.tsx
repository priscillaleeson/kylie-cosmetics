interface ProductDataProps {
  id: number;
  name: string;
  price: string;
  variations: string[];
  avgRating: number;
  numberOfRatings: number;
  imageCoverSrc: string;
  secondImageSrc: string;
}

export const productData: ProductDataProps[] = [
  {
    id: 1,
    name: "precious pout lip liner",
    price: "$17",
    variations: ["cocoa", "smitten", "comes naturally"],
    avgRating: 5,
    numberOfRatings: 85,
    imageCoverSrc: "placeHolderString",
    secondImageSrc: "placeHolderString",
  },
];
