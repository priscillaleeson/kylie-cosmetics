export const placeholderColorArray = ["#A95952", "#9C595A", "#9D5546"];

interface ColorSwatchesProps {
  colors: string[];
}

export const ColorSwatches: React.FC<ColorSwatchesProps> = ({ colors }) => {
  let colorSwatchArray;

  if (colors.length > 0) {
    colorSwatchArray = colors.map((color) => {
      return (
        <div
          className="rounded-full border-black h-4 w-4 mr-1"
          style={{
            backgroundColor: color,
          }}
        ></div>
      );
    });
  }

  return <div className="flex">{colorSwatchArray}</div>;
};
