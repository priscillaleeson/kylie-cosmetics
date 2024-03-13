import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
export const NextButton = () => {
  return (
    <button className="hidden lg:flex rounded-full border border-pink h-8 w-8 p-2 text-base">
      <div>
        <HiArrowRight />
      </div>
    </button>
  );
};

export const PrevButton = () => {
  return (
    <button className="hidden lg:flex rounded-full border border-pink h-8 w-8 text-base p-2">
      <div>
        <HiArrowLeft />
      </div>
    </button>
  );
};
