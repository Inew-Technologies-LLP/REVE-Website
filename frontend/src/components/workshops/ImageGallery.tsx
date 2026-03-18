import { useState, useEffect } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import { Link } from "react-router-dom";

interface ImageItem {
  id: number;
  image_url: string;
}

export default function HamperGallery() {

  const [images, setImages] = useState<ImageItem[]>([]);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const cardWidth = 296;
  const gap = 32;

  // ✅ FETCH FROM DB
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("http://localhost:5000/workshops-gallery");
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  // ✅ RESPONSIVE
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
      setIndex(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalGroups = Math.floor(images.length / visibleCards);
  const maxIndex = (totalGroups - 1) * visibleCards;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + visibleCards <= maxIndex ? prev + visibleCards : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - visibleCards >= 0 ? prev - visibleCards : maxIndex
    );
  };

  return (
    <section
      className="w-full py-[60px] sm:py-[80px] lg:py-[100px] overflow-hidden"
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
          <div className="overflow-hidden lg:overflow-visible md:overflow-visible xl:overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: visibleCards === 1 ? 0 : `${gap}px`,
                transform:
                  visibleCards === 1
                    ? `translateX(-${(index / visibleCards) * 100}%)`
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
                        ? 300
                        : cardWidth,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={img.image_url}
                    alt="Gallery"
                    className="w-full h-full object-cover"
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
            {Array.from({ length: totalGroups }).map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i * visibleCards)}
                className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
                  Math.floor(index / visibleCards) === i
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