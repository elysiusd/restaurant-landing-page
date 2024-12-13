import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function NavBar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };
       

    const [Click, SetNav] = useState(true);
    const HandleNav = () => SetNav(!Click);

    return (
        <div className='sticky z-50 top-0'>
            <div className=" bg-white py-8 shadow-lg">
                <div className="flex m-auto  max-w-[1240px] justify-between items-center px-4 sm:px-6 lg:px-">
                    {/* Logo Section */}
                    <div className="flex items-center">
                            <h1 className="font-bold text-3xl">
                            Name <span className="text-4xl text-green-700">.</span>
                            </h1>
                    </div>

                    {/* Navigation */}
                    <div className=" xl:flex-1 xl:flex xl:justify-center  hidden" >
                        <ul className="flex space-x-8 text-gray-600 font-medium">
                            <li onClick={() => scrollToSection("hero")} className="hover:text-black relative">
                            Home</li>
                            <li className="border-b-2 border-transparent active:border-green-500  hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black" onClick={() => scrollToSection("about")}>About</li>
                            <li onClick={() => scrollToSection("events")} className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Events</li>
                            <li onClick={() => scrollToSection("chefs")} className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Chefs</li>
                            <li onClick={() => scrollToSection("gallery")} className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Gallery</li>
                            <li  className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Dropdown</li>
                            <li onClick={() => scrollToSection("menu")} className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Menu</li>
                            <li onClick={() => scrollToSection("contact")} className="border-b-2 border-transparent hover:border-green-500 transition-all duration-700 ease-in-out hover:text-black">Contact</li>
                        </ul>
                    </div>
                    
                    {/* Button Section */}
                    <div className='flex my-auto '>
                        <button onClick={() => scrollToSection("booktable")} className="bg-green-500 font-serif hover:bg-green-200 hover:text-black hover:shadow-md w-[120px] py-2 px-4 text-sm rounded-full text-white">
                        Book a Table
                        </button>
                        <div onClick={HandleNav} className='px-5 xl:hidden'>
                            {Click ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>}
                        </div>
                    </div>
                </div>
            </div>
             {/* Side Navigation */}
             <div className={Click ? 'fixed translate-x-[-100%] transition-transform duration-1000 ease-in-out pt-16 bg-green-400 h-screen w-[40%]' : 'fixed xl:translate-x-[-100%] flex flex-col pt-16 bg-green-400 h-screen w-[40%] translate-x-0  transition-transform duration-1000 ease-in-out'} >
                        <ul className="space-x-8 text-gray-600 font-medium px-5">
                            <li onClick={() => scrollToSection("hero")} className="hover:text-black relative">
                            Home
                            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-green-700 rounded-md scale-100"></span>
                            </li>
                            <li onClick={() => scrollToSection("about")} className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">About</li>
                            <li onClick={() => scrollToSection("events")} className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Events</li>
                            <li onClick={() => scrollToSection("chefs")} className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Chefs</li>
                            <li onClick={() => scrollToSection("gallery")}  className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Gallery</li>
                            <li className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Dropdown</li>
                            <li onClick={() => scrollToSection("menu")}  className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Menu</li>
                            <li onClick={() => scrollToSection("contact")}  className="border-b-2 border-transparent hover:border-green-700 transition-all duration-700 ease-in-out hover:text-black my-3">Contact</li>
                        </ul>
            </div>
            
        </div>
      
    );
}

export default NavBar;