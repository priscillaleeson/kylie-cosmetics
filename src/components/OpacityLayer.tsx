import classNames from "classnames";
// export const OpacityLayer = ({
//   showColorPickerSlideMenu,
// }: {
//   showColorPickerSlideMenu?: boolean;
// }) => {
//   return (
//     <div
//       data-hint="opacity-layer"
//       className={classNames(
//         " absolute right-0 left-0 top-0 bg-white z-50 h-screen",
//         showColorPickerSlideMenu
//           ? "opacity-60"
//           : "opacity-0 pointer-events-none"
//       )}
//     ></div>
//   );
// };

export const OpacityLayer = ({
  handleExitClick,
}: {
  handleExitClick: () => void;
}) => {
  return (
    <div
      data-hint="opacity-layer"
      onClick={handleExitClick}
      className={classNames(
        "fixed right-0 left-0 top-0 bg-white z-50 h-screen opacity-60"
      )}
    ></div>
  );
};
