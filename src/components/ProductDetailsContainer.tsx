import React from "react";

interface ProductDetailsContainerProps {
  children: React.ReactNode;
}

export const ProductDetailsContainer = ({
  children,
}: ProductDetailsContainerProps) => {
  return (
    <div
      data-hint="product-details"
      className="bg-white w-full px-3 py-3 h-2/6 text-sm rounded-lg"
    >
      {children}
    </div>
  );
};
