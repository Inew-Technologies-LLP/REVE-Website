import deliveryBg from "../../assets/deliverybg.png";
import zomatoLogo from "../../assets/zomato.png";
import swiggyLogo from "../../assets/swiggy.png";

export default function DeliverySection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FFF8F2]
                 min-h-[420px]
                 sm:min-h-[480px]
                 lg:min-h-[560px]
                 xl:min-h-[607px]"
    >
      {/* Background */}
      <img
        src={deliveryBg}
        alt="Delivery Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= XL DESKTOP ================= */}
      <div className="relative hidden xl:block w-full min-h-[607px] z-10">
        <div
          className="absolute max-w-[798px]"
          style={{ top: "180px", left: "64px" }}
        >
          <div className="text-base font-semibold font-['Roboto'] mb-6">
            DELIVERY
          </div>

          <div className="text-5xl font-bold font-['Quicksand'] leading-tight">
            Food delivery from Rêve Patisserie is available exclusively within Pune through our delivery partners.
          </div>
        </div>

        <div
          className="absolute flex flex-col gap-8 items-center"
          style={{ top: "132px", right: "350px" }}
        >
          <DeliveryLogos />
        </div>
      </div>

      {/* ================= TABLET ================= */}
      <div
        className="hidden lg:flex xl:hidden relative z-10
                   min-h-[560px]
                   items-center justify-between
                   px-12 gap-10"
      >
        <div className="max-w-[600px]">
          <div className="text-base font-semibold font-['Roboto'] mb-6">
            DELIVERY
          </div>

          <div className="text-4xl font-bold font-['Quicksand'] leading-tight">
            Food delivery from Rêve Patisserie is available exclusively within Pune through our delivery partners.
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <DeliveryLogos />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className="relative lg:hidden px-6 sm:px-8
                   py-12 sm:py-14
                   z-10"
      >
        <div className="mb-10">
          <div className="text-sm font-semibold font-['Roboto'] mb-4">
            DELIVERY
          </div>

          <div className="text-2xl sm:text-3xl font-bold font-['Quicksand'] leading-snug">
            Food delivery from Rêve Patisserie is available exclusively within Pune through our delivery partners.
          </div>
        </div>

        <div className="flex justify-center gap-10 sm:gap-16 flex-wrap">
          <DeliveryLogos mobile />
        </div>
      </div>
    </section>
  );
}

/* ================= Properly Typed Props ================= */

type DeliveryLogosProps = {
  mobile?: boolean;
};

function DeliveryLogos({ mobile = false }: DeliveryLogosProps) {
  const size = mobile
    ? "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]"
    : "w-[100px] h-[100px]";

  const textSize = mobile
    ? "text-lg sm:text-xl"
    : "text-3xl";

  return (
    <>
      {/* Zomato */}
      <a
        href="https://www.zomato.com/pune/reve-patisserie-kalyani-nagar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <div className={`${size} flex items-center justify-center`}>
          <img
            src={zomatoLogo}
            alt="Zomato"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className={`${textSize} font-bold font-['Roboto'] mt-4`}>
          Zomato
        </div>
      </a>

      {/* Swiggy */}
      <a
        href="https://www.swiggy.com/instamart/city/pune/b/reve-patisserie"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <div className={`${size} flex items-center justify-center`}>
          <img
            src={swiggyLogo}
            alt="Swiggy"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className={`${textSize} font-bold font-['Roboto'] mt-4`}>
          Swiggy
        </div>
      </a>
    </>
  );
}