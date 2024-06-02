import reactLogo from "/react.svg";

interface Props {
  description: string;
  buttonText: string;
  isActive: boolean;
}

function carouselItem({ description, buttonText, isActive }: Props) {
  return (
    <div className={isActive ? "carousel-item active" : "carousel-item"}>
      <img
        className="w-100 d-flex justify-content-center"
        src={reactLogo}
        width="800"
        height="400"
        alt="Second slide"
      />
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
