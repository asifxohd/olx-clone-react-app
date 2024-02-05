import React from 'react'
import './SecondNavbar.css'
import { IoIosArrowDown } from "react-icons/io";

function SecondNavbar() {
  return (
    <>
    <div className='secondnav w-full  max-md:hidden md:h-[44px] shadow-md flex items-center '>
        <div className='2xl:ml-[140px] ml-3 md:text-xs flex font-bold'>ALL CATEGORIES<IoIosArrowDown size={25} /></div>
        <div className='2xl:mr-[200px] 2xl:ml-[70px] md:w-[850px] xl:w-[1050px] xl:ml-[50px] lg:w-[950px] lg:ml-0 xl:mr-14 flex justify-between md:text-xs md:ml-6'>
            <span className='ml-1'>Cars</span>
            <span className='ml-1'>Motorcycles</span>
            <span className='ml-1'>Mobile Phones</span>
            <span className='ml-1'>For Sale: Houses & Apartments</span>
            <span className='ml-1'>Scooters</span>
            <span className='ml-1'>Commercial & Other Vehicles</span>
            <span className='ml-1'>For Rent:Houses & Apartments</span>
        </div>
        {/* <div className='bg-black h-[44px] w-[80%]'></div> */}
    </div>
    </>
  )
}

export default SecondNavbar