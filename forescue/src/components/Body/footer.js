import React from 'react'
import "./dashboard"


const Footer = () => {
  return (
    <div>

        <div >
            <br></br>
            <footer>
                <p className='wid--foot'> © {new Date().getFullYear()} All Rights Reserved by Forescue</p>
                    <ul className='ft--list'>
                        <li><a href = "/"> Privacy Policy</a></li>
                        <li><a href = "/"> Term of use</a></li>
                        <li><a href = "/"> How it works</a></li>
                        <li><a href = "/"> Tutorial</a></li>
                        <li><a href = "/"> Site Map</a></li>
                    </ul>
            </footer>

        </div>
    </div>
  )
}

export default Footer