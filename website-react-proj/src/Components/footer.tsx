import viteLogo from "/vite.svg";

function footer() {
  return (
    <div className="bg-dark text-white">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 px-3 py-5">
        <div className="col align-self-center">
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
          <p className="text-body-primary text-center ">
            PT. Maju Bersama © 2024 All Rights Reserved
          </p>
        </div>
        <div className="col mb-3" />
        <div className="col mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-4">
              <h5>Address</h5>
              <p className="p-0 m-0 fw-light">
                Jl. Menuju Surga Kav.999, Kota Sigma, Jawa Utara, 009988
              </p>
            </li>
            <li className="nav-item mb-2">
              <h5>Contact Person</h5>
              <p className="p-0 m-0 fw-light">
                Sigma Mewing Gyatt: (+22) 0088-9928-9403
              </p>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Our Social Media</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-primary">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
