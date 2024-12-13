import AboutImg from '../assets/img/about.jpg'
import AboutImg2 from '../assets/img/about-2.jpg'

function About() {
    return (
        <div id='about' className="max-w-[1240px] h- mx-auto my-50 lg:my-10 px-4 py-10">
            {/* Section Heading */}
            <div className="text-center mb-10">
              <h1 className="text-gray-400 text-lg uppercase">About Us</h1>
              <h2 className=" text-3xl font-serif">
                Learn More <span className="text-green-600">About Us</span>
              </h2>
            </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Column: Primary Image */}
          <div className="w-full lg:w-1/2 pr-4">
            <img
              src={AboutImg}
              alt="Interior"
              className="w-full h-auto rounded-lg"
            />
            {/* Call to Action: Book a Table */}
            <div className="border border-gray-400 my-8 py-6 text-center mx-auto shadow-lg">
              <h1 className="text-black font-bold text-2xl mb-2">Book a Table</h1>
              <h1 className="text-green-600 font-bold text-3xl">+1 5589 55488 55</h1>
            </div>
          </div>

          {/* Right Column: Text + Secondary Image */}
          <div className="w-full lg:w-1/2 pl-4">
            {/* Description Section */}
            <div className="text-left">
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="pl-5 mb-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-2">✔</span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-2">✔</span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-2">✔</span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            {/* Secondary Image with Play Button Overlay */}
            <div className="relative mt-8">
              <img
                src={AboutImg2}
                alt="Food"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
}

export default About;