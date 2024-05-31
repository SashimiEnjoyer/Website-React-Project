import viteLogo from "/vite.svg";
import { useState } from "react";

function header() {
  const menuItem = ["Home", "Profile", "Feature", "Pricing"];
  const [currentMenuIdx, setMenuIdx] = useState(0);

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src={viteLogo}
                className="bi me-2"
                alt="Vite logo"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              />
            </a>

            <ul className="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {menuItem.map((item, index) => (
                <li className="nav-item">
                  <a
                    href="#"
                    className={
                      currentMenuIdx === index ? "nav-link active" : "nav-link"
                    }
                    onClick={() => {
                      setMenuIdx(index);
                      console.log("Clicked home! " + { currentMenuIdx });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
