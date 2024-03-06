const placeholderImages = [
  {
    src1: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
    src2: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
  },
  {
    src1: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Swatch_800x.jpg?v=1701816844",
    src2: "https://kyliecosmetics.com/cdn/shop/files/KJC_LLPRP_23_ComesNaturally_Stylized_800x.jpg?v=1701816854",
  },
];

interface TileImageContainerProps {
  thumbnailPhoto: { src: string };
}
export const TileImageContainer: React.FC<TileImageContainerProps> = ({
  thumbnailPhoto,
}) => {
  return (
    <div>
      <div data-hint="image-container" className="h-4/6">
        <img
          data-hint="product-image"
          className="object-cover w-full h-full rounded-t-lg"
          src={thumbnailPhoto.src}
          alt="product-placeholder"
        />
      </div>
    </div>
  );
};
