import { StarRating } from "./Star";
import { ColorSwatches } from "./ColorSwatches";
import { placeholderColorArray } from "./ColorSwatches";
import { AddToCartButton, QuantitySelector } from "./CartFeatures";

export const Tile: React.FC = () => {
  return (
    <div
      className="flex-col mr-[16px] min-w-[200px] max-w-[400px] rounded-lg border-pink border
    "
    >
      <div data-hint="image-container" className="h-4/6">
        <img
          data-hint="product-image"
          className="object-cover w-full h-full rounded-t-lg"
          src="https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854"
          alt="product-placeholder"
        />
      </div>
      <div
        data-hint="product-details"
        className="bg-white w-full px-3 py-3 h-2/6 text-sm rounded-lg"
      >
        <div data-hint="color-swatch">
          <ColorSwatches colors={placeholderColorArray} />
        </div>
        <div>
          <div>
            {/* input rating from provided data here */}
            <StarRating avgRating={5} numberOfRatings={85} />
          </div>
          <div className="flex justify-between font-bold">
            <div>comes naturally</div>
            <div>$17</div>
          </div>
          <div>precision pout lip liner</div>
          <div
            data-hint="shopping-container"
            className="mt-2 flex justify-between"
          >
            <QuantitySelector />
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};
