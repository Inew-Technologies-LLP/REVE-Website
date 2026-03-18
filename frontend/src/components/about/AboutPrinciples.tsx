import actionBg1 from "../../assets/action3.png";
import actionBg2 from "../../assets/action2.png";
import cakeIcon from "../../assets/cakelogo.svg";

export default function AboutPrinciples() {
  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden">

      {/* Background Layer 1 */}
      <img
        src={actionBg1}
        alt="Background Base"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Decorative Background Layer 2 */}
      <img
        src={actionBg2}
        alt="Background Overlay"
        className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-[70%] max-w-[783px] z-[1]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

        {/* Headings */}
        <div className="max-w-4xl">

          <p className="text-sm sm:text-base font-semibold font-['Roboto'] text-Color-Scheme-1-Text mb-4">
            What Guides Our Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Dancing_Script'] leading-tight text-Color-Scheme-1-Text">
            At Rêve Patisserie, every decision from flavour pairing to final finish is guided by a clear set of principles.
          </h2>

        </div>

        {/* Principles Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          <PrincipleCard
            icon={cakeIcon}
            title="Craft Over Speed"
            desc="Each product is made in small batches, allowing attention to detail at every step rather than rushing volume."
          />

          <PrincipleCard
            icon={cakeIcon}
            title="Balanced Flavours"
            desc="Desserts are designed to be rich yet refined, ensuring no single note overpowers the experience."
          />

          <PrincipleCard
            icon={cakeIcon}
            title="Quality Ingredients"
            desc="Premium chocolate, fresh dairy, and carefully sourced components form the foundation of every creation."
          />

        </div>

      </div>
    </section>
  );
}

function PrincipleCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <img src={icon} alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 mb-6" />

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand'] text-Color-Scheme-1-Text mb-4">
        {title}
      </h3>

      <p className="text-sm sm:text-base font-medium font-['Quicksand'] leading-6 text-Color-Scheme-1-Text">
        {desc}
      </p>
    </div>
  );
}
