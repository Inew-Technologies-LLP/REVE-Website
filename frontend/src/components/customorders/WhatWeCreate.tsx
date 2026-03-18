import { useState } from "react";

import customBg from "../../assets/custombg1.png";

// MAIN IMAGES
import wedding from "../../assets/custom-what/wedding.jpg";
import floral from "../../assets/custom-what/floral.jpg";
import baby from "../../assets/custom-what/baby-shower.jpg";
import children from "../../assets/custom-what/children.jpg";

// THUMBNAILS
import wedding1 from "../../assets/custom-what/wedding1.jpg";
import wedding2 from "../../assets/custom-what/wedding2.jpg";
import wedding3 from "../../assets/custom-what/wedding3.jpg";
import wedding4 from "../../assets/custom-what/wedding4.jpg";

import floral1 from "../../assets/custom-what/floral1.jpg";
import floral2 from "../../assets/custom-what/floral2.jpg";
import floral3 from "../../assets/custom-what/floral3.jpg";
import floral4 from "../../assets/custom-what/floral4.jpg";

import baby1 from "../../assets/custom-what/baby-shower1.jpg";
import baby2 from "../../assets/custom-what/baby-shower2.jpg";
import baby3 from "../../assets/custom-what/baby-shower3.jpg";
import baby4 from "../../assets/custom-what/baby-shower4.jpg";

import children1 from "../../assets/custom-what/children1.jpg";
import children2 from "../../assets/custom-what/children2.jpg";
import children3 from "../../assets/custom-what/children3.jpg";
import children4 from "../../assets/custom-what/children4.jpg";

const ImageBlock = ({ title, description, defaultImage, images }: any) => {
  const [mainImage, setMainImage] = useState(defaultImage);
  const [thumbs, setThumbs] = useState(images);

  const handleClick = (img: string) => {
    const newThumbs = thumbs.map((t: string) =>
      t === img ? mainImage : t
    );
    setMainImage(img);
    setThumbs(newThumbs);
  };

  return (
    <div className="w-full">

      {/* CONTAINER → THIS FIXES ALIGNMENT */}
      <div className="w-[70%] mx-auto">

        {/* MAIN IMAGE */}
        <div className="aspect-[3/4] overflow-hidden mb-4">
          <img
            src={mainImage}
            className="w-full h-full object-cover"
          />
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 mb-5 overflow-x-auto">
          {thumbs.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              onClick={() => handleClick(img)}
              className="w-[70px] h-[70px] object-cover cursor-pointer border hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* TEXT */}
        <div className="text-left">
          <div className="text-lg sm:text-xl md:text-2xl font-bold font-['Quicksand'] mb-3">
            {title}
          </div>

          <div className="text-sm sm:text-base font-normal font-['Quicksand'] leading-6">
            {description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default function WhatWeCreate() {
  return (
    <section className="relative w-full bg-[#FFF8F2] overflow-hidden">

      {/* Background */}
      <img
        src={customBg}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[64px] py-14 sm:py-16 md:py-20 lg:py-[112px]">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-[120px]">
          <h2 className="font-dancing font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] mb-4">
            What We Create
          </h2>

          <div className="text-sm sm:text-base md:text-lg font-medium font-['Quicksand'] max-w-[768px] mx-auto">
            Discover the diverse clientele we serve with our exquisite cake creations.
          </div>
        </div>

        {/* GRID WRAPPER */}
        <div className="flex justify-center">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] max-w-[1100px] w-full">

            {/* LEFT */}
            <div className="flex flex-col gap-12 w-full">

              <ImageBlock
                title="Celebration Cakes"
                description="Theme-based cakes for birthdays, anniversaries, and landmark occasions designed to reflect personality, age, and style."
                defaultImage={floral}
                images={[floral1, floral2, floral3, floral4]}
              />

              <ImageBlock
                title="Wedding & Tiered Cakes"
                description="Two, three, four, or five-tiered cakes designed for weddings and large celebrations, with elegant detailing and refined flavour profiles."
                defaultImage={wedding}
                images={[wedding1, wedding2, wedding3, wedding4]}
              />

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-12 w-full">

              <ImageBlock
                title="Children’s Theme Cakes"
                description="Fun, character-led designs such as unicorn or superhero themes, created with attention to colour, structure, and finish."
                defaultImage={children}
                images={[children1, children2, children3, children4]}
              />

              <ImageBlock
                title="Baby Shower"
                description="Floral and minimal designs for anniversaries and milestone birthdays, often paired with subtle personalised elements."
                defaultImage={baby}
                images={[baby1, baby2, baby3, baby4]}
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}