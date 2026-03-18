import actionBg1 from "../../assets/action3.png";
import actionBg2 from "../../assets/action2.png";
import cakeIcon from "../../assets/cakelogo.svg";

export default function HamperPrinciples() {
  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden py-[80px] lg:py-[112px]">

      {/* Background Layer 1 */}
      <img
        src={actionBg1}
        alt="Background Base"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Background Layer 2 */}
      <img
        src={actionBg2}
        alt="Background Overlay"
        className="absolute 
                   w-[500px] sm:w-[650px] lg:w-[783px]
                   h-auto 
                   left-1/2 -translate-x-1/2 
                   top-[60px] 
                   z-[1] object-cover"
      />

      {/* Responsive Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10">

        {/* Top Headings */}
        <div className="mb-[60px] lg:mb-[80px]">

          <p className="font-roboto font-semibold text-[14px] sm:text-[16px] mb-4 sm:mb-6">
            What Hampers Work
          </p>

          <h2 className="font-dancing font-bold 
                         text-[28px] sm:text-[36px] lg:text-[48px] 
                         leading-tight">
            At Rêve Patisserie, every decision from flavour pairing to final finish is guided by a clear set of principles.
          </h2>

        </div>

        {/* 3 Principles Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[48px]">

          {/* Card 1 */}
          <div>
            <img src={cakeIcon} alt="Icon" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] mb-6" />

            <div className="text-2xl sm:text-3xl font-bold font-['Quicksand'] leading-tight sm:leading-10 mb-4 sm:mb-6">
              You Share Your Budget
            </div>

            <div className="text-base font-medium font-['Quicksand'] leading-6">
              Starting from ₹1000 per hamper.
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <img src={cakeIcon} alt="Icon" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] mb-6" />

            <div className="text-2xl sm:text-3xl font-bold font-['Quicksand'] leading-tight sm:leading-10 mb-4 sm:mb-6">
              We Curate the Perfect Mix
            </div>

            <div className="text-base font-medium font-['Quicksand'] leading-6">
              Pastries, chocolates, dry cakes, cookies customised to match your price.
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <img src={cakeIcon} alt="Icon" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] mb-6" />

            <div className="text-2xl sm:text-3xl font-bold font-['Quicksand'] 
                leading-tight sm:leading-10 
                mb-4 sm:mb-6 
                lg:whitespace-nowrap">
                  Bulk? We’ve Got You Covered
                </div>
            <div className="text-base font-medium font-['Quicksand'] leading-6">
              From 1 hamper to 1000+ pieces we accommodate any quantity.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}