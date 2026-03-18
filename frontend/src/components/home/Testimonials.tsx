import testimonialsBg from "../../assets/testimonials.png";

import img1 from "../../assets/testimonials/1.jpg";
import img2 from "../../assets/testimonials/2.jpg";
import img3 from "../../assets/testimonials/3.jpg";
import img4 from "../../assets/testimonials/4.jpg";
import img5 from "../../assets/testimonials/5.jpg";
import img6 from "../../assets/testimonials/6.jpg";

export default function Testimonials() {

  const testimonialImages = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16"
      style={{ backgroundImage: `url(${testimonialsBg})` }}
    >

      {/* Header */}
      <div className="max-w-[1440px] mx-auto text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Dancing_Script'] text-white mb-4">
          Customer testimonials
        </h2>
      </div>

      {/* Image Cards */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        {testimonialImages.map((img, index) => (
          <div
            key={index}
            className="bg-white border border-black overflow-hidden"
          >
            <img
              src={img}
              alt={`testimonial-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>
    </section>
  );
}