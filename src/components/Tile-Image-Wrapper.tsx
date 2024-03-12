import { OptionalTag } from "./OptionalTag";

export const TileImageWrapper = ({
  imgSrc,
  imgOverlaySrc,
  tag,
  showProductDetailsMenu,
}: {
  imgSrc: string;
  imgOverlaySrc: string;
  tag?: string;
  showProductDetailsMenu: boolean;
}) => {
  return (
    <div>
      <div data-hint="image-container" className=" relative pb-16">
        {tag && <OptionalTag tagText={tag} />}
        <img
          data-hint="product-image"
          className="relative object-cover w-full h-full rounded-t-lg"
          src={imgSrc}
          alt="product-placeholder"
        />
        <img
          data-hint="product-image-overlay absolute"
          className="absolute top-0 object-cover w-full h-full rounded-t-lg"
          src={imgOverlaySrc}
          alt="product-placeholder"
          style={{
            opacity: showProductDetailsMenu ? "1" : "0",
            transition: "opacity 0.2s",
          }}
        />
      </div>
    </div>
  );
};
