import classNames from "classnames";
export const OpacityLayer = ({
  showColorPickerSlideMenu,
}: {
  showColorPickerSlideMenu?: boolean;
}) => {
  return (
    <div
      data-hint="opacity-layer"
      className={classNames(
        "absolute right-0 left-0 bottom-0 top-0 bg-white z-50 h-screen",
        showColorPickerSlideMenu
          ? "opacity-60"
          : "opacity-0 pointer-events-none"
      )}
    ></div>
  );
};
