import { useEffect, useState } from "react"
import workshopBg from "../../assets/workshopbg2.png";

interface WorkshopType {
  id: number
  image_url: string
  heading: string
  content: string
  tag: string
}

export default function WorkshopTypes() {

  const [types, setTypes] = useState<WorkshopType[]>([])

  useEffect(() => {

    const fetchTypes = async () => {
      const res = await fetch("http://localhost:5000/workshops-types")
      const data = await res.json()
      setTypes(data)
    }

    fetchTypes()

  }, [])

  return (
    <section className="relative w-full bg-[#FFFDEC] overflow-hidden py-[60px] sm:py-[80px] lg:py-[112px]">

      {/* Background */}
      <img
        src={workshopBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] z-10">

        {/* Header */}
        <div className="text-center mb-[60px] sm:mb-[80px]">
          <div className="text-base font-semibold font-['Roboto'] leading-6 mb-[12px]">
            WORKSHOP TYPES
          </div>

          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Roboto'] leading-tight lg:leading-[57.60px]">
            Types of Workshops We Offer
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[50px] sm:gap-[60px] lg:gap-[80px]">

          {types.map((type, index) => (

            <div
              key={type.id}
              className={`w-full ${index === 0 ? "lg:w-[632px]" : "lg:w-[616px]"}`}
            >

              {/* Image */}
              <div
                className={`w-full ${
                  index === 0
                    ? "h-[220px] sm:h-[300px] lg:h-[346px]"
                    : "h-[260px] sm:h-[400px] lg:h-[616px]"
                } mb-[24px] overflow-hidden`}
              >
                <img
                  src={type.image_url}
                  alt={type.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading */}
              <div className="text-xl sm:text-2xl font-bold font-['Quicksand'] leading-8 mb-[16px]">
                {index + 1}. {type.heading}
              </div>

              {/* Content */}
              <div className="text-base font-medium font-['Quicksand'] leading-6 mb-[20px]">
                {type.content}
              </div>

              {/* Tag */}
              {type.tag && (
                <span className="inline-block bg-[#F0B8B8] font-['Roboto'] text-white text-sm sm:text-base px-4 py-2 border border-[#e39fa0] shadow-sm rounded-lg">
                  {type.tag}
                </span>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}