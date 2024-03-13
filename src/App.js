import { Tile } from "./components/Tile";
import { SwiperContainer } from "./components/Swiper-Container";
import { AddToCartButton } from "./components/CartFeatures";
import { renderedTiles } from "./components/Tile";
import { register } from "swiper/element/bundle";
import { PrevButton, NextButton } from "./components/SwiperButtons";
register();

function App() {
  return (
    <div className="flex justify-center text-3xl items-center m-16 text-chocolate">
      <PrevButton />
      <SwiperContainer>{renderedTiles}</SwiperContainer>
      <NextButton />
      {/* <swiper-container
        slides-per-view="3"
        speed="500"
        loop="true"
        css-mode="true"
      >
        <swiper-slide>slide 1</swiper-slide>
        <swiper-slide>slide 2</swiper-slide>
        <swiper-slide>slide 3</swiper-slide>
      </swiper-container> */}
    </div>
  );
}

export default App;
