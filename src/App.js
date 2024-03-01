import { Tile } from "./components/Tile";
import { SwiperContainer } from "./components/Swiper-Container";

function App() {
  return (
    <div className="flex justify-center text-3xl m-40 text-chocolate">
      <SwiperContainer>
        <Tile />
        <Tile />
        <Tile />
      </SwiperContainer>
    </div>
  );
}

export default App;
