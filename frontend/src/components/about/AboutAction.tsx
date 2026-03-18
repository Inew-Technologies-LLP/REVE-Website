import actionBg1 from "../../assets/action1.png";
import actionBg2 from "../../assets/action2.png";
import store from "../../assets/store.jpg";

export default function AboutAction() {
  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden">

      {/* Background Layer 1 */}
      <img
        src={actionBg1}
        alt="Background 1"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Decorative Background Layer 2 */}
      <img
        src={actionBg2}
        alt="Background 2"
        className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[70%] max-w-[783px] z-[1]"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">

        {/* Top Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Dancing_Script'] leading-tight text-Color-Scheme-1-Text">
            Rêve by the Action
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-medium font-['Quicksand'] leading-7 text-Color-Scheme-1-Text">
            For a patisserie, business-style numbers feel wrong. Instead, use credibility + craft metrics.
          </p>

        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">

          <Feature 
            title="Small-batch production"
            desc="Made fresh in limited quantities"
          />

          <Feature 
            title="Egg & Eggless Options"
            desc="Thoughtfully developed across categories"
          />

          <Feature 
            title="Wide flavour range"
            desc="From classics to signature creations"
          />

          <Feature 
            title="Custom-first approach"
            desc="Each order handled with individual attention"
          />

        </div>

        {/* Bottom Image */}
        <div className="mt-14">
          <img
            src={store}
            alt="Rêve Action"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand'] text-Color-Scheme-1-Text">
        {title}
      </h3>
      <p className="mt-2 text-sm sm:text-base text-gray-700 font-medium">
        {desc}
      </p>
    </div>
  );
}
