interface ProductDataProps {
  id: number;
  name: string;
  price: string;
  colorVariations: {
    name: string;
    hexCode: string;
    featuredImage: string;
    alternateImage: string;
  }[];
  avgRating: number;
  numberOfRatings: number;
  featuredImageSrc: string;
  featuredImageSrcAlt: string;
  alternateImageSrc: string;
  alternateImageSrcAlt: string;
}

export const productData: ProductDataProps[] = [
  {
    id: 1,
    name: "precious pout lip liner",
    price: "$17",
    colorVariations: [
      {
        name: "cocoa",
        hexCode: "#A95952",
        featuredImage: "placeholder",
        alternateImage: "placeholder",
      },
      {
        name: "smitten",
        hexCode: "#9C595A",
        featuredImage: "placeholder",
        alternateImage: "placeholder",
      },
      {
        name: "comes naturally",
        hexCode: "#9D5546",
        featuredImage: "placeholder",
        alternateImage: "placeholder",
      },
    ],
    avgRating: 5,
    numberOfRatings: 85,
    featuredImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
    featuredImageSrcAlt: "placeHolderString",
    alternateImageSrc: "placeHolderString",
    alternateImageSrcAlt: "placeHolderString",
  },
];
