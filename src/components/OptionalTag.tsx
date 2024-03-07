interface OptionalTagProps {
  tagText?: string;
}

export const OptionalTag: React.FC<OptionalTagProps> = ({ tagText }) => {
  return (
    <div className="rounded p-2 text-xs bg-white absolute z-10 right-4 top-2">
      {tagText}
    </div>
  );
};
