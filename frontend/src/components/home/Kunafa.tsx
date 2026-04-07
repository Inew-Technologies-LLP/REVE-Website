import kunafaBg from "../../assets/kunafa.webp";
import icon from "../../assets/icon1.svg";
import { Link } from "react-router-dom";

export default function Kunafa() {
  return (
    <section
      className="relative w-full bg-cover flex items-center  py-16 sm:py-20 md:py-32"
      style={{
        backgroundImage: `url(${kunafaBg})`,
        backgroundPosition: "center 40%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-white">

        {/* Left Side */}
        <div>
          <img
            src={icon}
            alt="Icon"
            className="mb-5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Dancing_Script'] leading-tight">
            Introducing Pistachio Kunafa Creations
          </h2>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-sm sm:text-base md:text-lg font-normal font-['Quicksand'] leading-6 sm:leading-7 mb-6 md:mb-8">
            A new flavour story joins our collection. Inspired by the richness
            of pistachio and the delicate crunch of kunafa, this latest creation
            balances texture, sweetness, and depth crafted with the same
            attention and restraint that defines Rêve Patisserie.
            <br />
            Available across select cakes and chocolate bars.
          </p>

          
          <Link
            to="/chocolates"
            className="inline-block self-start border border-white px-6 sm:px-8 py-3 text-sm sm:text-base hover:bg-white hover:text-black transition"
          >
            Explore the New Collection
          </Link>
        </div>

      </div>
    </section>
  );
}