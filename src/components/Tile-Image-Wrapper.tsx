import { OptionalTag } from "./OptionalTag";
import { useState } from "react";

export const TileImageWrapper = ({
  showProductDetailsMenu,
  imgSrc,
  imgOverlaySrc,
  tag,
}: {
  showProductDetailsMenu: boolean;
  imgSrc: string;
  imgOverlaySrc: string;
  tag?: string;
}) => {
  const [showOptionalTag, setShowOptionalTag] = useState(false);

  return (
    <div>
      <div data-hint="image-container" className="h-4/6 relative">
        {tag && <OptionalTag tagText={tag} />}
        <img
          data-hint="product-image"
          className="relative object-cover w-full h-full rounded-t-lg"
          src={imgSrc}
          alt="product-placeholder"
        />
        <img
          style={{
            opacity: showProductDetailsMenu ? "1" : "0",
            transition: "opacity 0.2s",
          }}
          data-hint="product-image-overlay absolute"
          className="absolute top-0 object-cover w-full h-full rounded-t-lg"
          src={imgOverlaySrc}
          alt="product-placeholder"
        />
      </div>
    </div>
  );
};
