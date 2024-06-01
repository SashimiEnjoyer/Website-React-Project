import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/header.tsx";
import Footer from "./Components/footer.tsx";
import Carousel from "./Components/carousel.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="d-flex justify-content-center p-2">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-center">Vite + React</h1>
        <div className="card">
          <button
            className="btn btn-outline-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Add
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={() => setCount((count) => count - 1)}
          >
            Sub
          </button>
          <p className="d-flex justify-content-center m-2"> count is {count}</p>
        </div>
        <p className="text-center">
          Click on the Vite and React logos to learn more!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
