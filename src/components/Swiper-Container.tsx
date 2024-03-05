export const SwiperContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-wrap min-[950px]:flex-nowrap justify-center items-center">
      {children}
    </div>
  );
};
