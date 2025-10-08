import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Card from './Components/Card/Card'
import Card2 from './Components/Card/Card2'
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className='ml-36 '>
      <Header />
      <Navbar/>
      <Card/>
      <Card2/>
      <Footer/>
    </div>
  )
}

export default App
