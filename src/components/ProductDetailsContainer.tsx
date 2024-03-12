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
      className="bg-white h-2/6 py-3 text-sm rounded-lg relative"
    >
      {children}
    </div>
  );
};
