import { BiPlus } from "react-icons/bi";
import classNames from "classnames";

interface ColorSwatchesProps {
  isVertical: boolean;
  showOpacityLayer?: boolean;
  setShowOpacityLayer: (showOpacityLayer: boolean) => void;
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
  showOpacityLayer,
  setShowOpacityLayer,
}) => {
  const hasColors = colors.length > 0;

  const handleSeeMoreColorsClick = () => {
    console.log("I clicked!");
    setShowOpacityLayer(true);
  };

  return (
    <div
      className={classNames(
        "flex relative top-0 pb-1",
        { "flex-col": isVertical }
        // isVertical ? "flex-col" : "flex-row"
      )}
    >
      {hasColors &&
        colors.map((color) => {
          return (
            <div
              className={classNames({
                "my-2 flex relative": isVertical,
              })}
            >
              {/* <div className={isVertical ? "my-1 flex" : "m-0"}> */}
              <button
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
                <div className="font-medium ml-9">{color.name}</div>
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
            <div className="p-2">
              <BiPlus onClick={handleSeeMoreColorsClick} />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

// function SeeMoreColorsButton() {
//   const handleSeeMoreColorsClick = () => {
//     console.log("I clicked!");
//   };
//   return (
//     <button
//       className={classNames(
//         "flex justify-center items-center",
//         "h-5 w-5 mr-1",
//         "border rounded-full border-black"
//       )}
//     >
//       <div className="p-2" onClick={handleSeeMoreColorsClick}>
//         <BiPlus />
//       </div>
//     </button>
//   );
//
