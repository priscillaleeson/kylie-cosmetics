import { BiPlus } from "react-icons/bi";
import classNames from "classnames";
import { OpacityLayer } from "./OpacityLayer";

interface ColorSwatchesProps {
  isVertical: boolean;
  colors: {
    name?: string;
    hexCode?: string;
    featuredImage?: string;
    secondaryImage?: string;
  }[];
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = ({
  colors,
  isVertical,
}) => {
  const hasColors = colors.length > 0;
  return (
    <div
      className={classNames(
        "flex relative top-0 pb-1",
        isVertical ? "flex-col" : "flex-row"
      )}
    >
      {hasColors &&
        colors.map((color) => {
          return (
            <div className={isVertical ? "my-1 flex" : "m-0"}>
              <button
                id={color.name}
                className={classNames(
                  "rounded-full",
                  "focus:ring-1  focus:ring-black",
                  isVertical
                    ? "h-7 w-7 mr-2 mb-1 focus:ring-offset-[1.8px]"
                    : "h-5 w-5 mr-1 focus:ring-offset-[.7px]"
                )}
                style={{
                  backgroundColor: color.hexCode,
                }}
              ></button>
              {isVertical && <div className="font-medium">{color.name}</div>}
            </div>
          );
        })}
      <div>{!isVertical && <SeeMoreColorsButton />}</div>
    </div>
  );
};

function SeeMoreColorsButton() {
  const handleSeeMoreColorsClick = () => {
    console.log("I clicked!");
  };
  return (
    <button
      className={classNames(
        "flex justify-center items-center",
        "h-5 w-5 mr-1",
        "border rounded-full border-black"
      )}
    >
      <div className="p-2" onClick={handleSeeMoreColorsClick}>
        <BiPlus />
      </div>
    </button>
  );
}
