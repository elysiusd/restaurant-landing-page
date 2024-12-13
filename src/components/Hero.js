import HeroImg from '../assets/img/hero-img.png'
import { RxVideo } from "react-icons/rx";

function Hero() {
    return (
        <div id='hero' className="bg-slate-100 h-full lg:h-[600px] w-full items-center justify-center">
            {/* Container */}
            <div className="max-w-[1240px] mx-auto w-full lg:py-14 flex flex-col lg:flex-row  items-center lg:items-center justify-center">

                {/* Image Section */}
                <div className="mt-10 lg:mr-0 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end px-6">
                <img
                    src={HeroImg}
                    alt="Delicious Food"
                    className="w-[600px] lg:w-[500px] rounded-lg animate-float"
                />
                </div>

                 {/* Text Section */}
              <div className="text-left lg:w-1/2 space-y-6 lg:ml-60  font-mono pl-6">
                    <h1 className="md:text-5xl md:pt-5 text-2xl font-serif lg:pt-40 leading-snug">
                        Enjoy Your Healthy <br />
                        Delicious Food
                    </h1>
                    <p className="text-md text-gray-500">
                        Just a talented designers making websites with React And TailWindCSS
                    </p>
                <div className="flex justify-start lg:justify-start items-start space-x-4 pb-10">
                    <button className=" hover:bg-green-200 font-serif hover:text-black  hover:shadow-md bg-green-500 text-white text-sm py-3 px-8 rounded-full">
                    Book a Table
                    </button>
                    <button className="hover:bg-red-800 hover:shadow-md font-serif text-sm flex items-center text-black bg-red-600 py-2 px-3 rounded-full space-x-2">
                    <span className="bg-gray-200 p-2 rounded-full">
                        <RxVideo size={10} />
                        
                    </span>
                    <span>Watch Video</span>
                    </button>
                </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;