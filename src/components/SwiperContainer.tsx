import { PrevButton, NextButton } from "./SwiperButtons";
// import { OpacityLayer } from "./OpacityLayer";
import { Tile } from "./Tile";
import { productData } from "../data/product-data";
import classNames from "classnames";
import { useState } from "react";

export const SwiperContainer: React.FC = () => {
  //this state manages opening up the slide menu, which also triggers the opacity of the webpage and being unable to click on a product detail
  // const [showColorPickerSlideMenu, setShowColorPickerSlideMenu] =
  //   useState(false);

  // const handleSlideMenuToggle = () => {
  //   setShowColorPickerSlideMenu(!showColorPickerSlideMenu);
  // };

  return (
    <div>
      {/* <div onClick={handleSlideMenuToggle}></div> */}
      <div
        data-hint="swiper-container"
        className={classNames(
          "flex justify-center items-center",
          " text-3xl text-chocolate"
        )}
      >
        <PrevButton />
        <div
          className={classNames(
            "min-[950px]:flex-nowrap",
            "flex justify-center items-center flex-wrap",
            "ml-[16px]"
          )}
        >
          {productData &&
            productData.map((product) => (
              <Tile
                key={product.id}
                name={product.name}
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
    </div>
  );
};
