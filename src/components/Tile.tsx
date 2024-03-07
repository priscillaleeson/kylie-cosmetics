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
      className="mb-5 lg:mb-0 flex-col mr-[16px] min-w-[200px] max-w-[400px] rounded-lg border-pink border"
    >
      <TileImageWrapper
        showProductDetailsMenu={showProductDetailsMenu}
        imgSrc={imgSrc}
        imgOverlaySrc={altImgSrc}
        tag={tag}
      />

      <ProductDetailsContainer>
        <ColorSwatches colors={colorVariations} />
        {/* input rating from provided data here */}
        <StarRating avgRating={avgRating} numberOfRatings={numberOfRatings} />
        <ProductDetails
          name={name}
          price={price}
          colorVariations={colorVariations}
        />
        <CartWrapper price={price} />
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
