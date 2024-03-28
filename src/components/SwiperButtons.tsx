import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import classNames from "classnames";

export const NextButton = () => {
  return (
    <button
      className={classNames(
        "h-9 w-9 p-2",
        "lg:flex justify-center items-center",
        "hidden",
        "rounded-full border border-pink",
        "bg-white",
        "text-base"
      )}
    >
      <div>
        <HiArrowRight />
      </div>
    </button>
  );
};

export const PrevButton = () => {
  return (
    <button
      className={classNames(
        "h-9 w-9 p-2",
        "lg:flex justify-center items-center",
        "hidden",
        "rounded-full border border-pink",
        "bg-white",
        "text-base"
      )}
    >
      <div>
        <HiArrowLeft />
      </div>
    </button>
  );
};
