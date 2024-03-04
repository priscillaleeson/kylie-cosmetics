const eachStar: React.ReactElement = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.20233 1.31286C8.20813 1.29448 8.21525 1.28891 8.21902 1.28632C8.22509 1.28215 8.23579 1.27792 8.25 1.27792C8.26421 1.27792 8.27492 1.28215 8.28099 1.28632C8.28476 1.28891 8.29187 1.29448 8.29768 1.31286L9.79246 6.04476C9.89102 6.35675 10.1804 6.56885 10.5076 6.56885H15.3683C15.387 6.56885 15.3945 6.57377 15.3983 6.57669C15.4042 6.5812 15.4114 6.58993 15.4157 6.60308C15.4201 6.61622 15.4196 6.62753 15.4175 6.63466C15.4162 6.63928 15.4132 6.64772 15.3982 6.6589L11.4467 9.6119C11.1912 9.80283 11.0844 10.1345 11.1804 10.4386L12.6852 15.2021C12.6909 15.2202 12.6884 15.2289 12.6868 15.2333C12.6842 15.2402 12.678 15.2498 12.6665 15.2579C12.655 15.2661 12.6439 15.2688 12.6365 15.269C12.6319 15.269 12.6229 15.2686 12.6076 15.2572L8.69897 12.3363C8.43272 12.1373 8.06728 12.1373 7.80104 12.3363L3.89241 15.2572C3.87715 15.2686 3.86815 15.269 3.86349 15.269C3.85611 15.2688 3.845 15.2661 3.83353 15.2579C3.82205 15.2498 3.81579 15.2402 3.81323 15.2333C3.81161 15.2289 3.80906 15.2202 3.8148 15.2021L5.31956 10.4386C5.41563 10.1345 5.30884 9.80283 5.05335 9.6119L1.10179 6.6589C1.08684 6.64772 1.08376 6.63928 1.08246 6.63467C1.08045 6.62753 1.07991 6.61622 1.08428 6.60308C1.08865 6.58993 1.09585 6.5812 1.10173 6.57669C1.10553 6.57377 1.11305 6.56885 1.13172 6.56885H5.99238C6.31956 6.56885 6.60899 6.35675 6.70754 6.04476L8.20233 1.31286Z"
      fill="#393939"
      stroke="#393939"
      stroke-width="0.7"
    ></path>
  </svg>
);

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
      <div className="text-sm">{`(${numberOfRatings})`}</div>
      <div></div>
    </div>
  );
};
