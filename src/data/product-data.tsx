interface ProductDataProps {
  id: number;
  name: string;
  price: number;
  tag?: string;
  colorVariations: {
    name: string;
    // productName: string;
    hexCode: string;
    featuredImage: string;
    featuredImageAlt: string;
    secondaryImage: string;
    secondaryImageAlt: string;
  }[];
  avgRating: number;
  numberOfRatings: number;
}

export const productData: ProductDataProps[] = [
  {
    id: 1,
    name: "precision pout lip liner",
    price: 17,
    tag: "best seller",
    colorVariations: [
      {
        name: "smitten",
        // productName: "precious pout lip liner",
        hexCode: "#A95952",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Smitten_Stylized_800x.jpg?v=1701816850",
        featuredImageAlt: "smitten lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Smitten_Swatch_800x.jpg?v=1701816849",
        secondaryImageAlt: "smitten lip liner swatch",
      },
      {
        name: "comes naturally",
        // productName: "precious pout lip liner",
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        featuredImageAlt: "comes naturally lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
        secondaryImageAlt: "comes naturally lip liner swatch",
      },
      {
        name: "coconut 2.0",
        // productName: "precious pout lip liner",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Stylized_800x.jpg?v=1701816853",
        featuredImageAlt: "coconut 2.0 lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Swatch_800x.jpg?v=1701816847",
        secondaryImageAlt: "coconut 2.0 lip liner swatch",
      },
    ],
    avgRating: 4.8,
    numberOfRatings: 85,
  },
  {
    id: 2,
    name: "tinted butter balm",
    price: 18,
    tag: "new",
    colorVariations: [
      {
        name: "pick me up at 8",
        // productName: "tinted butter balm",
        hexCode: "#FE8791",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "pick me up at 8 tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
        secondaryImageAlt: "pick me up at 8 tinted butter balm",
      },
      {
        name: "she's lovely",
        // productName: "tinted butter balm",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "she's lovely tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "she's lovely tinted butter balm",
      },
      {
        name: "that's tea",
        // productName: "tinted butter balm",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "that's tea tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "that's tea tinted butter balm",
      },
    ],
    avgRating: 4.2,
    numberOfRatings: 590,
  },
  {
    id: 3,
    name: "precision pout lip liner",
    price: 17,
    tag: "best seller",
    colorVariations: [
      {
        name: "smitten",
        // productName: "precious pout lip liner",
        hexCode: "#A95952",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Smitten_Stylized_800x.jpg?v=1701816850",
        featuredImageAlt: "smitten lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Smitten_Swatch_800x.jpg?v=1701816849",
        secondaryImageAlt: "smitten lip liner swatch",
      },
      {
        name: "comes naturally",
        // productName: "precious pout lip liner",
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        featuredImageAlt: "comes naturally lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
        secondaryImageAlt: "comes naturally lip liner swatch",
      },
      {
        name: "coconut 2.0",
        // productName: "precious pout lip liner",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Stylized_800x.jpg?v=1701816853",
        featuredImageAlt: "coconut 2.0 lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Swatch_800x.jpg?v=1701816847",
        secondaryImageAlt: "coconut 2.0 lip liner swatch",
      },
    ],
    avgRating: 4.8,
    numberOfRatings: 85,
  },
  {
    id: 4,
    name: "tinted butter balm",
    price: 18,
    tag: "new",
    colorVariations: [
      {
        name: "pick me up at 8",
        // productName: "tinted butter balm",
        hexCode: "#FE8791",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "pick me up at 8 tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
        secondaryImageAlt: "pick me up at 8 tinted butter balm",
      },
      {
        name: "she's lovely",
        // productName: "tinted butter balm",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "she's lovely tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "she's lovely tinted butter balm",
      },
      {
        name: "that's tea",
        // productName: "tinted butter balm",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "that's tea tinted butter balm",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "that's tea tinted butter balm",
      },
    ],
    avgRating: 4.2,
    numberOfRatings: 590,
  },
];
