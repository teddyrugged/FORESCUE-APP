import React from 'react'
import "./dashboard.css";


const header = () => {
  return(

    <header>
      <nav>
        <h2 className='logo'>FORESCUE</h2>
          <ul className='menu--items'>
            <li><a href = "/"> Guidlines</a></li>
            <li><a href = "/">How it works</a></li>
            <li><a href = "/ ">Contacts</a></li>
            <li><a href = "/">Join Us</a></li>
          </ul>
      </nav>
   </header>


  )
}

export default header



