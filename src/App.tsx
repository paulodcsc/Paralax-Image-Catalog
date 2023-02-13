import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";

function App() {
  const handleOnDown = async (e: MouseEvent) => {
    const track = document.getElementById("image-slide")!;
    track.dataset.mouseDownAt = e.clientX.toString();
    console.log(track.dataset.mouseDownAt);
  };

  window.onmousedown = (e) => handleOnDown(e);

  return (
    <>
      <Header />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
