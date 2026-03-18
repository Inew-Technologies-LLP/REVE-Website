import { Link } from "react-router-dom";
import blogBg from "../../assets/blog.png";
import chevronRight from "../../assets/chevron_right.svg";

import cakeImg from "../../assets/H-cake.jpg";
import chocolateImg from "../../assets/H-chocolate.jpg";
import workshopImg from "../../assets/H-workshop.jpg";

const Blog = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Background */}
      <img
        src={blogBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

        {/* Header */}
        <h2 className="font-['Dancing_Script'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#03162A] mb-14">
          Signature Highlights
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          <BlogCard
            title="Cakes"
            description="A curated selection of classic, modern, and signature cakes, available in egg and eggless options."
            link="/cakes"
            linkText="View Cakes"
            image={cakeImg}
          />

          <BlogCard
            title="Chocolates"
            description="Handcrafted chocolate bars and brittles made in small batches, designed for indulgence and gifting."
            link="/chocolates"
            linkText="Explore Chocolates"
            image={chocolateImg}
          />

          <BlogCard
            title="Workshops"
            description="Hands-on pastry sessions focused on technique, learning, and experience."
            link="/workshops"
            linkText="View Workshops"
            image={workshopImg}
          />

        </div>
      </div>
    </section>
  );
};

export default Blog;


/* Reusable Card Component */
function BlogCard({
  title,
  description,
  link,
  linkText,
  image,
}: {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}) {
  return (
    <div className="flex flex-col h-full">

      {/* Image (Replaced Gray Box) */}
      <div className="w-full aspect-[407/270] mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-['Quicksand'] text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-sm sm:text-base font-medium font-['Quicksand'] text-slate-900 mb-6">
        {description}
      </p>

      <Link
        to={link}
        className="mt-auto flex items-center gap-2 text-neutral-800 text-sm sm:text-base font-normal font-['Roboto'] hover:opacity-70 transition"
      >
        <span>{linkText}</span>
        <img src={chevronRight} alt="arrow" className="w-4 h-4" />
      </Link>
    </div>
  );
}