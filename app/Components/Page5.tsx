"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { PiQuotesFill } from "react-icons/pi";

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

                // console.log("Response received:", response.data.data)

                setData(response.data.data)

            } catch (error: any) {
                console.log("Error while fetching the api", error.message)
            }
        }

        handleApi()
    }, [])

    return (
        <div className="w-full min-h-screen">

            <h1 className="text-5xl text-blue-900 font-semibold pl-18 mt-10">
                What Our Customers Say
            </h1>
            <p className="pl-18 pt-5 w-[60%] text-[#002348] ">Customer reviews reflect real experiences shared by clients about the quality of services they received. They highlight satisfaction, trust, and the overall impact of the service.</p>
            <div className="w-full mt-7 p-12">

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    className=""
                    style={
                        {
                            paddingTop: "7vh",
                            paddingBottom: "7vh"
                        }
                    }
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                >

                    {datas.map((data: any) => (
                        <SwiperSlide key={data.ID}>

                            <div className="bg-white h-[33vh] p-8 rounded-xl shadow-xl flex flex-col justify-between border-gray-200 border relative">

                                <div className="w-[7vh] h-[7vh] bg-blue-500 absolute -top-[10%] -right-[1%] rounded-full flex justify-center items-center" >
                                    <PiQuotesFill color="white"  size={22} />
                                </div>

                                <p className="text-gray-600">
                                    {data.Reviews}
                                </p>

                                <div className="mt-5">
                                    <h1 className="font-semibold">
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