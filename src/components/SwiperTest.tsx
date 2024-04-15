import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { ColorPickerSlideMenu } from "./ColorPickerSlideMenu";
import "swiper/css/navigation";
import "swiper/css";
import { PrevButton, NextButton } from "./SwiperButtons";
import { Tile } from "./Tile";
import { productData } from "../data/product-data";
import classNames from "classnames";

export const SwiperTest: React.FC = () => {
  return (
    <div className="mt-6 text-chocolate items-center">
      <style>
        {`.swiper-button-next, .swiper-button-prev {
                color: black;
                
            }
            .swiper-button-prev:after, .swiper-button-next:after {
                font-size: 20px;
            }`}
      </style>
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        loop={true}
        loopAdditionalSlides={4}
        modules={[Navigation, A11y]}
        navigation
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {productData &&
          productData.map((product) => (
            <>
              <SwiperSlide style={{}}>
                <div className="flex justify-center border">
                  <Tile
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    avgRating={product.avgRating}
                    numberOfRatings={product.numberOfRatings}
                    colorVariations={product.colorVariations}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center border">
                  <Tile
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    avgRating={product.avgRating}
                    numberOfRatings={product.numberOfRatings}
                    colorVariations={product.colorVariations}
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        ...
      </Swiper>
      {/* <div
        data-hint="swiper-container"
        className={classNames(
          "flex justify-center items-center",
          " text-3xl text-chocolate"
        )}
      >
        <PrevButton />
        <div
          className={classNames(
            "min-[950px]:flex-nowrap",
            "flex justify-center items-center flex-wrap",
            "ml-[16px]"
          )}
        >
          {productData &&
            productData.map((product) => (
              <Tile
                key={product.id}
                name={product.name}
                price={product.price}
                tag={product.tag}
                avgRating={product.avgRating}
                numberOfRatings={product.numberOfRatings}
                colorVariations={product.colorVariations}
              />
            ))}
        </div>
        <NextButton />
      </div> */}
    </div>
  );
};
