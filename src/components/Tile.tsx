import { StarRating } from "./StarRating";
import { ColorSwatches } from "./ColorSwatches";
import { useState } from "react";
import { OpacityLayer } from "./OpacityLayer";
import { TileImageWrapper } from "./Tile-Image-Wrapper";
// import { productData } from "../data/product-data";
import { CartWrapper } from "./CartFeatures";
import { ProductDetailsContainer } from "./ProductDetailsContainer";
import { ProductDetails } from "./ProductDetails";
import classNames from "classnames";
import { ColorPickerSlideMenu } from "./ColorPickerSlideMenu";

type TileProps = {
  name: string;
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
  price,
  tag,
  avgRating,
  numberOfRatings,
  colorVariations,
}) => {
  //this state manages opening up the slide menu, which also triggers the opacity of the webpage and being unable to click on a product detail
  const [showColorPickerSlideMenu, setShowColorPickerSlideMenu] =
    useState(false);

  //this clickhandler manages the closing of the slide menu which reinstates its default false state
  const handleExitClick = () => {
    setShowColorPickerSlideMenu(false);
  };

  const [showProductDetailsMenu, setShowProductDetailsMenu] = useState(false);
  const [toggleProductImage, setToggleProductImage] = useState(false);

  const [selectedColorOption, setSelectedColorOption] = useState({
    //default state will show the first color in each product list
    productName: name,
    colorName: colorVariations[0].name,
    featuredImage: colorVariations[0].featuredImage,
    secondaryImage: colorVariations[0].secondaryImage,
  });

  return (
    <div>
      {/* onClick={handleSlideMenuToggle} */}
      <OpacityLayer showColorPickerSlideMenu={showColorPickerSlideMenu} />
      <div
        onMouseEnter={() => {
          setShowProductDetailsMenu(true);
          setToggleProductImage(true);
        }}
        onMouseLeave={() => {
          setShowProductDetailsMenu(false);
          setToggleProductImage(false);
        }}
        className={classNames(
          "group",
          "relative",
          "flex-col",
          "rounded-lg border-pink border",
          "overflow-hidden",
          "lg:mb-0 mb-5 mr-[16px]",
          "] min-w-[200px] max-w-[365px] max-h-[500px]"
        )}
      >
        <TileImageWrapper
          selectedColorOption={selectedColorOption}
          toggleProductImage={toggleProductImage}
          tag={tag}
          showProductDetailsMenu={showProductDetailsMenu}
        />
        <ProductDetailsContainer>
          <div className="bg-white absolute bottom-0 left-0 right-0 p-3 pt-2">
            <div
              className={classNames(
                "pt-2",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-[200ms] ease-linear",
                "max-h-0 group-hover:max-h-64",
                "transition-transform ease-linear group-hover:duration-[800ms]"
              )}
            >
              <ColorSwatches
                colors={colorVariations}
                productName={name}
                isVertical={false}
                showColorPickerSlideMenu={showColorPickerSlideMenu}
                setShowColorPickerSlideMenu={setShowColorPickerSlideMenu}
                selectedColorOption={selectedColorOption}
                setSelectedColorOption={setSelectedColorOption}
              />
            </div>
            {/* input rating from provided data here */}
            <StarRating
              avgRating={avgRating}
              numberOfRatings={numberOfRatings}
            />
            <ProductDetails
              selectedColorOption={selectedColorOption}
              price={price}
              colorVariations={colorVariations}
            />

            <div
              className={classNames(
                "overflow-hidden",
                "max-h-0",
                "transition-all ease-linear",
                "group-hover:max-h-64 group-hover:duration-[700ms]"
              )}
            >
              {/*  overflow-hidden max-h-0 group-hover:max-h-64 */}
              <div
                className={classNames(
                  "translate-y-2",
                  "transition-all duration-200",
                  "group-hover:translate-y-0"
                )}
              >
                <CartWrapper
                  price={price}
                  selectedColorOption={selectedColorOption}
                />
              </div>
            </div>
          </div>
        </ProductDetailsContainer>

        <ColorPickerSlideMenu
          productName={name}
          colorVariations={colorVariations}
          showColorPickerSlideMenu={showColorPickerSlideMenu}
          setShowColorPickerSlideMenu={setShowColorPickerSlideMenu}
          handleExitClick={handleExitClick}
          selectedColorOption={selectedColorOption}
          setSelectedColorOption={setSelectedColorOption}
          productPrice={price}
        />
      </div>
    </div>
  );
};
