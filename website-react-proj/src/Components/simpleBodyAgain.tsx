import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function simpleBodyAgain() {
  const [count, setCount] = useState(0);

  return (
    <div className="container px-4 py-5 mb-5 border">
      <div className="d-flex justify-content-center p-2">
        <a className="p-2" href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            height="50"
            width="50"
          />
        </a>
        <a className="p-2" href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            height="50"
            width="50"
          />
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
        <p className="text-center m-2"> count is {count}</p>
      </div>
      <h2 className="text-center m-2">
        Click on the Vite and React logos to learn more!
      </h2>
    </div>
  );
}

export default simpleBodyAgain;
