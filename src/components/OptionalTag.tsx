import classNames from "classnames";

interface OptionalTagProps {
  tagText?: string;
  backgroundColor?:string;
}

export const OptionalTag: React.FC<OptionalTagProps> = ({ tagText }) => {
  return (
    <div
      className={classNames(
        "absolute right-4 top-2",
        "rounded",
        "p-2",
        "text-xs",
        "bg-white",
        "z-10"
      )}
    >
      {tagText}
    </div>
  );
};
