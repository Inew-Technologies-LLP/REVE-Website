import { useState, useEffect } from "react";
import bestsellersBg from "../../assets/bestsellersbg.png";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import img1 from "../../assets/best-sellers/truffle.webp";
import img2 from "../../assets/best-sellers/dark-kunafa.webp";
import coffeeWalnut from "../../assets/best-sellers/coffee-walnut.webp";
import lotusButtercream from "../../assets/best-sellers/lotus.webp";
import img6 from "../../assets/best-sellers/ferrero.webp";
import img5 from "../../assets/best-sellers/gianduja.webp";
import LazyImage from "../../components/LazyImage";



const products = [
  {
    name: "Chocolate Truffle Cake",
    variant: "Premium",
    image: img1,
    description:
      "Decadent chocolate cake layered with rich chocolate ganache.",
  },
  {
    name: "Dark Kunafa Chocolate Bar",
    variant: "Signature",
    image: img2,
    description:
      "Our signature chocolate bar with homemade pistachio paste & kunafa filling enrobed in 45% dark chocolate.",
  },
  {
    name: "Coffee Walnut Cake",
    variant: "Bestseller",
    image: coffeeWalnut,
    description:
      "A crunchy brittle with caramel layer in the middle, covered with 45% dark chocolate on both sides & topped with roasted almonds.",
  },
  {
    name: "Lotus Biscoff Bar",
    variant: "Special Edition",
    image: lotusButtercream,
    description:
      "Brittle with coffee caramel layer in the middle, coated in 45% dark chocolate & finished with roasted hazelnuts.",
  },
 
  {
    name: "Ferrero Rocher Cake",
    variant: "Special Edition",
    image: img6,
    description:
      "Moist chocolate cake layered with ganache and Ferrero Rocher pieces in every layer for a delightful crunch.",
  },
  {
    name: "Gianduja",
    variant: "Special Edition",
    image: img5,
    description:
      "Hazelnut & dark chocolate filling with a hint of salt, enrobed in smooth milk chocolate.",
  },
];

export default function BestSellers() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= products.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev <= 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full bg-[#FFE2E2]">
      <img
        src={bestsellersBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Dancing_Script']">
          Best Sellers
        </h2>

        <div className="mt-12">
          {isMobile ? (
            <>
              <div className="overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                  }}
                >
                  {products.map((product, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-[#FFFDEC] rounded-full flex items-center justify-center border border-black"
                >
                  <img src={leftArrow} alt="left" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-[#FFFDEC] rounded-full flex items-center justify-center border border-black"
                >
                  <img src={rightArrow} alt="right" />
                </button>
              </div>

              <div className="flex gap-3 mt-6">
                {products.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2.5 h-2.5 cursor-pointer rounded-full ${
                      i === index ? "bg-black" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {products.map((product, i) => (
                <div key={i} className="w-[280px] xl:w-[320px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


/* ================= PRODUCT CARD (FLIP INLINE CSS VERSION) ================= */

function ProductCard({ product }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isFlipped) {
      timer = setTimeout(() => {
        setIsFlipped(false);
      }, 10000); // 10 seconds
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFlipped]);

  return (
    <div>
      <div
        className="relative aspect-[4/5]"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            <LazyImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#4A2C2A]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: `
                linear-gradient(
                  135deg,
                  #FFF6F6 0%,
                  #F8DADA 40%,
                  #EBC1C1 70%,
                  #FDF1EC 100%
                )
              `,
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="text-lg font-semibold mb-3">
              {product.name}
            </h4>

            <p className="text-sm sm:text-base md:text-lg font-['Quicksand'] leading-6 sm:leading-7">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-sm sm:text-base font-semibold font-['Roboto']">
        {product.name}
      </h3>

      <p className="mt-1 text-xs sm:text-sm font-['Roboto']">
        {product.variant}
      </p>

      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="mt-4 py-2 px-4 text-white text-sm sm:text-base"
        style={{ backgroundColor: "#86A788" }}
      >
        {isFlipped ? "Close" : "Know More"}
      </button>
    </div>
  );
}