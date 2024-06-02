import viteLogo from "/vite.svg";

function footerAgain() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://facebook.com "
                  target="_blank"
                  className="d-flex justify-content-center mb-3 link-body-emphasis text-decoration-none"
                >
                  <img
                    src={viteLogo}
                    className="bi me-2"
                    alt="Vite logo"
                    width="100"
                    height="100"
                    role="img"
                    aria-label="Bootstrap"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Address</h5>
              <p className="p-0 m-0">
                Jl. Menuju Surga Kav.999, Kota Sigma, Jawa Utara, 009988
              </p>
              <br></br>
              <h5>Contact Person</h5>
              <p className="p-0 m-0 fw-light">
                Sigma Mewing Gyatt: (+22) 0088-9928-9403
              </p>
              <br></br>
              <h5>Contact Person</h5>
              <p className="p-0 m-0 fw-light">
                Sigma Mewing Gyatt: (+22) 0088-9928-9403
              </p>
              <br></br>
              <h5>Contact Person</h5>
              <p className="p-0 m-0 fw-light">
                Sigma Mewing Gyatt: (+22) 0088-9928-9403
              </p>
              <br></br>
              <h5>Subrek pliss</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <img
                  src={viteLogo}
                  className="logo"
                  alt="Vite logo"
                  height="24"
                  width="24"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <img
                  src={viteLogo}
                  className="logo"
                  alt="Vite logo"
                  height="24"
                  width="24"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <img
                  src={viteLogo}
                  className="logo"
                  alt="Vite logo"
                  height="24"
                  width="24"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footerAgain;
