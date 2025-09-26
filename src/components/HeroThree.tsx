import { useState, useEffect } from "react";
import ban4 from "@/assets/ban4.jpg"
import ban5 from "@/assets/ban5.jpg"
import ban6 from "@/assets/ban6.jpg"
export const HeroThree = () => {
  const images = [
    ban4,
    ban5,
    ban6
  ];
  const [current, setCurrent] = useState(0);

  // Slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden ">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="carousel"
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full bg-gray-300 dark:bg-white opacity-100 transition-all ${current === idx ? "scale-125 bg-primary" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}