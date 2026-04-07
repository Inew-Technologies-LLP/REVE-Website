import chocolateBg from "../../assets/chocolatebg.webp";


export default function DeliveryBanner() {
  return (
    <section
      className="w-full min-h-[300px] sm:min-h-[358px] flex items-center"
      style={{
        backgroundImage: `url(${chocolateBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full max-w-[1440px] mx-auto 
                   px-[20px] sm:px-[40px] lg:px-[64px]
                   py-[50px] sm:py-[60px] lg:py-[112px]"
      >
        <div
          className="flex flex-col lg:flex-row 
                     justify-start 
                     items-start lg:items-center 
                     gap-[40px] sm:gap-[60px] lg:gap-8"
        >

          {/* LEFT SIDE */}
          <div
            className="max-w-full lg:max-w-[600px] 
                       text-3xl sm:text-4xl lg:text-5xl 
                       font-bold font-['Quicksand'] 
                       text-white leading-tight lg:leading-[57.60px]"
          >
            Now Delivering Across India
          </div>

          {/* RIGHT SIDE */}
          <div className="text-white max-w-full lg:max-w-[600px]">

            <div
              className="text-base sm:text-lg 
                         font-normal font-['Roboto'] 
                         leading-7 mb-[24px] sm:mb-[32px]"
            >
              Available on Swiggy Instamart in Pune, Nashik, Kolhapur, Mumbai
              <br />
              Shipping PAN India via Amazon
            </div>

            <div className="flex flex-wrap gap-4">

              {/* Amazon Button */}
              <a
                href="https://www.amazon.in/stores/RevePatisserie/page/8A353DD1-941C-4065-A734-04AECFF89645?ref_=cm_sw_r_mwn_sf_stores_2N3SB3JRXWMM2SKCMBSG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-black 
                            px-6 py-3 
                            font-roboto 
                            hover:opacity-90 transition"
                >
                  Amazon
                </button>
              </a>

              {/* Swiggy Button */}
              <a
                href="https://www.swiggy.com/stores/instamart/item/EBKSQQU1IE?share=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white 
                          px-6 py-3 
                          font-roboto 
                          hover:bg-white hover:text-black transition"
              >
                Swiggy Instamart
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}