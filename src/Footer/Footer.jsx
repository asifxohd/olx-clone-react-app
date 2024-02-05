import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import AppStore from '../assets/appstore_2x.webp'
import PlayStore from '../assets/playstore_2x.webp'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='maindiv w-full flex justify-center  bg-gray-200 '>
        <div className='w-[70%] h-[130px]  text-zinc-500 flex text-xs justify-between mt-6'>
            <ul className='space-y-1'>
                <li className='font-bold text-sm mb-2 text-black'>POPULAR LOCATIONS</li>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
            </ul>
            <ul className='space-y-1'>
                <li className='font-bold mb-2 text-sm text-black'>TRENDING LOCATIONS</li>
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
            </ul>
            <ul className='space-y-1'>
                <li className='font-bold mb-2 text-sm text-black'>ABOUT US</li>
                <li>Contact Us</li>
            </ul>
            <ul className='space-y-1'>
                <li className='font-bold mb-2 text-sm text-black'>OLX</li>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
                <li>Vulnerability Disclosure Program</li>
            </ul> 
            <ul className='space-y-1'>
                <li className='font-bold mb-2 text-sm text-black'>FOLLOW US</li>
                <li><div className='flex'>
                    <FaFacebookF size={20} className=''/>
                    <FaInstagram size={20} className='ml-3'/>
                    <FaTwitter size={20} className='ml-3'/>
                    <FaRegCirclePlay size={20} className='ml-3'/>
                    </div></li>
                <li>
                    <div className='flex mt-5'>
                        <img className='bg-gray-200 w-20' src={AppStore} alt="" />
                        <img className='bg-gray-200 w-20 ml-2' src={PlayStore} alt="" />
                    </div>
                </li>
                
            </ul>

        </div>
    </div>
    <div className='backgoundgreenfooter h-[60px] flex justify-center'>
        <div className='w-[75%] font-semibold  text-white flex text-xs justify-between items-center'> 
        <div>Help-Sitemap</div>
        <div>All rights reserved &copy; 2006-2024 OLX</div>
        </div>
    </div>
    {/* </div> */}
    </>

  )
}

export default Footer