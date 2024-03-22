import classNames from "classnames";
export const OpacityLayer = ({ showOpacityLayer }: { showOpacityLayer?: boolean }) => {
  return (
    <div
      data-hint="opacity-layer"
      className={classNames(
        " absolute right-0 left-0 top-0 bg-white z-50 h-screen",
        showOpacityLayer ? "opacity-60" : "opacity-0 pointer-events-none"
      )}
    ></div>
  );
};
