import { BiPlus, BiMinus } from "react-icons/bi";

export const QuantitySelector = () => {
  return (
    <div className="flex justify-around items-center h-7 border border-grey rounded">
      <button className="px-4">
        <BiMinus />
      </button>
      <input value="1" className="outline-none" size={1}></input>
      <button className="px-4">
        <BiPlus />
      </button>
    </div>
  );
};

export const AddToCartButton = () => {
  return (
    <button className="bg-grey hover:bg-white hover:text-chocolate text-[10px] text-white border border-grey rounded h-7 px-10 py-1 flex justify-center items-center">
      add to cart - $17
    </button>
  );
};
