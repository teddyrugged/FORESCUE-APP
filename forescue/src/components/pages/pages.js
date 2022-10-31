import React from 'react'
// import './pages.css';
import Footer from "../Body/footer"
// import Index from '../Body/dashboard'
import Header from '../Body/header'
import Main from '../Body/main'
import Main2 from '../Body/mainb'

const page = () => {
  return (
    <div className='overall'>
        <Header/>
        <Main />
        < Main2 />
        {/* <Index/> */}
        <Footer/>
    </div>
  )
}

export default page