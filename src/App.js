import { Tile } from "./components/Tile";
import { SwiperContainer } from "./components/Swiper-Container";
import { AddToCartButton } from "./components/CartFeatures";
import { renderedTiles } from "./components/Tile";

function App() {
  return (
    <div className="flex justify-center text-3xl items-center m-16 text-chocolate">
      <SwiperContainer>{renderedTiles}</SwiperContainer>
    </div>
  );
}

export default App;
