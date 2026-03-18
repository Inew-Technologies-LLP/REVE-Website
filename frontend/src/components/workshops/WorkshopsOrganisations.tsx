import dotBg from "../../assets/workshopbg3.png";
import gstVideo from "../../assets/workshop-gallery/GST.mp4";
import mercedesVideo from "../../assets/workshop-gallery/Mercedes.mp4";
import gstLogo from "../../assets/gst.svg";
import mercedes from "../../assets/mercedes.svg";

export default function WorkshopsOrganisations() {
  return (
    <section className="relative w-full bg-[#FFE2E2] overflow-hidden py-[60px] sm:py-[80px] lg:py-[112px]">

      {/* Dot Background */}
      <img
        src={dotBg}
        alt="Dot Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Responsive Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10">

        {/* Heading */}
        <h2
          className="font-dancing font-bold 
                     text-[28px] sm:text-[36px] lg:text-[48px] 
                     mb-[24px] leading-tight"
        >
          Workshops Conducted for Organisations
        </h2>

        {/* Paragraph */}
        <div className="max-w-full sm:max-w-[760px] text-lg font-normal font-['Quicksand'] leading-7">
          Rêve Patisserie has conducted private, on-site baking workshops for organisations and institutions, tailoring each session to the group’s space, time, and learning objectives. For these workshops, a temporary mini kitchen setup is created at the client’s venue, allowing participants to experience a guided, hands-on session in a professional yet engaging environment.
        </div>

        {/* Video Section */}
        <div
          className="mt-[50px] sm:mt-[60px] lg:mt-[80px] 
                     flex flex-col lg:flex-row 
                     gap-[24px] sm:gap-[32px]"
        >

          {/* GST Video */}
          <div
            className="relative w-full lg:w-1/2 
                       h-[300px] sm:h-[420px] lg:h-[560px] 
                       overflow-hidden"
          >
            <video
              src={gstVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute bottom-[16px] sm:bottom-[20px] left-[16px] sm:left-[20px]">
              <div className="text-white text-sm sm:text-base font-medium font-['Roboto'] leading-6">
                GST Office, Pune
              </div>
            </div>

            <div className="absolute bottom-[16px] sm:bottom-[20px] right-[16px] sm:right-[40px]">
              <img
                src={gstLogo}
                alt="GST Logo"
                className="w-auto h-[40px] sm:h-[55px] lg:h-[60px]"
              />
            </div>
          </div>

          {/* Mercedes Video */}
          <div
            className="relative w-full lg:w-1/2 
                       h-[300px] sm:h-[420px] lg:h-[560px] 
                       overflow-hidden"
          >
            <video
              src={mercedesVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute bottom-[16px] sm:bottom-[20px] left-[16px] sm:left-[20px]">
              <div className="text-white text-sm sm:text-base font-medium font-['Roboto'] leading-6">
                Mercedes-Benz Silver Star, Pune
              </div>
            </div>

            <div className="absolute bottom-[16px] sm:bottom-[20px] right-[16px] sm:right-[40px]">
              <img
                src={mercedes}
                alt="Mercedes Logo"
                className="w-auto h-[40px] sm:h-[50px] lg:h-[55px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}