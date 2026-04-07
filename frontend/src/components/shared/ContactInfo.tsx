import clock from "../../assets/clock.png";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";

export default function ContactInfo() {
  return (
    <section className="w-full bg-[#FFFDEC] border border-black/20">

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Open Hours */}
          <div className="flex gap-5 sm:gap-6">
            <img src={clock} alt="Clock" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px]" />

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Roboto'] mb-3">
                Open hours
              </h3>
                <div className="space-y-3">
              <p className="text-sm sm:text-base font-normal font-['Roboto'] leading-6 max-w-[200px]">
                The restaurant hours for<br /> Kalyani Nagar are<br />
                9.00 am - 5.00 pm<br />
                Tuesday closed
              </p>

             

              <p className="text-sm sm:text-base font-normal font-['Roboto'] leading-6 max-w-[200px]">
                The restaurant hours for Koregaon Park are<br />
                11.30 am - 8.30 pm<br />
                Tuesday closed
              </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-5 sm:gap-6">
            <img src={map} alt="Location" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px]" />

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Roboto'] mb-2">
                Location
              </h3>

              <p className="text-sm sm:text-base font-normal font-['Roboto'] leading-6 mb-3">
                Flat 1, Surya Suman 49, 2, Lane No. 15, Pluto Society,
                Kalyani Nagar, Pune, Maharashtra 411006
              </p>

              <a
                  href="https://maps.app.goo.gl/pyh1VtK2f2xsmTcaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-normal text-black hover:underline "
                >
                  Get directions →
                </a>

                <p className="text-sm sm:text-base font-normal font-['Roboto'] leading-6 mb-3">
                Ground Floor, Jewel Square mall, Unit 02, Koregaon Rd, near Petrol Pump, Koregaon Park, Pune, Maharashtra 411001
              </p>

              <a
                href="https://maps.app.goo.gl/pyh1VtK2f2xsmTcaA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-normal text-black hover:underline"
              >
                Get directions →
              </a>

            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-5 sm:gap-6">
            <img src={phone} alt="Phone" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px]" />

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Roboto'] mb-3">
                Contact us
              </h3>

              <p className="text-sm sm:text-base font-normal font-['Roboto'] leading-6">
                Bookings & Enquiries <br />
                <a
                href="tel:+918530039246"
                className="text-sm underline cursor-pointer"
              >
                +91 85300 39246
              </a>  
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
