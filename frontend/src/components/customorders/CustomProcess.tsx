import cakeLogo from "../../assets/cakelogo.svg";
import bgImage from "../../assets/testimonials.png";

export default function CustomProcess() {
  return (
    <section className="relative w-full min-h-[856px] overflow-hidden">

      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[64px] py-16 sm:py-20 lg:py-[112px] text-white">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[120px]">

          {/* LEFT SECTION */}
          <div className="lg:w-[40%]">

            <div className="text-white text-sm sm:text-base font-semibold font-['Roboto'] leading-6 mb-4 sm:mb-[24px]">
              PROCESS
            </div>

            <h2 className="font-roboto font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight">
              Our Process
            </h2>

          </div>

          {/* RIGHT SECTION */}
          <div className="lg:w-[30%] w-full">
            <div className="flex flex-col gap-10 sm:gap-[20px]">

              {/* STEP COMPONENT */}
              {[
                {
                  title: "Step 1 — Get in Touch",
                  text: "Clients usually find us through Instagram, WhatsApp, or phone. Once you reach out, we begin with a brief discussion about the occasion."
                },
                {
                  title: "Step 2 — Share the Details",
                  text: `We’ll ask a few key questions:
• Occasion (birthday, anniversary, wedding, etc.)
• Number of people / size of the cake
• Preferred flavours
• Theme or inspiration (if any)`
                },
                {
                  title: "Step 3 — Design Suggestions",
                  text: "Based on the brief, we suggest a design direction. For example, for a 50th birthday celebration, we might recommend a floral-themed cake with personalised fashion elements depending on the client’s preferences."
                },
                {
                  title: "Step 4 — Reference & Finalisation",
                  text: "We share reference images to align on the look and feel. Once the design and details are finalised, the order is confirmed and booked."
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 sm:gap-8 items-start">

                  {/* Logo + Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <img
                      src={cakeLogo}
                      alt="Icon"
                      className="w-10 h-10 sm:w-[48px] sm:h-[48px]"
                    />

                    {/* Show line except last item */}
                    {index !== 3 && (
                      <div className="w-[2px] h-[120px] sm:h-24 bg-white/60 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="text-lg sm:text-xl font-bold font-['Quicksand'] leading-7 mb-2 sm:mb-3">
                      {step.title}
                    </div>

                    <div className="text-sm sm:text-base font-medium font-['Quicksand'] leading-6 whitespace-pre-line lg:w-[512px]">
                      {step.text}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}