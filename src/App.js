import { SwiperContainer } from "./components/SwiperContainer";
import { register } from "swiper/element/bundle";
import { PrevButton, NextButton } from "./components/SwiperButtons";
import { LogoWrapper } from "./components/LogoWrapper";
import { ColorPickerSlideMenu } from "./components/ColorPickerSlideMenu";
import { OpacityLayer } from "./components/OpacityLayer";

register();

function App() {
  return (
    <div>
      <LogoWrapper />
      <SwiperContainer />
      {/* <swiper-container
        slides-per-view="3"
        speed="500"
        loop="true"
        css-mode="true"
      >
        <swiper-slide>slide 1</swiper-slide>
        <swiper-slide>slide 2</swiper-slide>
  <swiper-slide>slide 3</swiper-slide> */}
    </div>
  );
}

export default App;
