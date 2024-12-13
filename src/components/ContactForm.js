import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineTimelapse } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function ContactForm() {
    return (
        <div id="contact">
            <div className="max-w-[1240px] mx-auto">
                   {/* Section Heading */}
                   <div className="text-center mb-10 pt-10">
                        <h1 className="text-gray-500 text-lg uppercase">Contact Us</h1>
                        <h1 className="text-3xl font-serif">
                            Need Help? <span className="text-green-600">Reach Out</span>
                        </h1>
                    </div>
                    {/*  Contact Card Section */}
                    <div className=" flex flex-col lg:flex-row justify-center">
                        <div className="shadow-lg bg-white my-5 lg:w-[300px] w-full  py-5 px-5 mx-auto">
                            <span className="text-green-500"><GrLocation size={25} /></span>
                            <h1>Address</h1>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className="shadow-lg bg-white my-5 lg:w-[300px] w-full  py-5 px-5 mx-auto">
                        <span className="text-green-500"><IoCallOutline size={25} /></span>
                            <h1>Call Us
                            </h1>
                            <p>+1 5589 55488 55</p>
                        </div>
                        <div className="shadow-lg bg-white my-5 lg:w-[300px] w-full  py-5 px-5 mx-auto">
                        <span className="text-green-500"><MdEmail size={25} /></span>
                            <h1>Email Us</h1>
                            <p>info@example.com</p>
                        </div>
                        <div className="shadow-lg bg-white my-5 lg:w-[300px] w-full  py-5 px-5 mx-auto">
                        <span className="text-green-500"> <MdOutlineTimelapse size={25} /></span>
                            <h1>Opening Hours</h1>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                     {/*  Contact Form Section */}
                     <div className="mx-auto flex flex-col lg:flex-wrap justify-center shadow-lg mb-7">
                        <form className="px-10 py-10">
                            <input type="text" className="lg:w-[47%] w-full border-2 mr-8 mb-5 px-9 py-2" placeholder="Your Name"/>
                            <input type="email" className="lg:w-[47%] w-full border-2 mr-8 mb-5 px-9 py-2" placeholder="Your Email" />
                            <input type="text" className="lg:w-[100%] w-full border-2 px-9 py-2 mb-5"  placeholder="Subject" />
                            <textarea className="w-[100%] border-2 px-9 pb-12 pt-6 mb-5"   placeholder="Message">
                            </textarea>
                            <div className="flex justify-center items-center">
                                <button type="submit" className="bg-green-500 text-white px-7 py-3 rounded-xl"> Send Message </button>
                            </div>
                        </form>

                     </div>

            </div>
            
        </div>
    );
}

export default ContactForm;