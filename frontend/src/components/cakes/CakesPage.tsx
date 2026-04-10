import { useState, useEffect } from "react";
import cakeBg from "../../assets/CakeBG.webp";
import searchIcon from "../../assets/search.svg";
import kunafaImg from "../../assets/kunafa.webp";
import icon from "../../assets/icon1.svg";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";

type Product = {
  id: number;
  name: string;
  variant: string;
  category: string;
  eggless: boolean;
  image_url: string[];
  description: string;
};

const categories = [
  "View All",
  "Truffle",
  "Buttercream",
  "Cheesecake",
  "Mousse",
];

export default function CakesPage({}: any) {

  const BASE_URL = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [egglessOnly, setEgglessOnly] = useState(false);
  const [activeCategory, setActiveCategory] = useState("View All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    const fetchCakes = async () => {
      const res = await fetch(`${BASE_URL}/cakes`);
      const data = await res.json();
      setProducts(data);
    };
    fetchCakes();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [search, egglessOnly, activeCategory]);

  const filteredProducts = products.filter((product: Product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesEggless = egglessOnly ? product.eggless : true;

    const matchesCategory =
      activeCategory === "View All" ||
      product.category === activeCategory;

    return matchesSearch && matchesEggless && matchesCategory;
  });

  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 md:py-[112px] overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #FFE2E2, #E8B7B7)" }}
      />

      <img
        src={cakeBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto bg-[#FFFDEC] rounded-[20px] p-6 sm:p-8 md:p-[40px] shadow-xl">

        <div className="text-center mb-12">
          <div className="text-base font-semibold mb-2">Cakes</div>

          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Crafted Cakes for Every Occasion
          </div>

          <div className="max-w-[768px] mx-auto text-sm sm:text-base md:text-lg px-4">
            A thoughtfully curated selection of classic, modern, and signature cakes<br />Available in egg and eggless options.
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[900px]">

            <div className="relative flex-1 w-full">
              <img
                src={searchIcon}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              />

              <input
                type="text"
                placeholder="Search cakes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-2 border-[#E8B4B4] pl-10 pr-4 py-3 outline-none"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={egglessOnly}
                onChange={() => setEgglessOnly(!egglessOnly)}
                className="hidden"
              />

              <div
                className={`w-11 h-6 flex items-center rounded-full px-1 transition-colors duration-300 ${
                  egglessOnly ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
                    egglessOnly ? "translate-x-5" : ""
                  }`}
                />
              </div>

              <span className="text-sm">Egg Less</span>
            </label>

          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm ${
                activeCategory === cat
                  ? "bg-[#E8B4B4] text-white"
                  : "bg-white-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ProductGrid
          products={filteredProducts.slice(0, visibleCount)}
          setSelectedProduct={setSelectedProduct}
        />

        {visibleCount < filteredProducts.length && (
          <div className="flex justify-end mt-8">
            <button
              onClick={() => setVisibleCount(filteredProducts.length)}
              className="px-6 py-3 bg-transparent text-black text-sm font-medium border border-black"
            >
              View All
            </button>
          </div>
        )}

        <section
          className="relative w-full max-w-[1102px] mx-auto min-h-[420px] sm:min-h-[450px] md:h-[366px] my-16 bg-cover flex items-center"
          style={{
            backgroundImage: `url(${kunafaImg})`,
            backgroundPosition: "center 15%",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-white">

            <div>
              <img src={icon} alt="Icon" className="mb-5 w-10 h-10 md:w-12 md:h-12" />

              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Dancing_Script']">
                Introducing Pistachio Kunafa Creations
              </div>
            </div>

            <div>
              <div className="text-sm sm:text-base md:text-lg leading-7 mb-6">
                A new flavour story joins our collection. Inspired by the richness of pistachio and the delicate crunch of kunafa.
              </div>

              <Link
                to="/chocolates"
                className="inline-block self-start border border-white px-6 sm:px-8 py-3 text-sm sm:text-base hover:bg-white hover:text-black transition"
              >
                Explore the New Collection
              </Link>

            </div>

          </div>
        </section>

      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          close={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function ProductGrid({
  products,
  setSelectedProduct,
}: {
  products: Product[];
  setSelectedProduct: (p: Product) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => setSelectedProduct(product)}
          className="cursor-pointer w-full max-w-[251px]"
        >

          <div className="w-full aspect-[251/309] overflow-hidden">
            <LazyImage
              src={product.image_url?.[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between mt-3">
            <h4 className="font-semibold font-['Roboto'] text-sm sm:text-base">
              {product.name}
            </h4>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {product.variant}
          </p>

          <span
            className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
              product.eggless
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {product.eggless ? "Eggless" : "Egg"}
          </span>

        </div>
      ))}

    </div>
  );
}

function ProductModal({
  product,
  close,
}: {
  product: Product;
  close: () => void;
}) {

  const [activeTab, setActiveTab] = useState<
    "details" | "shipping" | "returns"
  >("details");

  const [activeImage, setActiveImage] = useState(product.image_url?.[0]);

  const [thumbnails, setThumbnails] = useState<string[]>([
    product.image_url?.[1],
    product.image_url?.[2],
  ].filter(Boolean));

  const handleThumbnailClick = (clickedImg: string, index: number) => {

    const updatedThumbnails = [...thumbnails];

    updatedThumbnails[index] = activeImage;

    setActiveImage(clickedImg);
    setThumbnails(updatedThumbnails);

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Blurred Background */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FFF8F2] w-full max-w-[1200px] 
                      max-h-[90vh] overflow-y-auto 
                      rounded-[24px] 
                      p-6 sm:p-8 md:p-12 
                      z-50 
                      flex flex-col lg:flex-row 
                      gap-10 md:gap-16 lg:gap-20">

        {/* LEFT SECTION */}
        <div className="flex-1">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            {product.name}
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 sm:gap-8 mb-6 text-sm font-medium flex-wrap">
            {["details"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`${
                  activeTab === tab
                    ? "border-b-2 border-black pb-1"
                    : "text-gray-500"
                }`}
              >
                <div className="text-base font-semibold font-['Quicksand'] leading-6 capitalize">
                  {tab}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-10 max-w-[400px]">
            {activeTab === "details" && (
              <div className="text-base font-normal font-['Quicksand'] leading-6">
                {product.description || "No description available"}
              </div>
            )}
          </div>

          {/* Variant */}
          <div>
            <h4 className="mb-4 font-semibold">Variant</h4>

            <div className="flex gap-4 flex-wrap">
              {["250 g", "500 g", "1 kg"].map((variant) => (
                <div
                  key={variant}
                  className="w-[72px] h-[40px] text-sm flex items-center rounded-lg justify-center border border-black"
                >
                  {variant}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1">

          {/* Main Image */}
          <div className="w-full max-w-[490px] aspect-square bg-gray-300 mb-6 overflow-hidden">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 flex-wrap">
            {thumbnails.map((img, i) => (
              <div
                key={i}
                onClick={() => handleThumbnailClick(img, i)}
                className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] bg-gray-300 overflow-hidden cursor-pointer"
              >
                <LazyImage
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-6 text-2xl font-light"
        >
          ✕
        </button>

      </div>
    </div>
  );
}