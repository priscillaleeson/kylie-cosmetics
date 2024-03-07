import { StarRating } from "./StarRating";
import { ColorSwatches } from "./ColorSwatches";
import { placeholderColorArray } from "./ColorSwatches";
import { useState } from "react";
import { TileImageContainer } from "./Tile-Image-Container";
import { productData } from "../data/product-data";
import { CartContainer } from "./CartFeatures";
import { ProductDetailsContainer } from "./ProductDetailsContainer";
import { ProductDetails } from "./ProductDetails";

const placeholderImages = [
  {
    src1: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
    src2: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
  },
  {
    src1: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
    src2: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
  },
];

export const Tile: React.FC = () => {
  const [showProductDetailsMenu, setShowProductDetailsMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowProductDetailsMenu(true);
  };

  const handleMouseLeave = () => {
    setShowProductDetailsMenu(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="mb-5 lg:mb-0 flex-col mr-[16px] min-w-[200px] max-w-[400px] rounded-lg border-pink border"
    >
      <TileImageContainer
        showProductDetailsMenu={showProductDetailsMenu}
        imgSrc={placeholderImages[0].src1}
        imgOverlaySrc={placeholderImages[0].src2}
      />

      <ProductDetailsContainer>
        <ColorSwatches colors={placeholderColorArray} />
        {/* input rating from provided data here */}
        <StarRating avgRating={4.5} numberOfRatings={85} />
        <ProductDetails
          name="precision pout liner"
          price={17}
          colorVariation="comes naturally"
        />
        <CartContainer price={17} />
      </ProductDetailsContainer>
    </div>
  );
};
