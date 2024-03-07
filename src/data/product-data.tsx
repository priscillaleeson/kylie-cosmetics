interface ProductDataProps {
  id: number;
  name: string;
  price: number;
  tag?: string;
  colorVariations: {
    name: string;
    hexCode: string;
    featuredImage: string;
    secondaryImage: string;
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
    price: 17,
    tag: "best seller",
    colorVariations: [
      {
        name: "cocoa",
        hexCode: "#A95952",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
      {
        name: "smitten",
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
      {
        name: "comes naturally",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
    ],
    avgRating: 4.8,
    numberOfRatings: 85,
    featuredImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
    featuredImageSrcAlt: "this is alt text for featured image",
    alternateImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
    alternateImageSrcAlt: "this is placeholder alt text for alternate image",
  },
  {
    id: 2,
    name: "tinted butter balm",
    price: 18,
    tag: "new",
    colorVariations: [
      {
        name: "pick me up at 8",
        hexCode: "#FE8791",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
      },
      {
        name: "she's lovely",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
      },
      {
        name: "that's tea",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
      },
    ],
    avgRating: 4.2,
    numberOfRatings: 590,
    featuredImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",
    featuredImageSrcAlt: "tinted butter balm",
    alternateImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
    alternateImageSrcAlt: "tinted butter balm",
  },
  {
    id: 3,
    name: "precious pout lip liner",
    price: 17,
    colorVariations: [
      {
        name: "cocoa",
        hexCode: "#A95952",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
      {
        name: "smitten",
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
      {
        name: "comes naturally",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        secondaryImage: "placeholder",
      },
    ],
    avgRating: 4.8,
    numberOfRatings: 85,
    featuredImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
    featuredImageSrcAlt: "this is alt text for featured image",
    alternateImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
    alternateImageSrcAlt: "this is placeholder alt text for alternate image",
  },
  {
    id: 4,
    name: "tinted butter balm",
    price: 18,
    colorVariations: [
      {
        name: "pick me up at 8",
        hexCode: "#FE8791",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
      },
      {
        name: "she's lovely",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
      },
      {
        name: "that's tea",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",

        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
      },
    ],
    avgRating: 4.2,
    numberOfRatings: 590,
    featuredImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",
    featuredImageSrcAlt: "tinted butter balm",
    alternateImageSrc:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
    alternateImageSrcAlt: "tinted butter balm",
  },
];
