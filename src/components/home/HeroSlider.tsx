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
    }, 4000);
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
              <img
                src={slide}
                loading="lazy"
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center bg-gray-100 transition-all duration-500 ease-in-out"
                onLoad={(e) => e.currentTarget.classList.remove("bg-gray-100")}
              />
            </div>
          ))}
        </div>

        {/* Dots / Pagination */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
