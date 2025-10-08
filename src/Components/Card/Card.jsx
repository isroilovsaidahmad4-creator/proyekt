import React from 'react'

const Card = () => {
  return (
    <div >
      <p className='text-gray-500 mt-6 mb-4' style={{fontSize:"20px"}}>Чехлы</p>
      <div className='flex items-center mr-6'>
        
        <div style={{ marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"80px"}} src="./Iphone.png" alt="" />
            <p className='font-medium ' style={{marginLeft:"105px",marginTop:"20px"}}>Стеклянные</p>
        </div>
        <div style={{marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"80px"}} src="./Iphone2.png" alt="" />
            <p className='font-medium ' style={{marginLeft:"105px",marginTop:"20px"}}>Силиконовые</p>
        </div>
        <div style={{background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"80px"}} src="./Iphone3.png" alt="" />
            <p className='font-medium ' style={{marginLeft:"105px",marginTop:"20px"}}>Кожаные</p>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Card
