import { useEffect, useState } from "react";
import workshopBg from "../../assets/workshopbg1.png";
import { Link } from "react-router-dom";
import LazyImage from "../../components/LazyImage";


interface ImageItem{
  id:number
  image_url:string
}

export default function WorkshopsHero() {

  const BASE_URL = import.meta.env.VITE_API_URL;

  const [images,setImages] = useState<ImageItem[]>([])

  useEffect(()=>{

    const fetchImages = async()=>{

      const res = await fetch(`${BASE_URL}/hamper-hero`);
      const data = await res.json()

      setImages(data)

    }

    fetchImages()

  },[])

  const topImages = images.slice(0,4).map(img=>img.image_url)
  const bottomImages = images.slice(4,8).map(img=>img.image_url)

  return (
    <section className="relative w-full min-h-screen bg-[#D3EED4] overflow-hidden">

      {/* Background */}
      <img
        src={workshopBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:pl-[80px] min-h-screen flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-center">

        {/* LEFT TEXT SECTION */}
        <div className="w-full xl:w-[640px] z-10 pt-[80px] sm:pt-[100px] xl:pt-0 xl:pr-12">

          <h2 className="font-dancing font-bold text-[32px] sm:text-[40px] lg:text-[56px] mb-[24px] leading-tight">
            Custom Hampers, Crafted Around Your Budget
          </h2>

          <div className="w-full xl:w-[590px] text-lg font-normal font-['Quicksand'] leading-7 mb-[40px]">
            From ₹1000 onwards fully tailored to your occasion, quantity, and taste.
          </div>

          <Link
            to="/contact"
            className="inline-block bg-black px-[32px] py-[14px]"
          >
            <div className="text-white text-base font-normal font-['Roboto'] leading-6">
              Enquire Now
            </div>
          </Link>

        </div>

        {/* RIGHT GALLERY */}
        <div className="relative w-full xl:w-[1000px] h-auto mt-[60px] xl:mt-0 2xl:absolute 2xl:right-0 2xl:top-0 xl:h-full overflow-hidden flex items-center">

          <div className="w-full overflow-hidden">

            {/* TOP ROW */}
            <div className="relative overflow-hidden mb-6">
              <div className="flex gap-4 sm:gap-6 animate-scroll-left min-w-max">
                {[...topImages, ...topImages].map((img, i) => (
                  <LazyImage
                    key={"top-" + i}
                    src={img}
                    alt="Hamper"
                    className="
                      w-[240px] sm:w-[240px] md:w-[290px] lg:w-[350px] xl:w-[340px]
                      h-[240px] sm:h-[220px] md:h-[290px] lg:h-[350px] xl:h-[340px]
                      object-fit flex-shrink-0
                    "
                  />
                ))}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 sm:gap-6 animate-scroll-right min-w-max">
                {[...bottomImages, ...bottomImages].map((img, i) => (
                  <LazyImage
                    key={"bottom-" + i}
                    src={img}
                    alt="Hamper"
                    className="
                      w-[240px] sm:w-[240px] md:w-[290px] lg:w-[350px] xl:w-[340px]
                      h-[240px] sm:h-[220px] md:h-[290px] lg:h-[350px] xl:h-[340px]
                      object-fit flex-shrink-0
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