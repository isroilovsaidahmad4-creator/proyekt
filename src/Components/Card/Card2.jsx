import React from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
// import Checkbox from '@mui/material/Checkbox';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Card = () => {
  return (
    <div >
      <p className='text-gray-500 mt-6 mb-4' style={{fontSize:"20px"}}>Наушники</p>
     <div className='flex items-center pr-32 mb-24'>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"48px"}} src="./Naushnik1.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"120px",marginTop:"20px",}}>Apple BYZ S852I</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>2927 ₸I</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.7</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"48px"}} src="./Naushnik2.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"120px",marginTop:"20px",}}>Apple EarPods</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>2927 ₸I</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.5</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img className='mt-6 mb-8 ' style={{marginLeft:"48px"}} src="./Naushnik3.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"120px",marginTop:"20px",}}>Apple EarPods</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>2327 ₸</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.5</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div >
     </div>
     <div >
      <p className='text-gray-500 mt-6 mb-4' style={{fontSize:"20px"}}>Беспроводные наушники</p>
     <div className='flex items-center pr-32'>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"48px"}} src="./Naushnik4.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"120px",marginTop:"20px",}}>Apple AirPods</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>9527 ₸</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.7</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"48px"}} src="./Naushnik5.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"120px",marginTop:"20px",}}>GERLAX GH-04</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>6527 KZT</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.7</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div>
       <div style={{ marginRight:"25px",background:"white",width:"320px", height:"320px",borderRadius:"20px",paddingTop:"20px"}}>
        <div style={{  position: "relative",marginRight:"25px",background:"white",width:"320px", height:"370px",borderRadius:"20px",paddingTop:"20px"}}>
            <img style={{marginLeft:"48px"}} src="./Naushnik6.png" alt="" />
            {/* <Checkbox sx={{color:"black",position:"absolute" , top:"5px", right:"5px"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  />} /> */}
            <div>
                <div className='flex'>
                    <p className='font-medium ' style={{marginLeft:"20px",marginRight:"105px",marginTop:"20px",}}>BOROFONE BO4</p>
                    <p className='font-medium ' style={{marginTop:"20px",color: "rgba(255, 165, 66, 1)"}}>7527 KZT</p>
                </div>
                <div>
                    <p className='flex items-center font-medium ' style={{color:"rgba(131, 131, 131, 1)",marginLeft:"25px",marginRight:"165px",marginTop:"20px",}}><IoIosStar style={{fill:"orange"}} className='mr-2'/>4.7</p>   
                </div>
            </div>
        </div>  
        
        
        
      </div>
     
     </div>
    </div>
    </div>
  )
}

export default Card
