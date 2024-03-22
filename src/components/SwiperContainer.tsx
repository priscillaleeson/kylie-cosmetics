import { PrevButton, NextButton } from "./SwiperButtons";
import { ColorPickerSlideMenu } from "./ColorPickerSlideMenu";
import { OpacityLayer } from "./OpacityLayer";
import { Tile } from "./Tile";
import { productData } from "../data/product-data";
import { useState } from "react";

export const SwiperContainer: React.FC = () => {
  //this state manages opening up the slide menu, which also triggers the opacity of the webpage and being unable to click on a product detail
  const [showColorPickerSlideMenu, setShowColorPickerSlideMenu] =
    useState(false);

  const handleSlideMenuToggle = () => {
    setShowColorPickerSlideMenu(!showColorPickerSlideMenu);
  };

  return (
    <div>
      <div onClick={handleSlideMenuToggle}>
        <OpacityLayer showColorPickerSlideMenu={showColorPickerSlideMenu} />
      </div>
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
                showColorPickerSlideMenu={showColorPickerSlideMenu}
                setShowColorPickerSlideMenu={setShowColorPickerSlideMenu}
              />
            ))}
        </div>
        <NextButton />
      </div>
      (
      <ColorPickerSlideMenu
        showColorPickerSlideMenu={showColorPickerSlideMenu}
        setShowColorPickerSlideMenu={setShowColorPickerSlideMenu}
        handleExitClick={handleSlideMenuToggle}
      />
      )
    </div>
  );
};
