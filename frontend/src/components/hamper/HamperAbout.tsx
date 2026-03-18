import bestsellersBg from "../../assets/bestsellersbg.png";
import chefImage from "../../assets/hamper-gallery/Hamper.jpg";

export default function HamperAbout() {
  return (
    <section className="relative w-full bg-[#FFE2E2] overflow-hidden py-[60px] sm:py-[80px] lg:py-[112px]">

      {/* Background Layer */}
      <img
        src={bestsellersBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Responsive Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10">

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[60px]">

          {/* Left Content */}
          <div className="w-full lg:max-w-[686px] lg:py-[120px]">

            {/* Small Title */}
            <div className="text-base font-semibold font-['Roboto'] leading-6 mb-6">
              The Hampers of Rêve
            </div>

            {/* Main Heading */}
            <h2 className="font-dancing font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
              Know more about hampers
            </h2>

            {/* Body Text */}
            <div className="mt-6 text-base sm:text-lg font-medium font-['Quicksand'] leading-7">
              Every hamper is customised according to your budget.<br />
              Most clients approach us with a starting range (₹1000+),<br />
              and we design the contents, packaging, and quantities accordingly.<br />
              Need 1000 hampers? We can accommodate large-scale orders seamlessly.
            </div>

          </div>

          {/* Right Image */}
          <div
            className="
              w-full 
              sm:w-[470px] 
              lg:w-[540px] 
              h-[440px] 
              sm:h-[480px] 
              lg:h-[580px] 
              overflow-hidden
            "
          >
            <img
              src={chefImage}
              alt="Chef Aanchal Sapra"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}