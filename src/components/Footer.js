import React from 'react';
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineTimelapse } from "react-icons/md";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-gray-950 w-full text-white'>
            <div className='flex lg:flex-row flex-col max-w-[1240px] mx-auto px-10 justify-between py-10'>
                <div className='font-serif'>
                    
                    <h1 className='font-bold'><span className='text-green-500'><GrLocation size={25}/></span>Address</h1>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                </div>
                <div className=''>
                    <h1 className='font-bold'><span className='text-green-500'><IoCallOutline size={25}/></span>Contact</h1>
                    <p>Phone: _+1 5589 55488 55</p>
                    <p>Email: Info@gmail.com</p>
                </div>
                <div className=''>
                    <h1 className='font-bold'><span className='text-green-500'><MdOutlineTimelapse size={25}/></span>Opening Hours</h1>
                    <p>Mon-Sat: 11AM - 5PM</p>
                    <p>Sunday: Closed</p>
                </div>
                <div className='py-5'>
                    <h1 className='font-bold'>Follow Us</h1>
                    <div className='flex gap-6'>
                        <FaFacebook size={30}/>
                        <FaInstagram size={30}/>
                        <FaSquareXTwitter size={30}/>
                        <FaLinkedin size={30}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className=' text-center py-5'>
                <p>© Copyright Yummy All Rights Reserved</p>
                <p>Designed by <a href='https://github.com/oduagbondestiny' className='text-bold text-green-500'>Destiny</a> </p>
            </div>
            
        </div>
    );
}

export default Footer;