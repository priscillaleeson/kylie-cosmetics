import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";

import classNames from "classnames";

export const CartWrapper = ({ price }: { price: number }) => {
  const [totalIncrementedCost, setTotalIncrementedCost] = useState(price);
  return (
    <div
      data-hint="shopping-container"
      className="mt-2 flex justify-between relative top-0 "
    >
      <QuantitySelector
        totalIncrementedCost={totalIncrementedCost}
        setTotalIncrementedCost={setTotalIncrementedCost}
        price={price}
      />
      <AddToCartButton totalIncrementedCost={totalIncrementedCost} />
    </div>
  );
};

export const QuantitySelector = ({
  totalIncrementedCost,
  setTotalIncrementedCost,
  price,
}: {
  totalIncrementedCost: number;
  setTotalIncrementedCost: React.Dispatch<React.SetStateAction<number>>;
  price: number;
}) => {
  const [counter, setCounter] = useState(1);

  const handleIncrementClick = () => {
    console.log("incrementing...");
    console.log(counter);
    setCounter(counter + 1);
    setTotalIncrementedCost(totalIncrementedCost + price);
  };

  const handleDecrementClick = () => {
    console.log("decrementing...");
    console.log(counter);
    if (counter > 1) {
      setCounter(counter - 1);
      setTotalIncrementedCost(totalIncrementedCost - price);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setCounter(1);
    } else {
      setCounter(parseInt(e.target.value));
    }
  };

  return (
    <div
      className={classNames(
        "hidden 2xl:flex",
        "justify-around",
        "mr-2 w-2/5 h-10",
        "border border-grey rounded"
      )}
    >
      <button className="px-4" onClick={handleDecrementClick}>
        <BiMinus />
      </button>
      <input
        value={counter}
        className="outline-none text-center"
        size={2}
        onChange={handleInputChange}
      ></input>
      <button className="px-4" onClick={handleIncrementClick}>
        <BiPlus />
      </button>
    </div>
  );
};

export const AddToCartButton = ({
  totalIncrementedCost,
}: {
  totalIncrementedCost: number;
}) => {
  return (
    <button
      onClick={() =>
        alert(
          `Precision Pout Lip Liner - $${totalIncrementedCost} added to cart!`
        )
      }
      className=" w-full 2xl:w-3/5 bg-grey hover:bg-white transition-colors ease-in-out duration-200 hover:text-chocolate text-[15px] text-white border border-grey rounded h-10  py-1 flex justify-center items-center"
    >
      add to cart - ${totalIncrementedCost}
    </button>
  );
};
