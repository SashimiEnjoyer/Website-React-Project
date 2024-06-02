import Header from "./Components/header.tsx";
import HeaderAgain from "./Components/headerAgain.tsx";
import FooterAgain from "./Components/footerAgain.tsx";
import Footer from "./Components/footer.tsx";
import Carousel from "./Components/carousel.tsx";
import SimpleBody from "./Components/simpleBody.tsx";
import BootstrapCarousel from "./Components/bootstrapCarousel.tsx";
import SimpleBodyAgain from "./Components/simpleBodyAgain.tsx";
import BodyWithPictures from "./Components/bodyWithPictures.tsx";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <BootstrapCarousel />
      <BodyWithPictures />
      <SimpleBody />
      <SimpleBodyAgain />
      <FooterAgain />
    </>
  );
}

export default App;
