import React from 'react'
import Footer from "../Body/footer"
import Index from '../Body/dashboard'
import Header from '../Body/header'

const page = () => {
  return (
    <div>
        <Header/>
        <Index/>
        <Footer/>
    </div>
  )
}

export default page