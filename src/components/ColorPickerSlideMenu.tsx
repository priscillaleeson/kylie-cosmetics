import { AddToCartButton } from "./CartFeatures";
import { IoCloseOutline } from "react-icons/io5";
import { ColorSwatches } from "./ColorSwatches";
import { productData } from "../data/product-data";
import classNames from "classnames";

export const ColorPickerSlideMenu = ({
  productName,
  productPrice,
  showColorPickerSlideMenu,
  setShowColorPickerSlideMenu,
  colorVariations,
  selectedColorOption,
  setSelectedColorOption,
  handleExitClick,
}: {
  productName: string;
  productPrice: number;
  showColorPickerSlideMenu: boolean;
  setShowColorPickerSlideMenu: (showColorPickerSlideMenu: boolean) => void;
  colorVariations: {
    name: string;
    hexCode: string;
    featuredImage: string;
    secondaryImage: string;
  }[];
  selectedColorOption: {
    productName: string;
    colorName: string;
    featuredImage: string;
    secondaryImage: string;
  };
  setSelectedColorOption?: ({
    productName,
    colorName,
    featuredImage,
    secondaryImage,
  }: {
    productName: string;
    colorName: string;
    featuredImage: string;
    secondaryImage: string;
  }) => void;
  handleExitClick: () => void;
}) => {
  return (
    <div
      data-hint="color-picker-slide-menu"
      className={classNames(
        "z-50",
        "ml-5 pt-3 pl-4",
        "text-chocolate bg-white",
        "fixed right-0 top-0 bottom-0",
        "overflow-hidden",
        "text-nowrap overflow-hidden",
        "w-[450px]",
        "transition-transform ease-in-out duration-500",

        showColorPickerSlideMenu ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex justify-between">
        <div className=" font-semibold text-2xl">{productName}</div>
        <button onClick={handleExitClick}>
          <IoCloseOutline className="font-thin text-2xl mr-2 text-grey" />
        </button>
      </div>
      <div className="font-extralight text-2xl mb-1">
        {selectedColorOption.colorName}
       
      </div>
      <div>
        <ColorSwatches
          colors={colorVariations}
          isVertical={true}
          setShowColorPickerSlideMenu={setShowColorPickerSlideMenu}
        />
      </div>
      <div className="absolute bottom-0 right-0 left-0 border-t-[1px] border-l-0 border border-pink p-4">
        <div className="flex justify-center mb-2">
          <AddToCartButton
            totalIncrementedCost={productPrice}
            selectedColorOption={selectedColorOption}
          />
        </div>

        <div className="flex justify-center text-[12px] font-thin">
          <button className="decoration-[.5px] hover:decoration-1 underline underline-offset-1">
            more details{" "}
          </button>
          &nbsp; or &nbsp;
          <button className="decoration-[.5px] hover:decoration-1 underline underline-offset-1">
            continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};
