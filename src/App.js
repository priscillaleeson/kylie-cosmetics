import { Tile } from "./components/Tile";
import { SwiperContainer } from "./components/Swiper-Container";
import { AddToCartButton } from "./components/CartFeatures";

function App() {
  return (
    <div className="flex justify-center text-3xl m-40 text-chocolate">
      <SwiperContainer>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </SwiperContainer>
      <AddToCartButton />
    </div>
  );
}

export default App;
