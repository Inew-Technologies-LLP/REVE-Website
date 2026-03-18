import bgImage from "../../assets/testimonials.png";
import img1 from "../../assets/hero.png";

export default function WorkshopsStructure() {
  return (
    <section className="relative w-full overflow-hidden py-[60px] sm:py-[80px] lg:py-[112px]">

      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Responsive Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10 text-white">

        {/* Heading */}
        <h2
          className="font-dancing font-bold 
                     text-[28px] sm:text-[36px] lg:text-[48px] 
                     mb-[24px] leading-tight"
        >
          How Our Workshops Are Structured
        </h2>

        {/* Paragraph */}
        <div className="max-w-full sm:max-w-[760px] mb-[50px] sm:mb-[60px] lg:mb-[80px]">
          <div className="text-white text-base sm:text-lg font-normal font-['Quicksand'] leading-7">
            Our workshops are designed to be interactive and engaging. We focus on hands-on activities that encourage participation and collaboration among attendees. Each session is tailored to meet the specific needs of the group, ensuring that everyone walks away with valuable insights and practical skills.
          </div>
        </div>

        {/* Three Sections */}
        <div
          className="grid 
                     grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                     gap-[30px] sm:gap-[40px] lg:gap-[48px]"
        >
          {[1, 2, 3].map((step, i) => (
            <div key={i}>

              {/* Image */}
              <div
                className="
                  w-full 
                  h-[180px] sm:h-[220px] lg:h-[240px] 
                  mb-[20px] sm:mb-[24px] 
                  overflow-hidden 
                  bg-gray-300
                "
              >
                <img
                  src={img1}
                  alt={`Step ${step}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <div
                className="text-xl sm:text-2xl lg:text-3xl 
                           font-bold font-['Quicksand'] 
                           leading-tight sm:leading-10 
                           mb-[14px] sm:mb-[16px]"
              >
                {step === 1 && <>Step 1 — Introduction & Demonstration</>}
                {step === 2 && <>Step 2 — Hands-On Practice</>}
                {step === 3 && <>Step 3 — Finishing & Learning</>}
              </div>

              {/* Description */}
              <div className="text-sm sm:text-base font-normal font-['Quicksand'] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}