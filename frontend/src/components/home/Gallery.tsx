import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.jpg";

import img7 from "../../assets/gallery/7.jpg";
import img8 from "../../assets/gallery/8.jpg";
import img9 from "../../assets/gallery/9.jpg";
import img10 from "../../assets/gallery/10.jpg";
import img11 from "../../assets/gallery/11.jpg";
import img12 from "../../assets/gallery/12.jpg";

import galleryBg from "../../assets/homegallerybg.png";

export default function Gallery() {

  const topImages = [img1, img2, img3, img4, img5, img6];
  const bottomImages = [img7, img8, img9, img10, img11, img12];

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-14 md:py-14">

      {/* Background Image */}
      <img
        src={galleryBg}
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Dancing_Script'] leading-tight mb-10">
            Our Gallery
          </h2>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20" />

      {/* MOVING GALLERY */}
      <div className="space-y-12 sm:space-y-8 overflow-hidden w-full">

        {/* Top Row */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-6 sm:gap-8 animate-marquee w-max">
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                className="
                  w-[260px] h-[250px]
                  sm:w-[320px] sm:h-[250px]
                  md:w-[380px] md:h-[350px]
                  lg:w-[416px] lg:h-[390px]
                  object-cover object-center flex-shrink-0
                "
              />
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-6 sm:gap-8 animate-marquee-reverse w-max">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                className="
                  w-[260px] h-[250px]
                  sm:w-[320px] sm:h-[250px]
                  md:w-[380px] md:h-[350px]
                  lg:w-[416px] lg:h-[390px]
                  object-cover object-center flex-shrink-0
                "
              />
            ))}
          </div>
        </div>

      </div>

      <div className="mt-12 sm:mt-16 md:mt-20" />

      {/* Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
          }
        `}
      </style>

    </section>
  );
}