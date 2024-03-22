import { AddToCartButton } from "./CartFeatures";
import { IoCloseOutline } from "react-icons/io5";
import { ColorSwatches } from "./ColorSwatches";
import { productData } from "../data/product-data";
import classNames from "classnames";

export const ColorPickerSlideMenu = ({
  showColorPickerSlideMenu: showOpacityLayer,
  setShowColorPickerSlideMenu: setShowOpacityLayer,
  handleExitClick,
}: {
  showColorPickerSlideMenu: boolean;
  setShowColorPickerSlideMenu: (showOpacityLayer: boolean) => void;
  handleExitClick: () => void;
}) => {
  // const handleExitClick = () => {
  //   setShowOpacityLayer(!showOpacityLayer);
  // };
  return (
    <div
      data-hint="color-picker-slide-menu"
      className={classNames(
        "z-50",
        "h-full",
        "pl-5 pt-3",
        "text-chocolate bg-white",
        "fixed right-0 top-0",
        "overflow-hidden",
        "text-nowrap overflow-hidden",

        showOpacityLayer ? "w-[450px]" : "w-0"
      )}
      style={{
        transition: "width .75s",
      }}
    >
      <div className="flex justify-between">
        <div className="font-bold">{productData[0].name}</div>
        <button onClick={handleExitClick}>
          <IoCloseOutline className="font-thin text-xl text-grey" />
        </button>
      </div>
      <div className="font-extralight mb-1">
        {productData[0].colorVariations[0].name}
      </div>
      <div>
        <ColorSwatches
          colors={productData[0].colorVariations}
          isVertical={true}
          setShowOpacityLayer={setShowOpacityLayer}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t-[1px] border-l-0 border border-pink p-4">
        <div className="flex justify-center mb-2">
          <AddToCartButton totalIncrementedCost={15} />
          {/* 15 is currently a placeholder */}
        </div>

        <div className="flex justify-center text-[12px] font-thin">
          <span className="decoration-[.5px] hover:decoration-1 underline underline-offset-1">
            more details{" "}
          </span>
          &nbsp; or &nbsp;
          <span className="decoration-[.5px] hover:decoration-1 underline underline-offset-1">
            continue shopping
          </span>
        </div>
      </div>
    </div>
  );
};
