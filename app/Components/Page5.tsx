"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { PiQuotesFill } from "react-icons/pi"

import "swiper/css"
import "swiper/css/pagination"

const Page5 = () => {

  const [datas, setData] = useState<any[]>([])

  useEffect(() => {
    const handleApi = async () => {
      try {

        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        )

        setData(response.data.data)

      } catch (error: any) {
        console.log("Error while fetching the api", error.message)
      }
    }

    handleApi()
  }, [])

  return (
    <div className="w-full py-16 px-6 lg:px-16">

      {/* Heading */}
      <div className="max-w-3xl">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 font-semibold">
          What Our Customers Say
        </h1>

        <p className="mt-4 text-[#002348] text-sm sm:text-base">
          Customer reviews reflect real experiences shared by clients about the
          quality of services they received. They highlight satisfaction,
          trust, and the overall impact of the service.
        </p>

      </div>

      {/* Swiper */}
      <div className="mt-12 ">

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          style={
            {
              padding: "6vh 0vh"
            }
          }
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
          }}

        >

          {datas.map((data: any) => (
            <SwiperSlide key={data.ID}>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative flex flex-col justify-between min-h-[220px] hover:shadow-2xl transition">

       
                <div className="w-10 h-10 bg-blue-500 absolute -top-5 right-4 rounded-full flex justify-center items-center z-10">
                  <PiQuotesFill color="white" size={18} />
                </div>

      
                <p className="text-gray-600 text-sm sm:text-base">
                  {data.Reviews}
                </p>


                <div className="mt-6">
                  <h1 className="font-semibold text-blue-900">
                    {data.Name}
                  </h1>

                  <p className="text-gray-500 text-sm">
                    {data.Platform}
                  </p>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  )
}

export default Page5