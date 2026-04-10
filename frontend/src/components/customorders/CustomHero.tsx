import bestsellersBg from "../../assets/bestsellersbg.png";
import blogBg from "../../assets/custombg2.png";
import hero1 from "../../assets/custom-gallery/hero1.webp";
import hero2 from "../../assets/custom-gallery/hero2.webp";
import hero3 from "../../assets/custom-gallery/hero3.webp";


import { Link } from "react-router-dom";

export default function CustomOrdersSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FFE2E2" }}
    >
      {/* Background Pattern */}
      <img
        src={bestsellersBg}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top Wave Layer */}
      <img
        src={blogBg}
        alt="Top Wave"
        className="absolute top-[-90px] w-full object-cover z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-[64px]">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT COLUMN (Heading + Text Together) */}
          <div className="pt-16 md:pt-[112px]">

            {/* HEADING */}
            <div className="w-full lg:w-[701px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Dancing_Script'] leading-tight lg:leading-[67.20px]">
              Custom Orders for Celebrations, Thoughtfully Crafted
            </div>

            {/* TEXT SECTION (Moved Below Heading) */}
            <div className="pt-10 lg:pt-[80px] lg:w-[532px]">
              <div className="text-sm sm:text-base md:text-lg font-normal font-['Quicksand'] leading-6 sm:leading-7">
                Custom orders at Rêve Patisserie are designed to make celebrations more personal and memorable. From birthdays and anniversaries to weddings and milestone occasions, each cake is created around a theme that reflects the moment and the people it’s meant for.
                <br />
                Whether it’s a playful character cake for a child or a multi-tiered statement cake for a wedding, every design is handled with care, detail, and balance.
              </div>

              <div className="mt-8 lg:mt-[50px]">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#FFF8F2] text-[#F0B8B8] font-quicksand border border-[#F0B8B8] hover:bg-[#F0B8B8] hover:text-white hover:border-[#F0B8B8] transition duration-300"
                >
                  Contact Now
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Empty to preserve desktop spacing) */}
          <div></div>

        </div>

        {/* IMAGE SECTION */}
        <div className="mt-16 lg:mt-[80px] 
                        flex flex-col lg:flex-row 
                        justify-center items-center lg:items-start 
                        gap-8 lg:gap-[32px]">

          {/* Left Image */}
          <div className="w-full max-w-[348px] aspect-square lg:w-[348px] lg:h-[348px] lg:mt-[240px] bg-gray-300">
            <img loading="eager" src={hero1} alt="Custom order 1" className="w-full h-full object-cover object-bottom" />
          </div>

          {/* Center Large Image */}
          <div className="w-full max-w-[520px] aspect-[520/828] lg:w-[520px] lg:h-[828px] bg-gray-300">
            <img loading="eager" src={hero2} alt="Custom order 2" className="w-full h-full object-cover" />
          </div>

          {/* Right Image */}
          <div className="w-full max-w-[348px] aspect-[348/522] lg:w-[348px] lg:h-[522px] bg-gray-300">
            <img loading="eager" src={hero3} alt="Custom order 3" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
}