import { AddToCartButton } from "./CartFeatures";
import { IoCloseOutline } from "react-icons/io5";
import { ColorSwatches } from "./ColorSwatches";
import { productData } from "../data/product-data";

export const ColorPickerSlideMenu = ({
  setShowOpacityLayer,
}: {
  setShowOpacityLayer: (showOpacityLayer: boolean) => void;
}) => {
  return (
    <div
      data-hint="color-picker-slide-menu"
      className="text-chocolate h-full w-[450px] bg-white top-0 right-0 fixed z-50 pl-5 pt-3"
      //   style={{
      //     transition: "width .75s",
      //   }}
    >
      <div className="flex justify-between">
        <div className="font-bold">{productData[0].name}</div>
        <IoCloseOutline className="font-thin text-xl text-grey" />
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
