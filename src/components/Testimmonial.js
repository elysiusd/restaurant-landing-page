import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonalImg1 from '../assets/img/testimonials/testimonials-1.jpg'
import TestimonalImg2 from '../assets/img/testimonials/testimonials-2.jpg'
import TestimonalImg3 from '../assets/img/testimonials/testimonials-3.jpg'
import TestimonalImg4 from '../assets/img/testimonials/testimonials-4.jpg'

function Testimonial() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          What Are They <span className="text-green-500">Saying About Us</span>
        </h2>

        <Swiper
          modules={[Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover mb-4"
                src={TestimonalImg1}
                alt="User"
              />
              <p className="text-gray-600 text-center mb-4">
                "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
              </p>
              <h3 className="text-gray-800 font-semibold">Sara Wilson</h3>
              <p className="text-sm text-gray-500">Designer</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.198c.969 0 1.371 1.24.588 1.81l-3.4 2.425a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.4-2.425a1 1 0 00-1.175 0l-3.4 2.425c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.73 9.394c-.783-.57-.38-1.81.588-1.81h4.198a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover mb-4"
                src={TestimonalImg2}
                alt="User"
              />
              <p className="text-gray-600 text-center mb-4">
                "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
              </p>
              <h3 className="text-gray-800 font-semibold">Sara Wilson</h3>
              <p className="text-sm text-gray-500">Designer</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.198c.969 0 1.371 1.24.588 1.81l-3.4 2.425a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.4-2.425a1 1 0 00-1.175 0l-3.4 2.425c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.73 9.394c-.783-.57-.38-1.81.588-1.81h4.198a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover mb-4"
                src={TestimonalImg3}
                alt="User"
              />
              <p className="text-gray-600 text-center mb-4">
                "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
              </p>
              <h3 className="text-gray-800 font-semibold">Sara Wilson</h3>
              <p className="text-sm text-gray-500">Designer</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.198c.969 0 1.371 1.24.588 1.81l-3.4 2.425a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.4-2.425a1 1 0 00-1.175 0l-3.4 2.425c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.73 9.394c-.783-.57-.38-1.81.588-1.81h4.198a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover mb-4"
                src={TestimonalImg4}
                alt="User"
              />
              <p className="text-gray-600 text-center mb-4">
                "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
              </p>
              <h3 className="text-gray-800 font-semibold">Sara Wilson</h3>
              <p className="text-sm text-gray-500">Designer</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.198c.969 0 1.371 1.24.588 1.81l-3.4 2.425a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.4-2.425a1 1 0 00-1.175 0l-3.4 2.425c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.73 9.394c-.783-.57-.38-1.81.588-1.81h4.198a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
