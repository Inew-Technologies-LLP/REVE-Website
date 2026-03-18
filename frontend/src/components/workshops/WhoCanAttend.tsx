import dotBg from "../../assets/wrokshopbg4.png";
import cakeLogo from "../../assets/cakelogo.svg";
import mainVideo from "../../assets/workshop-gallery/main.mp4";

export default function WhoCanAttend() {
  return (
    <section className="relative w-full bg-[#FFFDEC] overflow-hidden py-[60px] sm:py-[80px] lg:py-[112px]">

      {/* Background */}
      <img
        src={dotBg}
        alt="Dots"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10">

        {/* Heading */}
        <div className="text-center mb-[40px] sm:mb-[50px]">
          <h2
            className="font-roboto font-bold 
                       text-[28px] sm:text-[36px] lg:text-[48px] 
                       mb-[16px] leading-tight"
          >
            Who Can Attend
          </h2>
        </div>

        {/* Main Layout */}
        <div
          className="flex flex-col md:flex-row
                     items-center md:items-start
                     justify-between
                     gap-[40px] md:gap-[50px] lg:gap-[60px]"
        >

          {/* VIDEO SECTION (GIF Style) */}
          <div
            className="order-1 md:order-2
                       relative w-full
                       md:w-[480px] lg:w-[500px]
                       h-[750px] sm:h-[480px] lg:h-[750px]
                       overflow-hidden"
          >
            <video
              src={mainVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* LEFT GRID */}
          <div
            className="order-2 md:order-1
                       grid grid-cols-1
                       gap-y-[30px] sm:gap-y-[40px]
                       w-full md:w-[300px] lg:w-[350px]"
          >
            {[
              "Home bakers",
              "Beginners interested in baking",
              "Food and dessert enthusiasts",
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-[10px] sm:gap-[12px]"
              >
                <img
                  src={cakeLogo}
                  alt="Icon"
                  className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                />
                <h3
                  className="text-xl sm:text-2xl 
                             font-bold font-['Quicksand'] 
                             leading-tight sm:leading-8"
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT GRID */}
          <div
            className="order-3
                       grid grid-cols-1
                       gap-y-[30px] sm:gap-y-[40px]
                       w-full md:w-[300px] lg:w-[350px]"
          >
            {[
              "Corporate teams and organisations",
              "Groups looking for a guided culinary experience",
              "Anyone passionate about pastry",
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-[10px] sm:gap-[12px]"
              >
                <img
                  src={cakeLogo}
                  alt="Icon"
                  className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                />
                <h3
                  className="text-xl sm:text-2xl 
                             font-bold font-['Quicksand'] 
                             leading-tight sm:leading-8"
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}