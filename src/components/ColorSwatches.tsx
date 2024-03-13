import { BiPlus } from "react-icons/bi";
import classNames from "classnames";

interface ColorSwatchesProps {
  colors: {
    name?: string;
    hexCode?: string;
    featuredImage?: string;
    secondaryImage?: string;
  }[];
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = ({ colors }) => {
  let colorSwatchArray;

  if (colors.length > 0) {
    colorSwatchArray = colors.map((color) => {
      return (
        <div>
          {/* <div
        //     data-hint="button-border-when-clicked"
        //     className="rounded-full border border-black h-[21px] w-[21px] absolute"
        //   ></div> */}
          <button
            id={color.name}
            className={classNames(
              "rounded-full",
              "h-5 w-5 mr-1",
              "focus:ring-1 focus:ring-offset-[.7px] focus:ring-black"
            )}
            style={{
              backgroundColor: color.hexCode,
            }}
          ></button>
        </div>
      );
    });
  }

  const seeMoreColorsButton = (
    <button
      className={classNames(
        "flex justify-center items-center",
        "h-5 w-5 mr-1",
        "border rounded-full border-black"
      )}
    >
      <div className="p-2">
        <BiPlus />
      </div>
    </button>
  );

  return (
    <div className="flex relative top-0 pb-1">
      {colorSwatchArray}
      <div>{seeMoreColorsButton}</div>
    </div>
  );
};
