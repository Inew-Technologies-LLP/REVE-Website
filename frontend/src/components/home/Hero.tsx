import { Link } from "react-router-dom";
import heroImage from "../../assets/homebanner.png";
import logo from "../../assets/logo1.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
  src={heroImage}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover "
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 md:px-16 text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Reve Patisserie"
          className="mb-8 w-[320px] sm:w-[360px] md:w-[460px] lg:w-[532px] h-auto"

        />

        {/* Tagline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 md:mb-10 max-w-2xl">
          Where desserts are hand crafted beautifully
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">

          <Link
            to="/cakes"
            className="bg-white text-black px-6 sm:px-8 py-3 font-medium hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Check Our Cakes
          </Link>

          <Link
            to="/custom-orders"
            className="border border-white px-6 sm:px-8 py-3 font-medium hover:bg-white hover:text-black transition w-full sm:w-auto"
          >
            Custom Order Now
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;
