import { StarRating } from "./StarRating";
import { ColorSwatches } from "./ColorSwatches";
import { useState } from "react";
import { TileImageWrapper } from "./Tile-Image-Wrapper";
import { productData } from "../data/product-data";
import { CartWrapper } from "./CartFeatures";
import { ProductDetailsContainer } from "./ProductDetailsContainer";
import { ProductDetails } from "./ProductDetails";

type TileProps = {
  name: string;
  imgSrc: string;
  altImgSrc: string;
  price: number;
  tag?: string;
  avgRating: number;
  numberOfRatings: number;
  colorVariations: {
    name: string;
    hexCode: string;
    featuredImage: string;
    secondaryImage: string;
  }[];
};

export const Tile: React.FC<TileProps> = ({
  name,
  imgSrc,
  altImgSrc,
  price,
  tag,
  avgRating,
  numberOfRatings,
  colorVariations,
}) => {
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
      className="mb-5 lg:mb-0 flex-col mr-[16px] min-w-[200px] max-w-[365px] max-h-[500px] rounded-lg border-pink border relative overflow-hidden group"
    >
      <TileImageWrapper
        imgSrc={imgSrc}
        imgOverlaySrc={altImgSrc}
        tag={tag}
        showProductDetailsMenu={showProductDetailsMenu}
      />

      <ProductDetailsContainer>
        <div className="bg-white absolute bottom-0 left-0 right-0 p-3 pt-2">
          <div className="pt-2 overflow-hidden transition-all ease-linear max-h-0 group-hover:max-h-64 group-hover:duration-[1100ms]">
            <ColorSwatches colors={colorVariations} />
          </div>
          {/* input rating from provided data here */}
          <StarRating avgRating={avgRating} numberOfRatings={numberOfRatings} />
          <ProductDetails
            name={name}
            price={price}
            colorVariations={colorVariations}
          />

          <div className="relative transition-all ease-in-out  overflow-hidden max-h-0 group-hover:max-h-64 group-hover:duration-[700ms]">
            {/*  overflow-hidden max-h-0 group-hover:max-h-64 */}
            <div className="group-hover:translate-y-0 translate-y-20 transition-all duration-200">
              <CartWrapper price={price} />
            </div>
          </div>
        </div>
      </ProductDetailsContainer>
    </div>
  );
};

export const renderedTiles = productData.map((product) => {
  return (
    <Tile
      name={product.name}
      imgSrc={product.featuredImageSrc}
      altImgSrc={product.alternateImageSrc}
      price={product.price}
      tag={product.tag}
      avgRating={product.avgRating}
      numberOfRatings={product.numberOfRatings}
      colorVariations={product.colorVariations}
    />
  );
});
