import { StarRating } from "../images/Star";

export const Tile: React.FC = () => {
  return (
    <div
      className="flex-col mr-[16px] w-[400px] h-[500px] rounded-lg border-pink border
    "
    >
      <img
        data-hint="product-image"
        className=" w-full h-5/6 rounded-t-lg"
        src="https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854"
        alt="product-image"
      />
      <div
        data-hint="product-details"
        className="bg-white w-full px-4 py-3 h-1/6 text-sm rounded-lg"
      >
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
        </div>
      </div>
    </div>
  );
};
