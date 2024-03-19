import { AddToCartButton } from "./CartFeatures";
import { IoCloseOutline } from "react-icons/io5";
import { ColorSwatches } from "./ColorSwatches";
import { productData } from "../data/product-data";


export const ColorPickerSlideMenu = () => {
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
          <IoCloseOutline className="text-2xl text-grey" />
        </div>
        <div className="font-extralight mb-1">
          {productData[0].colorVariations[0].name}
        </div>
        <div>
          <ColorSwatches
            colors={productData[0].colorVariations}
            isVertical={true}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t-[1px] border-l-0 border border-pink p-4">
          <div className="flex justify-center mb-2">
            <AddToCartButton totalIncrementedCost={15} />
            {/* 15 is currently a placeholder */}
          </div>

          <div className="flex justify-center text-[12px]">
            more details or continue shopping
          </div>
        </div>
      </div>

  );
};
