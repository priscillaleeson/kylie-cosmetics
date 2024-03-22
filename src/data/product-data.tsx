interface ProductDataProps {
  id: number;
  name: string;
  price: number;
  tag?: string;
  colorVariations: {
    name: string;
    hexCode: string;
    featuredImage: string;
    featuredImageAlt: string;
    secondaryImage: string;
    secondaryImageAlt: string;
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
        name: "smitten",
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
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Stylized_800x.jpg?v=1701816853",
        featuredImageAlt: "comes naturally lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
        secondaryImageAlt: "comes naturally lip liner swatch",
      },
      {
        name: "coconut 2.0",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        featuredImageAlt: "coconut 2.0 lip liner",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_Coconut2.0_Stylized_800x.jpg?v=1701816853",
        secondaryImageAlt: "coconut 2.0 lip liner swatch",
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
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
      },
      {
        name: "she's lovely",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
      },
      {
        name: "that's tea",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
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
        featuredImageAlt: "",
        secondaryImage: "placeholder",
        secondaryImageAlt: "",
      },
      {
        name: "smitten",
        hexCode: "#9C595A",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        featuredImageAlt: "",
        secondaryImage: "placeholder",
        secondaryImageAlt: "",
      },
      {
        name: "comes naturally",
        hexCode: "#9D5546",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
        featuredImageAlt: "",
        secondaryImage: "placeholder",
        secondaryImageAlt: "",
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
    tag: "new",
    colorVariations: [
      {
        name: "pick me up at 8",
        hexCode: "#FE8791",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Pink_Me_Up_338_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_PinkMeUpAt8_3Layers_01_V2_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
      },
      {
        name: "she's lovely",
        hexCode: "#AE645D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Shes_Lovely_619_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_She_sLovely_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
      },
      {
        name: "that's tea",
        hexCode: "#D0524D",
        featuredImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_Thats_Tea_211_Open-0_800x.jpg?v=1686755477",
        featuredImageAlt: "",
        secondaryImage:
          "https://kyliecosmetics.com/cdn/shop/files/KJC_TBB_23_LipMacro_That_sTea_3Layers_01_800x.jpg?v=1686755477",
        secondaryImageAlt: "",
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
