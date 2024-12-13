import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";
import Gallery1 from '../assets/img/gallery/gallery-1.jpg'
import Gallery2 from '../assets/img/gallery/gallery-2.jpg'
import Gallery3 from '../assets/img/gallery/gallery-3.jpg'
import Gallery4 from '../assets/img/gallery/gallery-4.jpg'
import Gallery5 from '../assets/img/gallery/gallery-5.jpg'
import Gallery6 from '../assets/img/gallery/gallery-6.jpg'
import Gallery7 from '../assets/img/gallery/gallery-7.jpg'
import Gallery8 from '../assets/img/gallery/gallery-8.jpg'

const GallerySlider = () => {
  return (
    <div id="gallery" className="w-full bg-gray-50">
         <div className="container mx-auto justify-center py-12">
      <h2 className="text-4xl font-serif text-center mb-8">
        Check <span className="text-green-500">Our Gallery</span>
      </h2>
      
      {/* Swiper Container */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            src={Gallery1}
            alt="Gallery1"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery2}
            alt="Gallery2"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery3}
            alt="Gallery3"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery4}
            alt="Gallery4"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery5}
            alt="Gallery4"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery6}
            alt="Gallery5"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery7}
            alt="Gallery6"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gallery8}
            alt="Gallery8"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    </div>
  );
};

export default GallerySlider;
