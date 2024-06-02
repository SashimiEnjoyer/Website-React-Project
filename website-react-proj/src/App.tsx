import Header from "./Components/header.tsx";
import HeaderAgain from "./Components/headerAgain.tsx";
import FooterAgain from "./Components/footerAgain.tsx";
import Footer from "./Components/footer.tsx";
import Carousel from "./Components/carousel.tsx";
import SimpleBody from "./Components/simpleBody.tsx";
import BootstrapCarousel from "./Components/bootstrapCarousel.tsx";
import SimpleBodyAgain from "./Components/simpleBodyAgain.tsx";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <BootstrapCarousel />
      <SimpleBody />
      <SimpleBodyAgain />
      <FooterAgain />
    </>
  );
}

export default App;
