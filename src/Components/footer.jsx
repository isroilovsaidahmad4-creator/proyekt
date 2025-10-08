import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { LiaVk } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='bg-white flex ' style={{width:"84%",height:"120px", marginTop:"100px",borderTopRightRadius:"20px ",borderTopLeftRadius:"20px",paddingTop:"10px"}}>
        <div>
            <img  style={{marginLeft:"20px",marginTop:"20px",marginRight:"200px"}} src="./QPICK.png" alt="" />
        </div>
        <div className='mt-4 mb-2'>
            <p>Избранное</p>
            <p>Корзина</p>
            <p>Контакты</p>
        </div>
        <div className='mt-4 mb-2 ' style={{marginLeft:"150px",marginRight:"140px"}}>
            <p  className='mb-6' >Условия сервиса</p>
            <div className='flex items-center'>
                <p><CiGlobe /></p>
                <p className='m-2'>Каз</p>
                <p className='m-2' style={{color:"rgba(255, 165, 66, 1)"}}>Рус</p>
                <p className='m-2'>Eng</p>
            </div>
        </div>
        <div className='mt-4 mb-2 flex'>
          <LiaVk  className='text-4xl'/>  
          <FaInstagram className='text-3xl ' style={{marginTop:"3px"}}/>
          <RiTelegramLine className='text-3xl ' style={{marginTop:"3px"}} />
          <FaWhatsapp className='text-3xl' style={{marginTop:"3px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
