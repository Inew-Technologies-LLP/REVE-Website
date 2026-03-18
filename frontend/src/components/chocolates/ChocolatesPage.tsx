import { useState, useEffect } from "react";
import cakeBg from "../../assets/CakeBG.png";
import searchIcon from "../../assets/search.svg";

type Product = {
  id: number;
  name: string;
  variant?: string;
  category: string;
  image_url: string;
};

export default function ChocolateBarPage() {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [showAllBars, setShowAllBars] = useState(false);

  useEffect(() => {
    const fetchChocolates = async () => {
      const res = await fetch("http://localhost:5000/chocolates");
      const data = await res.json();
      setProducts(data);
    };

    fetchChocolates();
  }, []);

  const chocolateBars = products.filter(p => p.category === "Bar");
  const brittles = products.filter(p => p.category === "Brittle");

  const filterProducts = (items: Product[]) =>
    items.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesSearch;
    });

  return (
    <section
      className="relative w-full min-h-screen py-[60px] sm:py-[80px] lg:py-[112px]"
      style={{
        background: "linear-gradient(135deg, #FFE2E2, #E8B7B7)",
      }}
    >

      <img
        src={cakeBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto bg-[#FFFDEC] rounded-[20px] p-6 sm:p-10 lg:p-[48px]">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-base font-semibold font-['Roboto'] mb-2">
            Chocolates
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Roboto'] mb-4 leading-tight">
            The Chocolate Bar Collection
          </div>
          <div className="text-base sm:text-lg font-normal font-['Roboto'] leading-7">
            A refined selection of chocolate bars crafted with carefully balanced flavours.
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[700px]">

            <div className="relative flex-1 w-full">
              <img
                src={searchIcon}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search chocolates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-2 border-[#E8B4B4] pl-10 pr-4 py-3 outline-none"
              />
            </div>

          </div>
        </div>

        {/* Chocolate Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {(showAllBars
            ? filterProducts(chocolateBars)
            : filterProducts(chocolateBars).slice(0, 6)
          ).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {filterProducts(chocolateBars).length > 6 && (
          <div className="flex justify-end mb-24">
            <button
              onClick={() => setShowAllBars(!showAllBars)}
              className="px-6 py-3 bg-transparent text-black text-sm font-medium border border-black"
            >
              {showAllBars ? "View Less" : "View All"}
            </button>
          </div>
        )}

        {/* Brittle Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[36px] mb-4">
            Handcrafted Brittles
          </h2>
          <p className="text-gray-600">
            Crunchy chocolate and nut combinations made for indulgence and gifting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filterProducts(brittles).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

function ProductCard({
  product,
}: {
  product: Product;
}) {

  return (
    <div className="text-center">

      <div className="w-full max-w-[336px] h-[320px] sm:h-[380px] lg:h-[414px] mx-auto bg-gray-300 mb-4">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="font-semibold">{product.name}</h4>

      {product.category === "Bar" && (
        <>
          <p className="text-sm">{product.variant}</p>
        </>
      )}

      {product.category === "Brittle" && (
        <div className="flex justify-center gap-10 sm:gap-20 mt-3">
          <span>75g</span>
          <span>150g</span>
          <span>250g</span>
        </div>
      )}

    </div>
  );
}