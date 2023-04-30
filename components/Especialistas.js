import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { especialistas } from "../constants/index";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Especialistas = () => {
  return (
    <div
      className="flex flex-col font-poppins justify-center items-center"
      id="especialistas"
    >
      <h1 className="fold:text-2xl xs:text-3xl sm:text-4xl py-14 text-center">
        Conheça nossos <span className="font-extrabold">Especialistas!</span>
      </h1>

      <div className="especialistas-container">
        <Swiper
          grabCursor={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="swiper_container2 select-none"
        >
          {especialistas.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center text-center px-14 py-10"
            >
              <Image
                src={item.src}
                alt="slide_image"
                width={300}
                height={300}
                className=""
                priority={true}
              />
              <div className="">
                <h1 className="mt-4 font-bold">{item.name}</h1>
                <p className="text-[#7F7F7F] text-sm">{item.cargo}</p>
                <p className="text-[#7F7F7F] text-sm">{item.code}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev swiper-nav"></div>
          <div className="swiper-button-next swiper-nav"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Especialistas;
