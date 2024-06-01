import { useState } from "react";
import CarouselItem from "./carouselItem";

function carousel() {
  let itemlist: { description: string; buttonText: string }[] = [
    { description: "Description 1", buttonText: "Button 1" },
    { description: "Description 2", buttonText: "Button 2" },
    { description: "Description 3", buttonText: "Button 3" },
  ];

  const [itemIdx, setItemIdx] = useState(0);

  return (
    <div className="carousel slide mb-6">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className={itemIdx != 0 ? "" : "active"}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className={itemIdx != 1 ? "" : "active"}
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className={itemIdx != 2 ? "" : "active"}
          aria-current="true"
        ></button>
      </div>
      <div className="carousel-inner">
        {itemlist.map((item, index) => (
          <CarouselItem
            description={item.description}
            buttonText={item.buttonText}
            isActive={itemIdx === index}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
        onClick={() =>
          setItemIdx((itemIdx) =>
            itemIdx < 1 ? itemlist.length - 1 : itemIdx - 1
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
        onClick={() => setItemIdx((itemIdx) => (itemIdx + 1) % itemlist.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default carousel;
