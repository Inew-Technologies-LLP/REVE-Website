import bestsellerBg from "../../assets/bestsellersbg.png";
import blogBg from "../../assets/aboutbg1.png";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#FFE2E2] overflow-hidden">

      {/* Background Layer 1 */}
      <img
        src={bestsellerBg}
        alt="Bestsellers Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Background Layer 2 */}
      <img
        src={blogBg}
        alt="Blog Overlay"
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-90"
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24">

        <div className="max-w-3xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Dancing_Script'] leading-tight text-Color-Scheme-1-Text mb-6">
            Why Rêve Patisserie Exists
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-normal font-['Quicksand'] leading-7 text-Color-Scheme-1-Text">
            Rêve Patisserie exists to create desserts that feel intentional,
            balanced, and thoughtfully made. Founded by Chef Aanchal Sapra,
            the brand focuses on refined flavours, careful technique, and
            handcrafted detail bringing together classic pastry foundations
            with a modern sensibility.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Every creation is designed to feel indulgent without excess,
            where flavour, texture, and presentation work in quiet harmony.
          </p>

        </div>

      </div>

    </section>
  );
}
