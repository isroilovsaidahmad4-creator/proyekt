import React from 'react'
import { BiColor } from 'react-icons/bi';
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";  
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    
    <div className='flex items-center  mt-4 ' >
      <div>
        <img   src="./QPICK.png" alt="" />
      </div>
      <div className='ml-20 mr-52 flex items-center'>
        <IoMdPhonePortrait className='text-2xl ml-2 ' />
        <p>Выбрать модель телефона</p>
        <IoIosArrowDown className='ml-1 text-xl' />
      </div>
      <div className='flex items-center ml-80 mr-36'>
        <CiHeart className='text-2xl mr-4'/>
        <IoCartOutline className='text-2xl ' />
        </div>
    </div>
  )
}

export default Navbar
