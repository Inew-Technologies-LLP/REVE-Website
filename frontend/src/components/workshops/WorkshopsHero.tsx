import { useEffect, useState } from "react";
import workshopBg from "../../assets/workshopbg1.png";
import { Link } from "react-router-dom";

interface ImageItem {
  id: number;
  image_url: string;
}

export default function WorkshopsHero() {

  const BASE_URL = import.meta.env.VITE_API_URL;

  const [images, setImages] = useState<ImageItem[]>([]);

  // ✅ FETCH HERO IMAGES
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`${BASE_URL}/workshops-hero`);
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  // ✅ SPLIT INTO TOP & BOTTOM
  const topImages = images.slice(0, 4);
  const bottomImages = images.slice(4, 8);

  return (
    <section className="relative w-full min-h-screen bg-[#D3EED4] overflow-hidden">

      {/* Background */}
      <img
        src={workshopBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Container */}
      <div
        className="
          relative max-w-[1440px] mx-auto
          px-5 sm:px-8 md:px-12 lg:px-[80px]
          min-h-screen
          flex flex-col xl:flex-row
          justify-start xl:justify-between
          items-start xl:items-center
        "
      >

        {/* LEFT TEXT SECTION */}
        <div className="w-full xl:w-[640px] z-10 pt-[80px] sm:pt-[100px] xl:pt-0 xl:pr-12">

          <h2 className="font-dancing font-bold
                         text-[28px] sm:text-[36px] md:text-[44px] xl:text-[56px]
                         mb-[20px] md:mb-[24px] leading-tight">
            Hands-On Learning at<br /> Rêve
          </h2>

          <div className="w-full xl:w-[560px]
                          text-base sm:text-lg
                          font-normal font-['Quicksand']
                          leading-7
                          mb-[32px] md:mb-[40px]">
            Workshops at Rêve Patisserie are designed to share knowledge, technique, and experience. Each session is a thoughtful mix of demonstrations and hands-on practice, allowing participants to learn by doing while understanding the fundamentals behind each process.
            <br /><br />
            Our workshops are suitable for beginners, enthusiasts, and groups looking for a guided baking or culinary experience.
          </div>

          <Link
            to="/contact"
            className="inline-block bg-black px-[28px] py-[12px] md:px-[32px] md:py-[14px]"
          >
            <div className="text-white text-sm sm:text-base font-normal font-['Roboto']">
              Contact Now To Know More
            </div>
          </Link>

        </div>

        {/* RIGHT GALLERY SECTION */}
        <div
          className="
            relative
            w-full
            xl:w-[720px]
            h-auto
            mt-[60px] xl:mt-0
            2xl:absolute 2xl:right-0 2xl:top-0
            xl:h-full
            flex items-center
          "
        >
          <div className="w-full overflow-hidden">

            {/* TOP ROW */}
            <div className="relative flex overflow-hidden mb-6">
              <div className="flex gap-4 sm:gap-6 animate-scroll-left min-w-max">

                {[...topImages, ...topImages].map((img, i) => (
                  <img
                    key={"top-" + i}
                    src={img.image_url}
                    alt="Workshop"
                    className="
                      w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[416px]
                      h-[220px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[340px]
                      object-cover flex-shrink-0
                    "
                  />
                ))}

              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="relative flex overflow-hidden">
              <div className="flex gap-4 sm:gap-6 animate-scroll-right min-w-max">

                {[...bottomImages, ...bottomImages].map((img, i) => (
                  <img
                    key={"bottom-" + i}
                    src={img.image_url}
                    alt="Workshop"
                    className="
                      w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[416px]
                      h-[220px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[340px]
                      object-cover flex-shrink-0
                    "
                  />
                ))}

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          .animate-scroll-left {
            animation: scrollLeft 40s linear infinite;
          }

          .animate-scroll-right {
            animation: scrollRight 40s linear infinite;
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

    </section>
  );
}