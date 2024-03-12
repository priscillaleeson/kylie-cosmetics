import { BiPlus } from "react-icons/bi";

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
          <div
            data-hint="button-border-when-clicked"
            className="rounded-full border border-black h-[21px] w-[21px]"
          >
            hello
          </div>
          <button
            id={color.name || undefined}
            className="rounded-full h-5 w-5 mr-1"
            style={{
              backgroundColor: color.hexCode || undefined,
            }}
          ></button>
        </div>
      );
    });
  }

  const seeMoreColorsButton = (
    <button className="h-5 w-5 mr-1 rounded-full border border-black bg-transparent flex justify-center items-center">
      <div className="p-2">
        <BiPlus />
      </div>
    </button>
  );

  return (
    <div className="relative top-0 flex">
      {colorSwatchArray}
      <div>{seeMoreColorsButton}</div>
    </div>
  );
};
