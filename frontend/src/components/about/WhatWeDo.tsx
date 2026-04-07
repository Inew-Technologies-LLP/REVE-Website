import { Link } from "react-router-dom";
import blogBg from "../../assets/aboutbg2.png";
import waveBg from "../../assets/wave3.png";

import cakeImg from "../../assets/crafted/cake.webp";
import chocolateImg from "../../assets/crafted/chocolate.webp";
import customImg from "../../assets/crafted/custom.webp";
import workshopImg from "../../assets/crafted/workshop.webp";
import LazyImage from "../../components/LazyImage";


export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-[#FFE2E2] overflow-hidden">

      {/* TOP BACKGROUND */}
      <img
        src={blogBg}
        alt="Top Background"
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* BOTTOM BACKGROUND */}
      <img
        src={waveBg}
        alt="Bottom Background"
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

        {/* SMALL HEADING */}
        <p className="text-sm sm:text-base font-semibold font-['Roboto'] mb-4">
          What We Do
        </p>

        {/* MAIN HEADING */}
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl font-['Dancing_Script'] mb-6">
          Crafted at Rêve
        </h2>

        {/* INTRO TEXT */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg font-medium font-['Quicksand'] leading-7 mb-16">
          Cakes, chocolates, custom creations, and workshops—each shaped by technique, balance, and creativity.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-12">

          <Card
            title="Cakes"
            description="Signature and celebration cakes, available in a range of flavours and styles."
            link="/cakes"
            image={cakeImg}
          />

          <Card
            title="Chocolates & Brittles"
            description="Handcrafted chocolate bars and crunches designed for gifting and indulgence."
            link="/chocolates"
            image={chocolateImg}
          />

          <Card
            title="Custom Orders"
            description="Bespoke desserts tailored to your occasion, preferences, and vision."
            link="/custom-orders"
            image={customImg}
          />

          <Card
            title="Workshops"
            description="Hands-on sessions designed to share technique, knowledge, and experience."
            link="/workshops"
            image={workshopImg}
          />

        </div>

      </div>
    </section>
  );
}

function Card({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
}) {
  return (
    <div>
      <div className="w-full aspect-[350/300] overflow-hidden rounded-lg">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Quicksand'] mt-6 mb-3">
        {title}
      </h3>

      <p className="text-sm sm:text-base font-normal font-['Quicksand'] mb-6">
        {description}
      </p>

      {/* LINK BUTTON */}
      <Link
        to={link}
        className="w-full h-12 bg-[#86A788] text-white font-['Roboto'] rounded-md flex items-center justify-center hover:opacity-90 transition"
      >
        Know More
      </Link>
    </div>
  );
}