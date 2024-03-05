import { eachStar } from "../images/star";

export const StarRating: React.FC<{
  avgRating: number;
  numberOfRatings: number;
}> = ({ avgRating, numberOfRatings }) => {
  let numberOfStarsDisplay;

  if (avgRating > 0) {
    const starDisplay = Array(avgRating).fill(eachStar);
    numberOfStarsDisplay = starDisplay;
  }
  return (
    <div className="flex">
      <div className="flex items-center">{numberOfStarsDisplay}</div>
      <div className="text-[10px]">{`(${numberOfRatings})`}</div>
      <div></div>
    </div>
  );
};
