import { BiPlus } from "react-icons/bi";
import classNames from "classnames";

interface ColorSwatchesProps {
  productName?: string;
  isVertical: boolean;
  showColorPickerSlideMenu?: boolean;
  setShowColorPickerSlideMenu: (showOpacityLayer: boolean) => void;
  colors: {
    name: string;
    hexCode: string;
    featuredImage: string;
    secondaryImage: string;
  }[];
  selectedColorOption?: {
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
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = ({
  colors,
  productName,
  isVertical,
  showColorPickerSlideMenu,
  setShowColorPickerSlideMenu,
  selectedColorOption,
  setSelectedColorOption,
}) => {
  const hasColors = colors.length > 0;

  const handleOpenColorPickerClick = () => {
    console.log("I clicked!");
    setShowColorPickerSlideMenu(true);
  };

  return (
    <div
      className={classNames("flex relative top-0 pb-1 mt-4", {
        "flex-col ml-2": isVertical,
      })}
    >
      {hasColors &&
        colors.map((color) => {
          return (
            <div
              className={classNames({
                "my-2 flex relative": isVertical,
              })}
            >
              <button
                onClick={() => {
                  console.log("i want to change the image here");
                  if (setSelectedColorOption) {
                    setSelectedColorOption({
                      productName: productName ?? "",
                      colorName: color.name,
                      featuredImage: color.featuredImage,
                      secondaryImage: color.secondaryImage,
                    });
                  }

                  console.log(
                    `selectedColorOption: ${selectedColorOption?.featuredImage}`
                  );
                }}
                id={color.name}
                className={classNames(
                  "rounded-full",
                  "focus:ring-1  focus:ring-black",
                 

                  isVertical
                    ? "h-7 w-7 mr-2 mb-1 focus:ring-offset-[1.8px] absolute top-0 left-0"
                    : "h-5 w-5 mr-1 focus:ring-offset-[.7px]"
                )}
                style={{
                  backgroundColor: color.hexCode,
                }}
              ></button>
              {isVertical && (
                <div className="font-medium text-lg ml-9">{color.name}</div>
              )}
            </div>
          );
        })}
      <div>
        {!isVertical && (
          <button
            className={classNames(
              "flex justify-center items-center",
              "h-5 w-5 mr-1",
              "border rounded-full border-black"
            )}
          >
            <div className="p-2" onClick={handleOpenColorPickerClick}>
              <BiPlus />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
