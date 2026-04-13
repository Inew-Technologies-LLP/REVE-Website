import { useState, useEffect } from "react";
import actionBg from "../../assets/action3.png";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import img1 from "../../assets/about-gallery/1.webp";
import img2 from "../../assets/about-gallery/2.webp";
import img3 from "../../assets/about-gallery/3.webp";
import img4 from "../../assets/about-gallery/4.webp";
import img5 from "../../assets/about-gallery/5.webp";
import LazyImage from "../../components/LazyImage";


const originalImages = [img1, img2, img3, img4, img5];
const GAP = 32;

export default function AboutGallery() {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [cardWidth, setCardWidth] = useState(405);
  const [visibleCards, setVisibleCards] = useState(3);

  const total = originalImages.length;

  // Responsive logic (UNCHANGED)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCards(1);
        setCardWidth(width - 64);
      } 
      else if (width >= 640 && width < 1024) {
        setVisibleCards(2);
        const containerWidth = width - 120;
        const calculatedWidth = Math.floor((containerWidth - GAP) / 2);
        setCardWidth(calculatedWidth);
      } 
      else if (width >= 1024 && width < 1280) {
        setVisibleCards(2);
        const containerWidth = 900; 
        const calculatedWidth = Math.floor((containerWidth - GAP) / 2);
        setCardWidth(calculatedWidth);
      } 
      else {
        setVisibleCards(3);
        setCardWidth(405);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone images dynamically (UNCHANGED)
  const images = [
    ...originalImages.slice(-visibleCards),
    ...originalImages,
    ...originalImages.slice(0, visibleCards),
  ];

  // Reset index whenever visibleCards changes
  useEffect(() => {
    setIndex(visibleCards);
  }, [visibleCards]);

  // ✅ Continuous Infinite Loop Reset
  useEffect(() => {
    if (index === total + visibleCards) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCards);
      }, 500);
    }

    if (index === visibleCards - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(total + visibleCards - 1);
      }, 500);
    }
  }, [index, total, visibleCards]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  // ✅ Move ONE slide at a time
  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden">
      <img
        src={actionBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto py-16">
        <div className="relative">

          {/* VIEWPORT */}
          <div className="flex justify-center w-full overflow-hidden">
            <div
              className="overflow-hidden"
              style={{
                width: `${visibleCards * cardWidth + (visibleCards - 1) * GAP}px`,
                maxWidth: "100%",
              }}
            >
              <div
                className={`flex ${
                  transition ? "transition-transform duration-500 ease-in-out" : ""
                }`}
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${index * (cardWidth + GAP)}px)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={`${img}-${i}`}
                    className="flex-shrink-0"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardWidth}px`,
                    }}
                  >
                    <LazyImage
                      src={img}
                      alt="Gallery"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-[22px] top-1/2 -translate-y-1/2
                       w-12 h-12 bg-white shadow-lg
                       flex items-center justify-center
                       border border-black z-20 rounded-full"
          >
            <img src={leftArrow} alt="Left" className="w-5 h-5" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-[22px] top-1/2 -translate-y-1/2
                       w-12 h-12 bg-white shadow-lg
                       flex items-center justify-center
                       border border-black z-20 rounded-full"
          >
            <img src={rightArrow} alt="Right" className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}