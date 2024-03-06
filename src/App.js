import { Tile } from "./components/Tile";
import { SwiperContainer } from "./components/Swiper-Container";
import { AddToCartButton } from "./components/CartFeatures";

function App() {
  return (
    <div className="flex justify-center text-3xl items-center m-16 text-chocolate">
      <SwiperContainer>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </SwiperContainer>
    </div>
  );
}

export default App;
