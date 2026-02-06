import { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/image1.png", "/image27.png","/image28.png","/image29.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[70vh] w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="h-full w-full bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold animate-pulse">
          Handled with <br /> AppleCare.
        </h1>
      </div>
    </div>
  );
}
