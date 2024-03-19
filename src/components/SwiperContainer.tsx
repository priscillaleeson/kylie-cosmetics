import { PrevButton, NextButton } from "./SwiperButtons";
import { ColorPickerSlideMenu } from "./ColorPickerSlideMenu";
import { OpacityLayer } from "./OpacityLayer";
import { Tile } from "./Tile";
import { productData } from "../data/product-data";

export const SwiperContainer: React.FC = () => {
  return (
    <div>
      <OpacityLayer isOn={false} />

      <div className="flex justify-center text-3xl items-center text-chocolate">
        <PrevButton />
        <div className="flex flex-wrap ml-[16px] min-[950px]:flex-nowrap justify-center items-center">
          {productData &&
            productData.map((product) => (
              <Tile
                key={product.id}
                name={product.name}
                imgSrc={product.featuredImageSrc}
                altImgSrc={product.alternateImageSrc}
                price={product.price}
                tag={product.tag}
                avgRating={product.avgRating}
                numberOfRatings={product.numberOfRatings}
                colorVariations={product.colorVariations}
              />
            ))}
        </div>
        <NextButton />
      </div>
      <ColorPickerSlideMenu />
    </div>
  );
};
