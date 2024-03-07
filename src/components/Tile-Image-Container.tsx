export const TileImageContainer = ({
  showProductDetailsMenu,
  imgSrc,
  imgOverlaySrc,
}: {
  showProductDetailsMenu: boolean;
  imgSrc: string;
  imgOverlaySrc: string;
}) => {
  return (
    <div>
      <div data-hint="image-container" className="h-4/6 relative">
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
