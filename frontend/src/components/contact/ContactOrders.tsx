import instagram from "../../assets/instagram1.png";
import whatsapp from "../../assets/whatsapp1.png";
import callIcon from "../../assets/call.svg";
import dotBg from "../../assets/dotbg.png";

export default function ContactOrders() {
  return (
    <section className="relative w-full flex justify-center bg-[#FFF8F2]">

      {/* Dot Background Layer */}
      <img
        src={dotBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative w-full max-w-[1440px] px-6 sm:px-10 lg:px-[64px] py-16 lg:py-[80px]">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-dancing font-bold mb-4">
            Contact & Orders
          </h2>

          <div className="text-base sm:text-lg font-normal font-['Quicksand'] leading-7 max-w-[768px]">
            The easiest way to place an order is by speaking to us directly.
          </div>
        </div>

        {/* 3 Contact Blocks */}
        {/* 3 Contact Blocks */}
<div className="flex justify-start">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[200px] max-w-[1100px] w-full">

    {/* WhatsApp */}
    <div className="flex flex-col h-full">
      <img
        src={whatsapp}
        alt="Whatsapp"
        className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-4 lg:mb-6"
      />

      <div className="text-lg sm:text-xl lg:text-3xl font-bold font-['Quicksand'] leading-tight lg:leading-10 mb-3">
        Whatsapp
      </div>

      <div className="text-sm sm:text-base font-medium font-['Quicksand'] leading-6 mb-6 flex-1">
        Message us on WhatsApp to join the fun and place your order!
      </div>

      <a
        href="https://wa.me/918530039246"
        target="_blank"
        rel="noopener noreferrer"
        className="font-roboto text-sm lg:text-base font-normal underline cursor-pointer mt-auto"
      >
        Start new chat
      </a>
    </div>

    {/* Instagram */}
    <div className="flex flex-col h-full">
      <img
        src={instagram}
        alt="Instagram"
        className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-4 lg:mb-6"
      />

      <div className="text-lg sm:text-xl lg:text-3xl font-bold font-['Quicksand'] leading-tight lg:leading-10 mb-3">
        Instagram
      </div>

      <div className="text-sm sm:text-base font-medium font-['Quicksand'] leading-6 mb-6 flex-1">
        Follow us on Instagram and send us a DM to learn more and place your order!
      </div>

      <div className="font-roboto text-sm lg:text-base font-normal underline cursor-pointer mt-auto">
        <a
                href="mailto:orders@revepatisserie.co.in"
                className="underline cursor-pointer"
              >
                orders@revepatisserie.co.in
              </a>    
      </div>
    </div>

    {/* Phone */}
    <div className="flex flex-col h-full">
      <img
        src={callIcon}
        alt="Phone"
        className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-4 lg:mb-6"
      />

      <div className="text-lg sm:text-xl lg:text-3xl font-bold font-['Quicksand'] leading-tight lg:leading-10 mb-3">
        Phone
      </div>

      <div className="text-sm sm:text-base font-medium font-['Quicksand'] leading-6 mb-6 flex-1">
        Feel free to reach out to us by giving us a call!
      </div>

      <div className="font-roboto text-sm lg:text-base font-normal underline cursor-pointer mt-auto">
        <a
                href="tel:+918530039246"
                className="underline cursor-pointer"
              >
                +91 85300 39246
              </a>     
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}