

interface ColorSwatchesProps {
  colors: {
    name?: string;
    hexCode?: string;
    featuredImage?: string;
    secondaryImage?: string;
  }[];
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = ({ colors }) => {
  let colorSwatchArray;

  if (colors.length > 0) {
    colorSwatchArray = colors.map((color) => {
      return (
        <button
          id={color.name || undefined}
          className="rounded-full border-black h-4 w-4 mr-1"
          style={{
            backgroundColor: color.hexCode || undefined,
          }}
        ></button>
      );
    });
  }

  return <div className="flex">{colorSwatchArray}</div>;
};
