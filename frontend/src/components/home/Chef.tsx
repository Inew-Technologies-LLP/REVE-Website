import chefImg from "../../assets/chef.webp";
import chefBg from "../../assets/chefbg.png";
import LazyImage from "../../components/LazyImage";


export default function Chef() {
  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16">

      {/* Background */}
      <img
        src={chefBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

        {/* Left Column */}
        <div className="flex flex-col">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-semibold font-['Dancing_Script'] 
                         leading-tight mb-8">
            About Chef Aanchal Sapra
          </h2>

          {/* Image (Mobile Only Placement) */}
          <div className="order-1 md:hidden w-full h-[380px] overflow-hidden mb-8">
            <img
              src={chefImg}
              alt="Chef Aanchal Sapra"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Scrollable Text */}
          <div
              className="
                order-2
                max-h-[320px] sm:max-h-[340px] md:max-h-[360px] lg:max-h-[380px]
                overflow-y-auto pr-2
                space-y-6 text-sm sm:text-base md:text-lg
                font-normal font-['Roboto']
                leading-7 md:leading-8 text-justify
                max-w-xl

                /* Firefox */
                [scrollbar-width:thin]
                [scrollbar-color:rgba(0,0,0,0.25)_transparent]

                /* Chrome / Edge / Safari */
                [&::-webkit-scrollbar]:w-[3px]
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-black/25
                [&::-webkit-scrollbar-thumb]:rounded-none
                [&::-webkit-scrollbar-button]:hidden
                [&::-webkit-scrollbar-corner]:bg-transparent
              "
            >
            <p>
              Chef Aanchal Sapra is a professionally trained pastry chef and the visionary founder of <span className="italic">Rêve Patisserie</span>, a boutique dessert brand rooted in craftsmanship, elegance, and refined flavour.
            </p>

            <p>
              She holds a Degree in Baking & Pastry Arts from the prestigious Culinary Institute of America, New York, where she honed her foundation in classical techniques and precision-driven pastry artistry. Her global experience includes working at the iconic Waldorf Astoria in Boca Raton, Florida, as well as Chef Thomas Keller’s celebrated Bouchon Bakery in New York — kitchens known for their uncompromising standards and excellence.
            </p>

            <p>
              Further deepening her expertise, Aanchal pursued specialized training in gelato in Bologna, Italy, immersing herself in authentic Italian methods and flavour science.
            </p>

            <p>
              In 2019, she established Rêve Patisserie in Pune — a brand built on the philosophy of creating desserts that are both luxurious and deeply emotive. What began as a dream has grown into a beloved patisserie with two thriving outlets, known for handcrafted chocolates, artisanal cakes, and thoughtfully curated seasonal collections.
            </p>

            <p>
              Chef Aanchal’s creations are defined by balance, detail, and intention. She seamlessly blends European techniques with contemporary flavour pairings, ensuring every dessert tells a story — one of passion, precision, and warmth.
            </p>

            <p>
              For her, pastry is not simply about sweetness. It is about experience, memory, and the quiet magic of indulgence done right.
            </p>
          </div>
        </div>

        {/* Right Image (Desktop Only) */}
        <div className="hidden md:block w-full max-w-[500px] 
                        h-[360px] lg:h-[500px]
                        overflow-hidden mx-auto md:mx-0">
          <LazyImage
            src={chefImg}
            alt="Chef Aanchal Sapra"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}