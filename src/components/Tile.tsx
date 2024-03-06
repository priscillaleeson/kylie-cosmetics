import { StarRating } from "./Star";
import { ColorSwatches } from "./ColorSwatches";
import { placeholderColorArray } from "./ColorSwatches";
import { useState } from "react";
import { TileImageContainer } from "./Tile-Image-Container";
import { productData } from "../data/product-data";
import {
  AddToCartButton,
  QuantitySelector,
  CartContainer,
} from "./CartFeatures";

//just need to switch out initial photo and alt photo with productData
//currently these are placeholder images
const initialPhoto = {
  src: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
};

const altPhoto = {
  src: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
};

export const Tile: React.FC = () => {
  const [thumbnailPhoto, setThumbnailPhoto] = useState(initialPhoto);

  const handleMouseEnter = () => {
    setThumbnailPhoto(altPhoto);
  };

  const handleMouseLeave = () => {
    setThumbnailPhoto(initialPhoto);
  };

  const handleHover = () => {
    //use this function to hide and show color swatches and cart features
    
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="mb-5 lg:mb-0 flex-col mr-[16px] min-w-[200px] max-w-[400px] rounded-lg border-pink border"
    >
      <TileImageContainer thumbnailPhoto={thumbnailPhoto} />
      <div
        data-hint="product-details"
        className="bg-white w-full px-3 py-3 h-2/6 text-sm rounded-lg"
      >
        <div data-hint="color-swatch">
          <ColorSwatches colors={placeholderColorArray} />
        </div>
        <div>
          <div>
            {/* input rating from provided data here */}
            <StarRating avgRating={5} numberOfRatings={85} />
          </div>
          <div className="flex justify-between font-bold">
            <div>comes naturally</div>
            <div>$17</div>
          </div>
          <div>precision pout lip liner</div>
          <CartContainer />
        </div>
      </div>
    </div>
  );
};
