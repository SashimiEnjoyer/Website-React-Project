interface Props {
  description: string;
  buttonText: string;
  isActive: boolean;
}

function carouselItem({ description, buttonText, isActive }: Props) {
  return (
    <div className={isActive ? "carousel-item active" : "carousel-item"}>
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect
          width="100%"
          height="100%"
          fill="var(--bs-secondary-color)"
        ></rect>
      </svg>
      <div className="container">
        <div className="carousel-caption text-start">
          <h1>Example headline.</h1>
          <p className="opacity-75">{description}</p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              {buttonText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default carouselItem;
