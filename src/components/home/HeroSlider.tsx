import { useEffect, useState } from "react";
import { Carousel } from "../ui/carousel";

const images = [
  "/images/home/land1.jpg",
  "/images/home/land2.jpg",
  "/images/home/land3.jpg",
  "/images/home/land4.jpg",
  "/images/home/land5.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Carousel className="relative w-full h-full">
        <div className="relative w-full h-full">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
