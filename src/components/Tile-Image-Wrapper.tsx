import { OptionalTag } from "./OptionalTag";
import classNames from "classnames";

export const TileImageWrapper = ({
  selectedColorOption,
  toggleProductImage,
  tag,
  showProductDetailsMenu,
}: {
  selectedColorOption: {
    productName: string;
    colorName: string;
    featuredImage: string;
    secondaryImage: string;
  };
  tag?: string;
  toggleProductImage: boolean;
  showProductDetailsMenu: boolean;
}) => {
  return (
    <div>
      <div data-hint="image-container" className=" relative pb-16">
        {tag && <OptionalTag tagText={tag} />}

        <img
          data-hint="product-image"
          className={classNames(
            "relative",
            "object-cover w-full h-full",
            "rounded-t-lg"
          )}
          src={selectedColorOption.featuredImage}
          alt={selectedColorOption.productName}
        />

        {toggleProductImage && (
          <img
            data-hint="product-image-overlay absolute"
            className={classNames(
              "absolute top-0 left-0 right-0",
              "object-cover",
              "w-full h-full",
              "rounded-t-lg"
            )}
            src={selectedColorOption.secondaryImage}
            alt={selectedColorOption.productName}
            style={{
              opacity: showProductDetailsMenu ? "1" : "0",
              transition: "opacity 0.2s",
            }}
          />
        )}
      </div>
    </div>
  );
};
