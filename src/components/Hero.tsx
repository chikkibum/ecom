import { useState, useEffect } from "react";
import img from "@/assets/IMG_6402.JPG"
export const Hero = () => {
  const images = [
    img,
    "https://res.cloudinary.com/dwtytn7fl/image/upload/v1757781366/bg-header_wmpeb5.png",
    "https://preventcancer.org/wp-content/uploads/2024/11/Untitled-design-10-800x533.png",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/hookah_bar.jpg?VersionId=OLwnCBXN3GFRm1doWxJfIvOVCNE_3JOE&size=690:388",
    "https://www.healthywomen.org/media-library/hookah.jpg?id=33738009&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C30",
    "https://assets.clevelandclinic.org/transform/LargeFeatureImage/669b6d04-a4c5-4fa4-adab-9cfd67ac3acf/smoking-hookah-1293322038",
  ];
  const [current, setCurrent] = useState(0);

  // Slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden border border-gray-400 dark:border-gray-600">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="carousel"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all ${current === idx ? "scale-125 bg-primary" : "opacity-60"}`}
          />
        ))}
      </div>
    </div>
  );
}