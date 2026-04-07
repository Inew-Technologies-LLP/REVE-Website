import { useState, useEffect, useRef } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";

import img1 from "../../assets/custom-gallery/1.webp";
import img2 from "../../assets/custom-gallery/2.webp";
import img3 from "../../assets/custom-gallery/3.webp";
import img4 from "../../assets/custom-gallery/4.webp";
import img5 from "../../assets/custom-gallery/5.webp";
import img6 from "../../assets/custom-gallery/6.webp";
import img7 from "../../assets/custom-gallery/7.webp";
import img8 from "../../assets/custom-gallery/8.webp";
import img9 from "../../assets/custom-gallery/9.webp";
import img10 from "../../assets/custom-gallery/10.webp";
import img11 from "../../assets/custom-gallery/11.webp";
import img12 from "../../assets/custom-gallery/12.webp";
import img13 from "../../assets/custom-gallery/13.webp";
import img14 from "../../assets/custom-gallery/14.webp";
import img15 from "../../assets/custom-gallery/15.webp";
import img16 from "../../assets/custom-gallery/16.webp";
import LazyImage from "../../components/LazyImage";


import { Link } from "react-router-dom";

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16,
];

export default function HamperGallery() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 296;
  const gap = 32;

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

 
  const maxIndex = images.length - visibleCards;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + visibleCards <= maxIndex
        ? prev + visibleCards
        : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - visibleCards >= 0
        ? prev - visibleCards
        : maxIndex - (maxIndex % visibleCards)
    );
  };

  return (
    <section
      className="w-full py-[60px] sm:py-[80px] lg:py-[100px]"
      style={{
        background: "linear-gradient(135deg, #FFF4F4, #FFCFCF)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[64px]">

        {/* Header */}
        <div className="mb-[40px]">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Dancing_Script'] mb-[16px]">
            Image Gallery
          </div>

          <div className="text-base sm:text-lg font-['Roboto'] mb-[24px]">
            Here are some of the custom orders we have curated
          </div>

          <button className="border border-black w-[127px] h-[48px] hover:bg-black hover:text-white transition">
            <Link
              to="/contact"
              className="w-full h-full flex items-center justify-center"
            >
              Contact Us
            </Link>
          </button>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Visible Area */}
          <div
            ref={containerRef}
            className="overflow-hidden w-full"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: visibleCards === 1 ? 0 : `${gap}px`,
                transform:
                  visibleCards === 1
                    ? `translateX(-${index * 100}%)`
                    : `translateX(-${index * (cardWidth + gap)}px)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    width:
                      visibleCards === 1
                        ? "100%"
                        : cardWidth,
                    height:
                      visibleCards === 1
                        ? 370
                        : 380,
                    flexShrink: 0,
                  }}
                  className="bg-gray-300"
                >
                  <LazyImage
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-fit"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div
            className="
              flex gap-4
              justify-center
              mt-6
              lg:absolute lg:right-[30px] lg:-bottom-[60px] lg:mt-0
            "
          >
            <button
              onClick={prevSlide}
              className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] bg-white rounded-full flex items-center justify-center border border-black shadow-md"
            >
              <img src={leftArrow} alt="Left" className="w-[16px] lg:w-[18px]" />
            </button>

            <button
              onClick={nextSlide}
              className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] bg-white rounded-full flex items-center justify-center border border-black shadow-md"
            >
              <img src={rightArrow} alt="Right" className="w-[16px] lg:w-[18px]" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-[40px] justify-center lg:justify-start">
            {Array.from({
              length: Math.ceil(images.length / visibleCards),
            }).map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i * visibleCards)}
                className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
                  i * visibleCards === index
                    ? "bg-black"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}