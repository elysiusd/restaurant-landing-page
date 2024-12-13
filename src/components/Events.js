import React, { useState, useRef } from "react";
import EventIMG1 from '../assets/img/events-1.jpg'
import EventIMG2 from '../assets/img/events-2.jpg'
import EventIMG3 from '../assets/img/events-3.jpg'
import EventIMG4 from '../assets/img/events-4.jpg'

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "Custom Parties",
      price: "$99",
      description: "In delectus sint qui et enim...",
      image: EventIMG1,
    },
    {
      title: "Private Parties",
      price: "$499",
      description: "Laborum aperiam atque omnis...",
      image: EventIMG2,
    },
    {
      title: "Birthday Parties",
      price: "$899",
      description: "Esse quisquam ducimus officia...",
      image: EventIMG3,
    },
    {
        title: "Wedding Parties",
        price: "$899",
        description: "Esse quisquam ducimus officia...",
        image: EventIMG4,
      },
  ];

  const handleScroll = () => {
    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.offsetWidth;
    const index = Math.round(scrollPosition / slideWidth);
    setActiveIndex(index);
  };

  const scrollToSlide = (index) => {
    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="relative pt-14" id="events" >
      {/* Slider Container */}
      <div
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 px-4"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-full lg:w-1/3"
          >
            <div className="relative bg-black text-white rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full lg:h-[500px] object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <span className="text-xl mt-4">{slide.price}</span>
                <p className="text-cent mt-2 text-sm">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-green-500" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => scrollToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
